from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.llms.huggingface_api import HuggingFaceInferenceAPI
import os
from dotenv import load_dotenv


load_dotenv()


# HUGGINGFACE_API_TOKEN = os.getenv("HUGGINGFACEHUB_API_TOKEN")
# if not HUGGINGFACE_API_TOKEN:
#     raise ValueError("HUGGINGFACEHUB_API_TOKEN not found in environment variables")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class UserFeatures(BaseModel):
    no_of_dependents: int
    self_employed: str
    income_annum: float
    loan_amount: float
    loan_term: int
    residential_assets_value: float
    commercial_assets_value: float
    luxury_assets_value: float
    bank_asset_value: float
   

try:
    model = joblib.load("../models/credit_model.pkl")
    label_encoders = joblib.load("../models/label_encoders.pkl")
    # llm = HuggingFaceInferenceAPI(
    #     model_name="bigscience/bloom",
    #     max_new_tokens=256,
    #     token=HUGGINGFACE_API_TOKEN
    # )
     
    # documents = SimpleDirectoryReader("../rag/docs").load_data()
    # index = VectorStoreIndex.from_documents(documents)
    # query_engine = index.as_query_engine(llm=llm)
    
except Exception as e:
    print(f"Error during initialization: {str(e)}")
    raise

@app.post("/predict")
async def predict_risk(user: UserFeatures):
    try:
        input_df = pd.DataFrame([user.dict()])
        print(input_df.to_dict(orient="records")[0])

        for col in ["self_employed"]:
            if col in label_encoders:
                encoder = label_encoders[col]
                input_df[col] = encoder.transform(input_df[col].astype(str))
        
        model_features = model.feature_names_in_
        input_df = input_df[model_features]
        prediction = model.predict(input_df)[0]
        risk = "HIGH RISK (will likely default)" if prediction == 1 else "LOW RISK (safe)"
        return {"prediction": int(prediction), "risk": risk}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")

# @app.post("/predict_with_reason")
# async def predict_rag(user: UserFeatures):
#     try:
#         input_df = pd.DataFrame([user.dict()])
#         prediction = model.predict(input_df)[0]
#         risk = "HIGH RISK (will likely default)" if prediction == 1 else "LOW RISK (safe)"

#         query = f"Why would a user with the following characteristics be considered '{risk}': {user.dict()}"

#         rag_response = query_engine.query(query)

#         return {
#             "prediction": int(prediction),
#             "risk": risk,
#             "explanation": str(rag_response)
#         }
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")

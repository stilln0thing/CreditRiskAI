import pandas as pd
import joblib

# Load model and label encoders
model = joblib.load("models/credit_model.pkl")
label_encoders = joblib.load("models/label_encoders.pkl")


# New applicant data (sample input — update as needed)
new_user = {
    "no_of_dependents": 2,
    "self_employed": " No",
    "income_annum": 9600000,
    "loan_amount": 29900000,
    "loan_term": 12,
    "residential_assets_value": 2400000,
    "commercial_assets_value": 17600000,
    "luxury_assets_value": 22700000,
    "bank_asset_value": 8000000
}

# Convert to DataFrame
input_df = pd.DataFrame([new_user])

# Normalize column names
input_df.columns = input_df.columns.str.strip().str.lower()

# Encode categorical columns
for col in ["self_employed"]:
    le = label_encoders[col]
    input_df[col] = le.transform(input_df[col].astype(str))

# Predict
prediction = model.predict(input_df)[0]

# Decode prediction
loan_status = label_encoders["loan_status"].inverse_transform([prediction])[0]

# Output
print(input_df.dtypes)
print(f"Prediction: {prediction} → Loan Status: {loan_status}")

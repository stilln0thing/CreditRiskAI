# from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
# from llama_index.llms import HuggingFaceLLM
# import os


# os.environ["HUGGINGFACEHUB_API_TOKEN"] = "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"  # Replace with your actual token

# documents = SimpleDirectoryReader("docs/").load_data()


# index = VectorStoreIndex.from_documents(documents)


# llm = HuggingFaceLLM(
#     model_name="bigscience/bloom", 
#     temperature=0.7,
#     max_new_tokens=256
# )

# query_engine = index.as_query_engine(llm=llm)


# response = query_engine.query("What factors contribute to someone being high risk for credit default?")
# print(response)

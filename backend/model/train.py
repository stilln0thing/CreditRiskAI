# Importing Libraries
import pandas as pd
import numpy as np
import time
import matplotlib.pyplot as plt
import seaborn as sns
import joblib
import os

from sklearn.model_selection import train_test_split
from sklearn import preprocessing
from sklearn.metrics import accuracy_score, r2_score

# Classifiers
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB

# Load dataset
df = pd.read_csv("data/loan_approval_dataset_modified.csv")
print("Columns in dataset:", df.columns.tolist())

# Clean columns
df.columns = df.columns.str.strip()

# Drop unnecessary columns
df.drop(columns=["loan_id", "education"], errors="ignore", inplace=True)

# Fill missing values with mode
df.fillna(df.mode().iloc[0], inplace=True)

# Encode categorical columns
label_encoders = {}
cat_cols = ['self_employed', 'loan_status']
for col in cat_cols:
    le = preprocessing.LabelEncoder()
    df[col] = le.fit_transform(df[col])
    label_encoders[col] = le

# Features and target
X = df.drop('loan_status', axis=1)
y = df['loan_status']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Define models
models = {
    "KNN": KNeighborsClassifier(n_neighbors=3),
    "RandomForest": RandomForestClassifier(n_estimators=10),
    "LogisticRegression": LogisticRegression(max_iter=1000),
    "SVC": SVC(probability=True),
    "GradientBoosting": GradientBoostingClassifier(),
    "GaussianNB": GaussianNB()
}

# Train and evaluate models
print("\nModel Performance on Training Set:\n")
best_model = None
best_accuracy = 0
best_name = ""

for name, model in models.items():
    start_time = time.time()
    model.fit(X_train, y_train)
    end_time = time.time()
    
    y_pred_train = model.predict(X_train)
    acc = accuracy_score(y_train, y_pred_train)
    r2 = r2_score(y_train, y_pred_train)
    duration = end_time - start_time
    
    print(f"{name}:")
    print(f"  Accuracy: {acc*100:.2f}%")
    print(f"  R² Score: {r2:.4f}")
    print(f"  Time Taken: {duration:.4f} seconds\n")
    
    if acc > best_accuracy:
        best_accuracy = acc
        best_model = model
        best_name = name

# Save the best model
os.makedirs("models", exist_ok=True)
joblib.dump(best_model, f"models/credit_model.pkl")
joblib.dump(label_encoders, "models/label_encoders.pkl")

print(f"Best model '{best_name}' saved with {best_accuracy*100:.2f}% accuracy.")

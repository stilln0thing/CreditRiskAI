"use server"

interface PredictionData {
  no_of_dependents: number
    self_employed: string
    income_annum: number
    loan_amount: number
    loan_term: number
    residential_assets_value: number
    commercial_assets_value: number
    luxury_assets_value: number
    bank_asset_value: number
}

export async function predictRisk(data: PredictionData) {
  try {
    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Failed to get prediction")
    }

    return await response.json()
  } catch (error) {
    console.error("Error predicting risk:", error)
    throw error
  }
}

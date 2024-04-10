import mongoose from 'mongoose'

export const NormalPurchaseSchema = new mongoose.Schema({
  purchase_price: { type: Number, default: 0 },
  closing_costs: { type: Number, default: 0 },
  finder_fee_cost: { type: Number, default: 0 },
  rehab_expense: { type: Number, default: 0 },
  mortgage: {
    ltv_of_arv: { type: Number, default: 0 },
    closing_costs: { type: Number, default: 0 },
    down_payment: { type: Number, default: 0 },
    interest_rate: { type: Number, default: 0 },
    loan_term: { type: Number, default: 0 }
  },
  gross_rental_income: { type: Number, default: 0 },
  maintenance: { type: Number, default: 0 },
  vacancy: { type: Number, default: 0 },
  property_management: { type: Number, default: 0 },
  capital_expenses: { type: Number, default: 0 },
  hoa_fees: { type: Number, default: 0 },
  utilities: { type: Number, default: 0 },
  insurance: { type: Number, default: 0 },

  annual_taxes: { type: Number, default: 0 },
  annual_property_insurance: { type: Number, default: 0 },

  created: { type: Date, default: Date.now },
  updated: { type: Date }
})

const NormalPurchase =
  mongoose.models.normalpurchases || mongoose.model('normalpurchases', NormalPurchaseSchema)

export default NormalPurchase

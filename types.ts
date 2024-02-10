export const packages = {
  yearly: "yearly", 
  monthly: "monthly"
} as const

export type packagesType = typeof packages[keyof typeof packages]

interface InsurancePlan {
  name: string;
  description: string;
  price: number;
  "package": packagesType;
  createdAt: string;
  updatedAt: string;
}

export default InsurancePlan;

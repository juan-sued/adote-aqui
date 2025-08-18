export interface ICategory {
  id: number
  name: string
  description?: string | null // Campo opcional para suportar valores nulos
  createdAt: Date
  updatedAt: Date
}

import api from "./api";

export const createAnimal = async (animal) => {
  const response = await api.post("animal", animal)
  console.log(response)
  return response.data
}
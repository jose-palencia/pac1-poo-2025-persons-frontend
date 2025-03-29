import { personsApi } from "../../api/persons.api";

export const countsAction = async () => {
  try {
    const { data } = await personsApi.get("/statistics/counts");

    return data;

  } catch (error) {
    console.error(error);
  }
}
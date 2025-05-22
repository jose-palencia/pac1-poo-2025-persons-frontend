import { AxiosError } from "axios";
import { ApiResponse } from "../../../infrastructure/interfaces/api.response";
import { CountryCreateResponse } from "../../../infrastructure/interfaces/country-create.response";
import { CountryModel } from "../../models/country.model";
import { ApiErrorResponse } from "../../../infrastructure/interfaces/api-error.response";
import { personsApi } from "../../api/persons.api";

export const createCountryAction = async (
    country: CountryModel
): Promise<ApiResponse<CountryCreateResponse>> => {

    try {

        const { data } = await personsApi
            .post<ApiResponse<CountryCreateResponse>>(
                "/countries",
                country
            );

        return data;

    } catch (error) {
        const apiError = error as AxiosError<ApiErrorResponse>;

        if (apiError.response) {
            throw new Error(apiError.response.data.message)
        } else if (apiError.request) {
            throw new Error("Error de conexión.")
        } else {
            throw new Error("Error desconocido.")
        }
    }

}
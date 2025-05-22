import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react"
import { getPaginationCountriesAction } from "../../core/actions/countries/get-pagination-countries.action";
import { CountryModel } from "../../core/models/country.model";
import { createCountryAction } from "../../core/actions/countries/create-country.action";
import { useNavigate } from "react-router";

export const useCountries = () => {
  
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  
  const countriesPaginationQuery = useQuery({
    queryKey: ["countries", page, pageSize, searchTerm], // Unique key 
    queryFn: () => getPaginationCountriesAction(page, pageSize, searchTerm),
    staleTime: 1000 * 60 * 5, // 5M
    refetchOnWindowFocus: false,
  });

  const createCountryMutation = useMutation({
    mutationFn: (country: CountryModel) => createCountryAction(country),
    onSuccess: (data) => {
      if(data.status) {
        navigate("/countries");
      }
    },
    onError: (data) => {
      console.log(data);
    }
  });

  const refetch = countriesPaginationQuery.refetch;

  const refreshCountries = useCallback(() => {
    refetch();
  }, [refetch]);

  return {
    // Properties
    page,
    pageSize,
    searchTerm,
    countriesPaginationQuery,
    createCountryMutation,

    // Methods
    setPage,
    setPageSize,
    setSearchTerm,
    refreshCountries,
  }
}

import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react"
import { getPaginationCountriesAction } from "../../core/actions/countries/get-pagination-countries.action";

export const useCountries = () => {
  
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  
  const countriesPaginationQuery = useQuery({
    queryKey: ["countries", page, pageSize, searchTerm], // Unique key 
    queryFn: () => getPaginationCountriesAction(page, pageSize, searchTerm),
    staleTime: 1000 * 60 * 5, // 5M
    refetchOnWindowFocus: false,
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

    // Methods
    setPage,
    setPageSize,
    setSearchTerm,
    refreshCountries,
  }
}

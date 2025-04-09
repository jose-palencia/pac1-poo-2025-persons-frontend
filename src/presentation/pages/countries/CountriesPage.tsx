import { ArrowBigLeft, ArrowBigRight, Edit, Plus, Search, Trash } from "lucide-react"
import { Title } from "../../components/shared/Title"
import { useCountries } from "../../hooks/useCountries"
import React, { useState } from "react";

export const CountriesPage = () => {

  const [searchField, setSearchField] = useState("");

  const { countriesPaginationQuery,
    searchTerm,
    setSearchTerm,
    setPage,
    page,
    refreshCountries } = useCountries();

  // console.log(countriesPaginationQuery.data);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value)
  }

  const handleClickSearch = () => {
    setPage(1);
    setSearchTerm(searchField);
    //refreshCountries();
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClickSearch();
    }
  }

  return (
    <div className="w-full flex flex-col">
      <Title text="Países" />

      {/* Search and options */}
      <div className="w-full flex flex-col md:flex-row gap-2">
        <input
          value={searchField}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          type="search"
          className="w-full bg-gray-200 rounded-md p-2"
          placeholder="Buscar"
        />
        <button
          onClick={handleClickSearch}
          className="flex flex-row items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 p-2 rounded-md cursor-pointer" >
          <Search size={24} />
          <span>Buscar</span>
        </button>
        <button className="flex flex-row items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 p-2 rounded-md cursor-pointer" >
          <Plus size={24} />
          <span>Agregar</span>
        </button>
      </div>

      {/* Table */}
      <div className="rounded-md mt-4 overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-500 text-white">
            <tr>
              {/* <th className="p-2 text-left">ID</th> */}
              <th className="p-2 text-left">País</th>
              <th className="p-2 text-left">Código alfa 3</th>
              <th className="p-2 text-left">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {countriesPaginationQuery.data &&
              countriesPaginationQuery.data.data.items.map(country => (
                <tr key={country.id} className="hover:bg-gray-200">
                  {/* <td className="p-2">{country.id}</td> */}
                  <td className="p-2">{country.name}</td>
                  <td className="p-2">{country.alphaCode3}</td>
                  <td className="p-2">
                    <div className="flex flex-row items-center gap-2">
                      <button className="flex flex-row items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 p-2 rounded-md cursor-pointer" >
                        <Edit size={18} />
                      </button>
                      <button className="flex flex-row items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 p-2 rounded-md cursor-pointer" >
                        <Trash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex flex-row items-center justify-between bg-blue-500">
          <span className="p-2 text-white">Registros 120</span>
          <div className="flex flex-row items-center gap-2">
            <button className="flex flex-row items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 p-2 rounded-md cursor-pointer" >
              <ArrowBigLeft size={24} />
              <span>Anterior</span>
            </button>
            <button className="flex flex-row items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 p-2 rounded-md cursor-pointer" >
              <span>Siguiente</span>
              <ArrowBigRight size={24} />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

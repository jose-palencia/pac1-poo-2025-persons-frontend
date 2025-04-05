import { ArrowBigLeft, ArrowBigRight, Edit, Plus, Search, Trash } from "lucide-react"
import { Title } from "../../components/shared/Title"

export const CountriesPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Title text="Países" />

      {/* Search and options */}
      <div className="w-full flex flex-col md:flex-row gap-2">
        <input
          type="search"
          className="w-full bg-gray-200 rounded-md p-2"
          placeholder="Buscar"
        />
        <button className="flex flex-row items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 p-2 rounded-md cursor-pointer" >
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
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">País</th>
              <th className="p-2 text-left">Código alfa 3</th>
              <th className="p-2 text-left">Opciones</th>

            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-200">
              <td className="p-2">1</td>
              <td className="p-2">Honduras</td>
              <td className="p-2">HND</td>
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

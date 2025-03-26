import { Globe, Users } from "lucide-react"
import { Title } from "../../components/shared/Title"

export const HomePage = () => {
  return (
    <div>
      <Title text="Página de Inicio" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-row items-center justify-start gap-4">
          {/* icono */}
          <div>
            <Globe size={48} />
          </div>

          {/* titulo y contenido */}
          <div>
            <h2 className="text-lg font-bold mb-2">Países</h2>

            <span className="text-gray-800">Total:</span>
            <span>110</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-row items-center justify-start gap-4">
          <div>
            <Users size={48} />
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Personas</h2>

            <span className="text-gray-800">Total: </span>
            <span>1000000</span>
          </div>
        </div>

      </div>
    </div>
  )
}

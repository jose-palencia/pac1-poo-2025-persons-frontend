import { Globe, Users } from "lucide-react"
import { Title } from "../../components/shared/Title"
import { DashboardCard } from "../../components/home/DashboardCard"

export const HomePage = () => {
  return (
    <div>
      <Title text="Página de Inicio" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DashboardCard
          title="Países"
          to="/countries/create"
          countValue={150}
          icon={<Globe size={48} />}
        />

        <DashboardCard
          title="Personas"
          to="/persons/create"
          countValue={15080}
          icon={<Users size={48} />}
        />

      </div>
    </div>
  )
}

import { Route, Routes } from "react-router"
import { Navbar } from "../presentation/components/layout/Navbar"

export const AppRouter = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <Routes>
                <Route path="/" element={<p>Hola Mundo - Home</p>} />
                <Route path="/countries" element={<p>Hola Mundo - Countries</p>} />
                <Route path="/persons" element={<p>Hola Mundo - Persons</p>} />
            </Routes>
        </div>
    )
}

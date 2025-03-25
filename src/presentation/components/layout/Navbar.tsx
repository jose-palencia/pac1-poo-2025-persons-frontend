import { Globe, Home, Menu, Users } from "lucide-react";
import { NavLink } from "../shared/NavLink";
import { useState } from "react";
import { MobileNavLink } from "../shared/MobileNavLink";

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    {/* Logo y titulo */}
                    <div className="flex items-center">
                        <span className="font-LexendDeca-Bold text-xl">
                            Gestión de Personas
                        </span>
                    </div>

                    {/* Navegación en escritorio */}
                    <div className="hidden md:flex">
                        <NavLink to="/" active text="Inicio" icon={<Home size={18} />} />
                        <NavLink to="/countries" text="Países" icon={<Globe size={18} />} />
                        <NavLink to="/persons" text="Personas" icon={<Users size={18} />} />
                    </div>
                    {/* Botón de menu móvil */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-blue-200 focus:outline-none"
                        >
                            <Menu size={24} />
                        </button>

                    </div>

                </div>
            </div>

            {/* Menu móvil */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <MobileNavLink to="/" icon={<Home size={18} />} text="Inicio" active />
                        <MobileNavLink to="/countries" icon={<Globe size={18} />} text="Países" />
                        <MobileNavLink to="/persons" icon={<Users size={18} />} text="Personas" />
                    </div>
                </div>
            )}

        </nav>
    );
}
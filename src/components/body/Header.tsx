import { ThemeType } from "../../services/theme"
import Logo from "../pure/Logo"
import Nav from "../pure/Nav"

const Header = ({ theme }: { theme: ThemeType }) => {
    return (
        <header className="bg-primary flex justify-between w-full">
            <Logo theme={theme} />
            <Nav navList={['Inicio', 'Sobre mi', 'Contacto', 'Not Found']} />
            <span>MODOS DE LUZ</span>
        </header>
    )
}

export default Header
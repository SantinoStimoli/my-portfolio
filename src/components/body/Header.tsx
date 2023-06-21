import { ThemeType } from "../../services/theme"
import Logo from "../pure/Logo"
import Nav from "../pure/Nav"
import Options from "../pure/Options"

const Header = () => {
    return (
        <header className="bg-primary flex justify-between w-full py-2.5 px-3">
            <Logo />
            <Nav navList={['Inicio', 'Sobre mi', 'Contacto']} />
            <Options />
        </header>
    )
}

export default Header
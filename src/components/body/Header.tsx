import Logo from "../pure/Logo"
import Nav from "../pure/Nav"
import Options from "../pure/Options"

const Header = () => {
    return (
        <header className="bg-secondary_bg flex justify-between w-full py-2.5 pr-3">
            <Logo />
            <Nav navList={['Inicio', 'Sobre mi', 'Contacto']} />
            <Options />
        </header>
    )
}

export default Header
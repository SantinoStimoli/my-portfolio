import NavElement from "../pure/NavElement"

const Header = () => {
    return (
        <header>
            <ul className="bg-slate-500 flex justify-center">
                <NavElement to="Inicio" />
                <NavElement to="About Me" />
                <NavElement to="Not Found" />
            </ul>
        </header>
    )
}

export default Header
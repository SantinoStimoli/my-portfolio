import NavElement from "../pure/NavElement"

const Header = () => {
    return (
        <header className="bg-primary flex justify-between w-full">
            <div className="flex items-center gap-3 [&>span]:hover:left-0">
                <img className="w-16 h-fit my-auto z-1" src="/SS-LOGO-1.png" />
                <span className="relative -left-32 -z-1 transition-all duration-500 -md:hidden"> Santino Stimoli</span>
            </div>
            <ul className="flex justify-center">
                <NavElement to="Inicio" />
                <NavElement to="About Me" />
                <NavElement to="Contacto" />
                <NavElement to="Not Found" />
            </ul>
        </header>
    )
}

export default Header
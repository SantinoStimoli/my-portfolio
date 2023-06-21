import NavElement from "./NavElement"

const Nav = ({ navList }: { navList: string[] }) => {
    return (
        <ul className="flex justify-center">
            {navList.map((navLink: string, i: number) => {
                return (<NavElement key={i} to={navLink} />)
            })}
        </ul>
    )
}

export default Nav
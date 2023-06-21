const Logo = () => {

    const LOGO = {
        DARK: '/SS-LOGO-1.png',
        LIGHT: '/SS-LOGO-2.png'
    }

    return (
        <div className="flex flex-grow basis-0 items-center gap-3 logo-section">
            <img className="w-16 h-fit my-auto z-20 md:bg-primary" src={LOGO.DARK} />
            <span className=" text-white relative -left-32 z-10 transition-all duration-500 -md:hidden cursor-default"> Santino Stimoli</span>
        </div>
    )
}

export default Logo
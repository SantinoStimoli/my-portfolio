const Logo = () => {


    return (
        <div className="flex flex-grow basis-0 items-center gap-3 logo-section">
            <div className="w-fit my-auto z-20 md:bg-primary bg-primary">
                <img className="ml-3 w-16 h-fit" src='/SS-LOGO-1.png' />
            </div>
            <span className=" text-white relative -left-28 z-10 transition-all duration-500 -md:hidden cursor-default opacity-0"> Santino Stimoli</span>
        </div>
    )
}

export default Logo
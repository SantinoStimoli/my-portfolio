const Logo = ({ theme }: { theme: any }) => {
    return (
        <div className="flex items-center gap-3 [&>span]:hover:left-0">
            {/* <img className="w-16 h-fit my-auto z-20 md:bg-primary" src={} /> */}
            <span className=" text-white relative -left-32 z-10 transition-all duration-500 -md:hidden cursor-default"> Santino Stimoli</span>
        </div>
    )
}

export default Logo
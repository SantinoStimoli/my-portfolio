import IMAGE from '../../../assets/Santino-Stimoli.jpg'

const Image = () => {
    return (
        <section className="flex items-center justify-center xl:w-1/2 xl:bg-secondary_bg relative xl:h-screen xl:rounded-br-[50%] xl:rounded-tr-[50%] max-xl:mt-28 max-xl:mx-10">
            <img className='my-image w-[450px] relative xl:ml-1/2 max-xl:mb-10 ' src={IMAGE} alt="" />
        </section>
    )
}

export default Image
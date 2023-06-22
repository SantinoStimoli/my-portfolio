import IMAGE from '../../../assets/Santino-Stimoli.jpg'

const Image = () => {
    return (
        <section className="flex items-center justify-center w-1/2 bg-secondary_bg relative h-screen rounded-br-[50%] rounded-tr-[50%]">
            <img className='my-image w-[450px] relative ml-32' src={IMAGE} alt="" />
        </section>
    )
}

export default Image
import heroImg from '../../assets/Hero-img.svg'

const HeroSection = () => {


    return (
        <section className="text-gray-600 body-font md:px-6">
            <div className=" container mx-auto flex py-20  md:py-14 md:flex-row flex-col items-center">
                <div className="md:w-4/6">
                    <h1 className="text-[2rem] md:text-left md:text-[3.5rem] font-bold tracking-tighter text-center">Transforming Spaces with</h1>
                    <h1 className="text-center md:text-left text-[3rem] md:text-[5rem] font-bold relative bottom-4 md:bottom-8 tracking-tighter text-[#FD5956] ">Innovative Design.</h1>
                    <p className="text-center md:text-left md:text-[1.3rem]  relative bottom-4 md:bottom-8 font-light tracking-tighter">Whether you're looking to design a modern home, revitalize an urban space, or create a sustainable office environment, our team of expert architects is here to deliver exceptional results.</p>
                    <div className="flex justify-center md:justify-start pt-6 md:pt-0">
                        <button className="bg-[#FD5956] px-4 py-2 md:px-6 md:py-2 rounded-md font-semibold">Explore Our Projects</button>
                        <button className=" text-[#FD5956] px-4 py-2 md:px-6 md:py-2 font-semibold ml-4">Get in Touch</button>
                    </div>

                </div>
                <div className="md:w-3/6 hidden md:block">
                    <img className='' src={heroImg} alt="Logo" />
                </div>
            </div>

            <div className='md:flex justify-around my-6'>
                <div className='text-center '>
                    <h1 className='font-bold text-[#FD5956] text-6xl'>300<span>+</span></h1>
                    <p className='font-medium text-xl uppercase'>Satisfied Customers</p>
                </div>
                <div className='text-center pt-6 md:pt-0'>
                    <h1 className='font-bold text-[#FD5956] text-6xl'>10<span>+</span></h1>
                    <p className='font-medium text-xl uppercase'>Years of Experience</p>
                </div>
                <div className='text-center pt-6 md:pt-0'>
                    <h1 className='font-bold text-[#FD5956] text-6xl'>8<span>+</span></h1>
                    <p className='font-medium text-xl uppercase'>Award Winning Projects</p>
                </div>

            </div>
        </section>
    )
}

export default HeroSection
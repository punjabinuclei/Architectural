import Lottie from 'react-lottie';
import animationData from '../../assets/Animation - 1721668214534.json';

const Navbar = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <div className="container px-6 py-6 flex justify-around">
                <div className='flex'>
                    <div className='py-4'>
                        <Lottie
                            options={defaultOptions}
                            height={40}
                            width={40}
                        />
                    </div>
                    <h1 className="px-6 py-6 font-bold text-xl">ArcCrafted.</h1>
                </div>

                <div className="flex justify-around font-light text-md px-6 py-7">
                    <a className="px-4">Home</a>
                    <a className="px-4">Projects</a>
                    <a className="px-4">Architecture</a>
                    <a className="px-4">Interior</a>
                    <a className="px-4">About</a>
                </div>

                <div>
                    <button className=" font-medium text-lg px-6 py-6">Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <div className="text-white flex-col justify-center">
            <div className="text-center max-w-[800ox] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold">GROWING WUTH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow With Data</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4"> Fast, Flexible, Financing for</p>
                    <ReactTyped
                        className="md:text-5xl sm:text-4xl text-xl font-bold ml-2"
                        strings={['BTB', 'BTC', 'SASS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500 mt-2">Monitor your data analytics to increase revenue for BTB, BTC and SASS</p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-7 py-3 text-black">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Hero
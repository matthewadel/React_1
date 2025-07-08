import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

export const Cards = () => {

    const Card = ({ image, planName, price }: { image: string, planName: string, price: string }) => {
        return (
            <div className="text-black w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-whtie' src={image} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>{planName}</h2>
                <p className='text-center text-4xl font-bold'>{price}</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b border-gray-200 mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b border-gray-200 mx-8'>1 Granted User</p>
                    <p className='py-2 border-b border-gray-200 mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] text-black rounded-md hover:bg-black hover:text-[#00df9a] font-medium w-[200px] my-6 px-6 py-3 mx-auto'>Start Trial</button>
            </div>
        )
    }

    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                {Card({ image: Single, planName: 'Single User', price: '$149' })}
                {Card({ image: Double, planName: 'Partnership', price: '$199' })}
                {Card({ image: Triple, planName: 'Group Account', price: '$299' })}
            </div>
        </div>
    )
}

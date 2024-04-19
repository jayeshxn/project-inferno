export default function Hero() {
    return (
        <>
            <div className='w-[100vw] my-[100px] flex text-center justify-around items-center p-10'>
                <div>
                    <h1 className='font-bold text-[80px] text-[#6E260E]'>HOTEL REDWOOD</h1>
                    <h3 className='font-bold text-[48px] text-amber-400'>Your Vacation Destination</h3>
                </div>
                <img
                    src='https://res.cloudinary.com/dme9vltjf/image/upload/v1713468286/Pngtree_luxury_ornamental_mandala_design_in_7462938_gqasfo.png'
                    alt='loader'
                    className='w-[30%] animate-spin-slow'/>
            </div>
            <h2 className='font-bold text-[48px] text-amber-400 text-center'>✨About Us✨</h2>
            <div className='w-[90vw] my-[30px] flex mx-auto justify-around items-center'>
                <img
                    src='https://res.cloudinary.com/dme9vltjf/image/upload/v1713471276/images_qdycik.jpg'
                    alt='hotel'
                    className='w-[40%] rounded-lg'
                />
            <p className='w-[40%] text-[#6E260E] text-[28px]'>Welcome to Hotel Redwood, where luxury meets innovation. Experience seamless comfort with cutting-edge technology. Your perfect stay awaits. Book now and discover a new era of hospitality.</p>
            </div>
        </>
    );
}
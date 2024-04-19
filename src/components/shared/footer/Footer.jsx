export default function Footer() {
    return (
        <footer className='bg-gray-800 p-4 text-center'>
            <p className='text-[36px] text-yellow-100'>✨Reach Out to Us!✨</p>
            <div className='flex justify-around my-[20px] w-[90%]'>
                <div className='flex flex-col justify-evenly gap-[8px]'>
                    <p className='text-white text-xl'>📞Helpdesk: +91 8144325789</p>
                    <p className='text-white text-xl'>💁‍♀️Reception: +91 9623366689</p>
                    <p className='text-white text-xl'>🍽️Restaurant: +91 9623366689</p>
                    <p className='text-white text-xl'>🚗Car Rentals: +91 9623366689</p>
                </div>
                <div className='flex flex-col justify-evenly text-start gap-[8px]'>
                    <p className='text-white text-xl'>📬Mail: redwood.resorts@hotmail.com</p>
                    <p className='text-white text-xl'>🏠Address: 21, Eve Street, South Wyoming, US</p>
                    <p className='text-white text-xl'>🌐Restaurant: redwood-resorts.com</p>
                    <p className='text-white text-xl'>🕊️Twitter: Redwood_Resorts</p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14053432.518186426!2d65.31354582140894!3d30.689887857721207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f939965459c1b%3A0x559863a53dc84a3f!2sRedwood%20resorts!5e0!3m2!1sen!2sin!4v1713472235556!5m2!1sen!2sin"
                    width="300" height="225" style={{border:0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p className='text-xl text-orange-200'>Designed and Developed with 💜 by Jayesh</p>
        </footer>
    );
}
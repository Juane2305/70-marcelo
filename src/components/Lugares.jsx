import copas from '../assets/copas.svg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Places = ({salon, hora_fiesta}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className='w-full pt-10 flex flex-col items-center gap-y-16 font-merriweather'>
      <section className='flex flex-col gap-y-20 md:gap-y-0 md:flex-row justify-center gap-x-36'>
        <div className=' flex flex-col justify-center items-center gap-y-3' data-aos= 'fade-left'>
          <img src={copas} alt="" className='size-40'/>
          <h2 className='text-center font-light text-2xl tracking-wider'>FIESTA</h2>
          <p className='font-extralight text-md text-center px-5 text-gray-700'>La fiesta será en {salon} <br /> a las {hora_fiesta}</p>
        </div>
      </section>
    </div>
  )
}

export default Places
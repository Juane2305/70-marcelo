import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types'


const Asistencia = ({ clase, claseButton, claseTitle, linkAsistencia }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      {linkAsistencia && linkAsistencia.trim() !== "" && (
        <div className={`py-20 ${clase} font-merriweather`}>
          <div className="h-full flex flex-col justify-center items-center space-y-2">
            <h2
              className={`text-2xl font-light text-center ${claseTitle}`}
              data-aos="fade-up"
            >
              Confirmación de Asistencia
            </h2>
            <p className='py-5 font-light'>¡Cuento con tu presencia!</p>
            <a href={linkAsistencia} target="_blank" rel="noopener noreferrer" data-aos="fade-up">
              <button className={`${claseButton}`}>
                Confirmar asistencia
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Asistencia;

Asistencia.propTypes = {
  plan: PropTypes.string.isRequired,
  fecha_cuenta_regresiva: PropTypes.string.isRequired,
  imagenes: PropTypes.string,
  cancion: PropTypes.string,
  fondoMobile: PropTypes.string,
  fondo: PropTypes.string,
  novios: PropTypes.string.isRequired,
  fecha_evento: PropTypes.string.isRequired,
  nombre_iglesia: PropTypes.string,
  hora_ceremonia_religiosa: PropTypes.string,
  linkCeremonia: PropTypes.string,
  nombre_salon: PropTypes.string,
  hora_evento: PropTypes.string,
  linkFiesta: PropTypes.string,
  ig_user: PropTypes.string,
  fecha_comienzo_calendario: PropTypes.string,
  fecha_fin_calendario: PropTypes.string,
  dressCode: PropTypes.string,
  cbu: PropTypes.string,
  alias: PropTypes.string,
  banco: PropTypes.string,
  nombre_completo: PropTypes.string,
  link_asistencia: PropTypes.string,
  mensaje_personalizado: PropTypes.string,

}.isRequired;
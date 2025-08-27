import PropTypes from "prop-types";

import Countdown from "../components/Countdown";
import Lugares from "../components/Lugares";
import GoogleCalendarButton from "../components/GoogleCalendarButton";
import DressCode from "../components/DressCode";
import DatosBancarios from "../components/DatosBancarios";
import Asistencia from "../components/Asistencia";
import Footer from "../components/Footer";
import TextoFinal from "../components/TextoFinal";
import MusicPlayer from "../components/MusicPlayer"
import { GalleryPraga } from "../components/GalleryPraga";
import cancion from "../assets/song.mp3"

const Invitacion = () => {
  const targetDate = new Date("2025-12-06T13:00:00-03:00");

  const colorPrincipal = "#d0bcab";
  const colorSecundario = "#d0bcab";

  const images = [
    {
      index: 1,
      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1756219502/bf83c731-d672-4ecc-82aa-75372f5379cd.png",
    },
    {
      index: 2,
      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1756219469/d77b8056-67b3-41e9-8f6b-f32e71ed9d12.png",
    },
    {
      index: 3,
      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1756219531/7a483688-d0e2-4d42-a6e0-7645447c740e.png",
    },
    {
      index: 4,
      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1756219543/e9f24e29-f26b-4677-97d0-7ac60e79c910.png",
    },
    {
      index: 5,
      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1756219560/48f46250-e031-4bdb-8cc0-0c40d055666c.png",
    },
    {
      index: 6,
      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1756219517/831ed1f8-3834-4320-8348-28212e6255cb.png",
    },
  ];
  
  return (
    <div className="w-full relative font-modernaText overflow-hidden">
      <MusicPlayer cancion={cancion} />

      <div
        className="relative flex flex-col items-center justify-center h-screen w-full text-center overflow-hidden bg-fixed"
        style={{
          backgroundImage: "url('/src/assets/boliche.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Vignette oscura para bordes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.75) 80%, rgba(0,0,0,0.95) 100%)',
            zIndex: 0,
          }}
        />
        {/* Capa adicional suave para resaltar el texto en mobile */}
        <div className="absolute inset-0 bg-black/20 md:bg-black/10 z-0" />

        {/* Botón de música (ya existe arriba con MusicScreen) */}

        {/* Título central */}
        <div className="mt-30 z-20">
          <h1
            className="z-10 font-parisienne italic text-7xl md:text-9xl leading-none mt-20 text-white"
            style={{
              textShadow:
                '0 0 6px rgba(255,255,255,0.9), 0 0 22px rgba(255,255,255,0.6), 0 0 38px rgba(255,255,255,0.35)',
            }}
          >
            Marcelo
          </h1>

          {/* Subtítulo */}
          <p
            className="z-10 mt-5 font-birthstone text-white/90 text-3xl md:text-4xl "
            style={{
              textShadow: '0 0 10px rgba(255,255,255,0.35)',
              letterSpacing: '0.06em',
            }}
          >
            7 décadas haciendo historia
          </p>
        </div>

        {/* Chevron dorado para scroll */}
        <div className="absolute bottom-6 z-10 animate-bounce">
          <svg
            className="w-8 h-8 md:w-10 md:h-10 opacity-90"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="chevGold" x1="0" y1="0" x2="24" y2="24">
                <stop stopColor="#ffd700" />
                <stop offset="0.6" stopColor="#d4af37" />
                <stop offset="1" stopColor="#b8860b" />
              </linearGradient>
            </defs>
            <path d="M6 9l6 6 6-6" stroke="url(#chevGold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div>
        <section
          id="contador"
          className="bg-beige w-full flex flex-col items-center justify-center gap-y-5 font-thin"
        >
          <Countdown
            targetDate={targetDate}
            containerClasses={
              "w-full flex flex-col justify-center items-center gap-y-5 bg-black text-white py-10 font-montserrat"
            }
          />
        </section>
        <section id="lugares" className="relative text-center bg-gray-50 py-10">
          <Lugares
            salon= "Jano's Eventos"
            hora_fiesta="21:00 hs"
          />
          <div className="flex justify-center items-center mt-5">
            <a
              href="https://maps.app.goo.gl/zyYYQgpNm7wbvWR59"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border border-[#d7b049] py-3 px-8 rounded-full bg-[#d7b049] text-white hover:bg-transparent hover:text-gray-800 transition cursor-pointer">
                Ubicación Google Maps
              </button>
            </a>
          </div>
        </section>
        <div className="bg-gray-50">
            <GalleryPraga images={images} texto="Nosotros" />
        </div>
        <div className="text-center text-white relative" style={{ backgroundColor: 'black' }}>
          <GoogleCalendarButton
            imgClass="text-white"
            titleCalendar={`Cumpleaños de Marcelo`}
            salon="Olga Cossettini 1031. Caba"
            fechaComienzo="20251122T2100000300"
            fechaFin="20251123T0300000300"
          />
        </div>
        <div className="relative">
          <DressCode dress_code="Elegante Sport" />
        </div>
        <DatosBancarios
          texto="¡El mejor regalo es que me acompañes en este día! Pero si de todas formas querés hacerme un regalo, podés hacerlo acá"
          cbu="0270002120004460090027"
          alias="BORDE.BRUJO.POPA"
          banco="Banco Supervielle"
          nombre="De Alba, Marcelo Jose"
          claseContenedor=" text-white font-montserrat"
          claseBoton="border border-[#d7b049] py-3 px-8 rounded-full bg-[#d7b049] text-white hover:bg-transparent transition"
          textSize="text-md"
          background={{ backgroundColor: "black" }}
         
          claseBotonModal={{
            backgroundColor: colorSecundario,
            borderColor: colorSecundario,
          }}
          styleModal={{ backgroundColor: colorSecundario }}
          styleBorderModal={{ borderColor: colorPrincipal }}
          styleTextColor={{ color: colorPrincipal }}
          borderModal="border-principal-light"
          textColor="text-principal-light"
        //   moneda_extranjera={invitacionData.moneda_extranjera}
        //   tipo_cuenta={invitacionData.tipo_cuenta}
        //   numero_cuenta={invitacionData.numero_cuenta}
        //   titular_extranjera={invitacionData.titular_extranjera}
        //   banco_extranjera={invitacionData.banco_extranjera}
        />
          <TextoFinal textoFinal="Hay momentos en la vida que son especiales por sí solos, compartirlos con los que quieres los convierten en momentos inolvidables" textClass="font-merriweather text-gray-600"/>
        <Asistencia
          linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLScK60lzNoScu8tHIekssS6ItUJRHRWjFAMy-1JCKicjaMGHnA/viewform?usp=dialog"
          clase="bg-fondo-banner border-t bordet-t-gray-800"
          claseButton="border border-[#d7b049] py-3 px-8 rounded-full bg-[#d7b049] text-white hover:bg-transparent transition hover:text-gray-800 cursor-pointer"
        />
        <Footer />
      </div>
    </div>
  );
};

Invitacion.propTypes = {
  invitacionData: PropTypes.shape({
    plan: PropTypes.string.isRequired,
    fecha_cuenta_regresiva: PropTypes.string.isRequired,
    imagenes: PropTypes.string.isRequired,
    novios: PropTypes.string.isRequired,
    fecha_evento: PropTypes.string.isRequired,

    nombre_iglesia: PropTypes.string,
    hora_ceremonia_religiosa: PropTypes.string,
    nombre_salon: PropTypes.string,
    hora_civil: PropTypes.string,
    hora_evento: PropTypes.string,
    linkCeremonia: PropTypes.string,
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

    cancion: PropTypes.string,

    mensaje_personalizado: PropTypes.string,
    moneda_extranjera: PropTypes.string,
    tipo_cuenta: PropTypes.string,
    numero_cuenta: PropTypes.string,
    titular_extranjera: PropTypes.string,
    banco_extranjera: PropTypes.string,
  }).isRequired,
};

export default Invitacion;

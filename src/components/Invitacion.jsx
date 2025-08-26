import PropTypes from "prop-types";

import Countdown from "../components/Countdown";
import Lugares from "../components/Lugares";
import GoogleCalendarButton from "../components/GoogleCalendarButton";
import DressCode from "../components/DressCode";
import DatosBancarios from "../components/DatosBancarios";
import Asistencia from "../components/Asistencia";
import Footer from "../components/Footer";
import TextoFinal from "../components/TextoFinal";
import MusicScreen from "../components/MusicScreen";
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

  const nombres = "7 y 0"
    .replace("&", "y")
    .split("y")
    .map((s) => s.trim());

  const iniciales = nombres
    .map((nombre) => nombre[0]?.toUpperCase() || "")
    .join(" ");

  return (
    <div className="w-full relative font-modernaText overflow-hidden">
      <div className="absolute">
        <MusicScreen cancion={cancion} />
      </div>

      <div className="bg-gray-50 font-merriweather relative flex flex-col items-center justify-center h-screen w-full text-center">

        <svg
          className="absolute top-0 right-0 w-1/2 max-w-[420px] h-auto opacity-80 pointer-events-none z-0"
          viewBox="0 0 420 220"
          fill="none"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        >
          <defs>
            <linearGradient id="silverStrokeTop" x1="0" y1="0" x2="420" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5f5f5" />
              <stop offset="0.5" stopColor="#b8860b" />
              <stop offset="1" stopColor="#bfbfbf" />
            </linearGradient>
            <linearGradient id="goldStrokeTop" x1="0" y1="0" x2="420" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffd700" />
              <stop offset="0.5" stopColor="#e6be8a" />
              <stop offset="1" stopColor="#b8860b" />
            </linearGradient>
          </defs>
          <path d="M0,40 C140,0 280,120 420,80" stroke="url(#silverStrokeTop)" strokeWidth="6" />
          <path d="M60,110 C200,70 260,180 420,140" stroke="url(#goldStrokeTop)" strokeWidth="3.5" strokeDasharray="6 8" />
        </svg>

        <svg
          className="absolute bottom-0 left-0 w-2/3 max-w-[520px] h-auto opacity-80 pointer-events-none z-0"
          viewBox="0 0 520 260"
          fill="none"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        >
          <defs>
            <linearGradient id="silverStrokeBottom" x1="0" y1="0" x2="520" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5f5f5" />
              <stop offset="0.5" stopColor="#d9d9d9" />
              <stop offset="1" stopColor="#b8860b" />
            </linearGradient>
          </defs>
          <path d="M0,200 C120,240 260,120 520,180" stroke="url(#silverStrokeBottom)" strokeWidth="6" />
          <path d="M0,235 C160,210 300,150 520,210" stroke="url(#silverStrokeBottom)" strokeWidth="3.5" strokeDasharray="6 8" />
        </svg>
        <div
          className="absolute text-gray-500 font-eleganteTitle text-[12rem] md:text-[17rem]"
          style={{
            opacity: 0.1,
            transform: "translateY(-50%)",
            top: "50%",
          }}
        >
          {iniciales}
        </div>

        <p className="z-10 text-lg uppercase font-vintageText tracking-widest mb-20">
          ¡Te invito a mi Cumpleaños!
        </p>

        <h1 className="z-10 text-5xl md:text-7xl font-light text-gray-800 italic">
          Marcelo
        </h1>

        <p className="z-10 mt-28 font-vintageText text-xl">
          22 de Noviembre de 2025
        </p>
      </div>

      <div>
        <section
          id="contador"
          className="bg-beige w-full flex flex-col items-center justify-center gap-y-5 font-thin"
        >
          <Countdown
            targetDate={targetDate}
            containerClasses={
              "w-full flex flex-col justify-center items-center gap-y-5 bg-darkGray text-white py-10 font-merriweather"
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
              <button className="border-2 border-gray-600 py-3 px-8 rounded-full bg-white text-gray-700 font-bold hover:bg-transparent  transition">
                Ubicación Google Maps
              </button>
            </a>
          </div>
        </section>
        <TextoFinal textoFinal="7 décadas haciendo historia" textClass="font-parisienne text-3xl"/>

        <div className="bg-gray-50">
            <GalleryPraga images={images} texto="Nosotros" />
        </div>
        <div className="text-center text-white relative" style={{ backgroundColor: colorPrincipal }}>
          <GoogleCalendarButton
            imgClass="text-white"
            buttonClass="hover:bg-white hover:text-gray-800"
            titleCalendar={`Cumpleaños de Marcelo`}
            salon="Olga Cossettini 1031. Caba"
            fechaComienzo="20251122T2100000300"
            fechaFin="20251123T0300000300"
          />
        </div>
        <div className="relative">
          <DressCode dress_code="Elegante sport" />
        </div>
        <DatosBancarios
          texto="¡El mejor regalo es que me acompañes en este día! Pero si de todas formas querés hacerme un regalo, podés hacerlo acá"
          cbu="0270002120004460090027"
          alias="BORDE.BRUJO.POPA"
          banco="Banco Supervielle"
          nombre="De Alba, Marcelo Jose"
          claseContenedor="bg-principal-light text-white font-merriweather"
          claseBoton="border-2 py-3 px-6 rounded-full hover:text-gray-800 transform transition-transform duration-300 ease-in-out font-semibold"
          textSize="text-md"
          background={{ backgroundColor: colorPrincipal }}
          styleBotonModal={{
            backgroundColor: colorSecundario,
            borderColor: "border-yellow-950",
          }}
          claseBotonModal={{
            backgroundColor: colorSecundario,
            borderColor: colorSecundario,
          }}
          styleModal={{ backgroundColor: colorSecundario }}
          styleBorderModal={{ borderColor: colorPrincipal }}
          styleTextColor={{ color: colorPrincipal }}
          claseModal="bg-principal-light"
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
          clase="py-10 bg-fondo-banner border-t bordet-t-gray-800"
          claseButton="border-2 py-3 px-6 rounded-full border-gray-800 font-semibold hover:border-yellow-950 hover:bg-white hover:text-gray:800"
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

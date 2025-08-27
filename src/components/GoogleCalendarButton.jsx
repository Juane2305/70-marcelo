import React from "react";
import calendar from "../assets/praga/calendar.json";
import Lottie from "react-lottie-player";

const GoogleCalendarButton = ({
  titleClass,
  titleCalendar,
  fechaComienzo,
  fechaFin,
  salon,
}) => {
  const title = `${titleCalendar}`;
  const details = "¡No olvides asistir al evento!";

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${fechaComienzo}/${fechaFin}&details=${encodeURIComponent(
    details
  )}&location=${encodeURIComponent(salon)}&ctz=America/Argentina/Buenos_Aires`;

  return (
    <div
      className="flex flex-col items-center gap-y-5 font-montserrat py-16"
      data-aos="fade-up"
    >
      <div style={{ width: 120, height: 120 }}>
        <Lottie
          loop
          play
          animationData={calendar}
          style={{ width: "100%", height: "100%"}}
        />
      </div>{" "}
      <h3 className={`text-md font-light ${titleClass}`}>
        Agregá el evento al calendario de Google:
      </h3>
      <a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[#d7b049] py-3 px-8 rounded-full bg-[#d7b049] text-white hover:bg-transparent transition"
      >
        Agregar al Calendario
      </a>
    </div>
  );
};

export default GoogleCalendarButton;

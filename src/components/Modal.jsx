import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCopyOutline } from "react-icons/io5";

const GOLD = "#D4AF37"; // dorado

export const Modal = ({
  claseBoton,
  cbu,
  alias,
  banco,
  nombre,
  moneda_extranjera,
  tipo_cuenta,
  numero_cuenta,
  titular_extranjera,
  banco_extranjera,

}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    // disparar animación de entrada en el siguiente tick
    setTimeout(() => setIsEntering(true), 10);
  };

  const closeModal = () => {
    // animación de salida
    setIsEntering(false);
    setTimeout(() => setIsOpen(false), 300); // debe coincidir con duration-300
  };

  const copiarTexto = (texto) => {
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert(`¡Copiado al portapapeles!`);
      })
      .catch(() => {
        alert('Error al copiar. Intenta de nuevo.');
      });
  };

  return (
    <>
      <button
        className={`${claseBoton} cursor-pointer mt-5`}
        data-aos='fade-up'
        onClick={openModal}
      >
        Ver Datos Bancarios
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay con fade */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isEntering ? 'opacity-100' : 'opacity-0'}`}
            onClick={closeModal}
          />

          {/* Contenedor del modal con fade + scale */}
          <div
            className={`relative mx-5 sm:mx-8 w-full max-w-lg rounded-2xl border shadow-2xl transition-all duration-300 ${isEntering ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ backgroundColor: '#FFFFFF', borderColor: GOLD }}
          >
            <div className="px-6 py-7 sm:px-10 sm:py-9 text-gray-900">
              <div className="flex flex-col justify-center text-center space-y-6 w-full">
                <h2 className="font-bold text-2xl" style={{ color: "black" }}>Datos Bancarios</h2>

                {moneda_extranjera && moneda_extranjera.trim() !== "" && (
                  <h3 className="text-xl font-semibold mb-2" style={{ color: GOLD }}>Datos en Pesos</h3>
                )}

                <div className="w-full space-y-4 text-left">
                  <p className="text-lg flex justify-between items-center">
                    <span><span className="font-semibold" style={{ color: GOLD }}>Nombre del titular:</span> {nombre}</span>
                  </p>

                  <p className="text-lg flex justify-between items-center">
                    <span><span className="font-semibold" style={{ color: GOLD }}>CBU:</span> {cbu}</span>
                    <button onClick={() => copiarTexto(cbu)}>
                      <IoCopyOutline style={{ color: '#000' }} className="ml-2" />
                    </button>
                  </p>

                  <p className="text-lg flex justify-between items-center">
                    <span><span className="font-semibold" style={{ color: GOLD }}>Alias:</span> {alias}</span>
                    <button onClick={() => copiarTexto(alias)}>
                      <IoCopyOutline style={{ color: '#000' }} className="ml-2" />
                    </button>
                  </p>

                  <p className="text-lg flex justify-between items-center">
                    <span><span className="font-semibold" style={{ color: GOLD }}>Banco:</span> {banco}</span>
                  </p>
                </div>

                {moneda_extranjera && moneda_extranjera.trim() !== "" && (
                  <div className="w-full mt-6">
                    <hr className="border-t mb-4" style={{ borderColor: GOLD }} />
                    <h3 className="text-xl font-semibold mb-3" style={{ color: GOLD }}>Datos en {moneda_extranjera}</h3>
                    <div className="text-left space-y-4">
                      <p className="text-lg flex justify-between items-center">
                        <span><span className="font-semibold" style={{ color: GOLD }}>{tipo_cuenta}: </span>{numero_cuenta}</span>
                        <button onClick={() => copiarTexto(numero_cuenta)}>
                          <IoCopyOutline style={{ color: '#000' }} className="ml-2" />
                        </button>
                      </p>

                      <p className="text-lg flex justify-between items-center">
                        <span><span className="font-semibold" style={{ color: GOLD }}>Titular:</span> {titular_extranjera}</span>
                      </p>

                      <p className="text-lg flex justify-between items-center">
                        <span><span className="font-semibold" style={{ color: GOLD }}>Banco:</span> {banco_extranjera}</span>
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex justify-center pt-2">
                  <button
                    className={`py-3 px-6 rounded-lg font-bold border transition-all duration-200 hover:scale-105`}
                    style={{ backgroundColor: GOLD, color: 'white', borderColor: GOLD }}
                    onClick={closeModal}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
import "./styles.css";
import { useState } from "react";

const InputContainer = () => {
  //logica abajo
  const [result, setResult] = useState(true);
  const [form, setForm] = useState({
    numero: "",
  });

  const handleSubmit = (e) => {
    const { numero } = form;
    if (numero == parseInt("7")) {
      console.log("el numero introducido es correcto");
      setResult(false);
    } else {
      console.log("numero incorrecto");
    }
  };

  const handleChange = (numero, evt) => {
    const value = evt.target.value;
    const formData = { ...form, numero: value };
    setForm(formData);
  };

  return (
    <>
      {result ? (
        <>
          <div className="input">
            <h1 className="input-titulo">Adiviná el número</h1>
            <p className="input-parrafo">Pista: es un numero primo! PD: HACER QUE SE DESACTIVE EL BTN DE ENVIAR PARA QUE NO SE ENVIE INFINITAMENTE Y MOSTRAR UN MENSAJE DE 'PERDISTE'</p>
            <input
              className="input-label"
              placeholder="Escriba aqui"
              onChange={(evt) => {
                handleChange("numero", evt);
              }}
            />
            <input
              className="input-btn"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            />
          </div>
        </>
      ) : (
        <div className="input">
          <p className="input-result">Felicidades! Me ganaste 😔👊</p>
        </div>
      )}
    </>
  );
};

export default InputContainer;

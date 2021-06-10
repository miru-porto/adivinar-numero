import "./styles.css";
import { useState } from "react";

const InputContainer = () => {
  //logica abajo
  const [result, setResult] = useState(true);

  const [tries, setTries] = useState(0);

  const [form, setForm] = useState({
    numero: "",
  });

  const fieldEmpty = () => {
    const { numero } = form;
    return [numero].includes("");
  };

  const handleClick = (e) => {
    const { numero } = form;
    setTries(tries + 1);
    if (numero == 47) {
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

  const oportunidadClick = (evt) => {
    return <p>Aca va la propuesta nueva</p>;
    console.log("aca actua el onClick");
  };

  if (tries >= 20) {
    return (
      <>
        <div className="input">
          <p className="input-result"> No podés seguir intentando</p>
          <img src="https://ugc.kn3.net/i/760x/http://1.bp.blogspot.com/_nfB-PIirvnc/TU7muMuI2MI/AAAAAAAAAPw/Atq1UqcvqNU/s320/trollface.jpg" />
        </div>
      </>
    );
  }
  const pista = () => {
    if (tries >= 17) {
      return <p className="input-pista">Otra pista: está entre 10 y 60</p>;
    }
  };

  const oportunidad = () => {
    if (tries >= 19) {
      return (
        <input
          className="input-btnOportunidad"
          type="submit"
          onClick={(evt) => oportunidadClick(evt)}
          value="¿Querés otra oportunidad?"
        />
      );
    }
  };

  return (
    <>
      {result ? (
        <>
          <div className="input">
            <h1 className="input-titulo">Adiviná el número</h1>
            <p className="input-parrafo">Pista: tiene menos de 3 cifras!</p>
            <p className="input-tries">
              LLevás perdiendo {tries} veces y te quedan{" "}
              <span className="input-intentos">{20 - tries}</span> intentos
            </p>

            {pista()}
            {oportunidad()}
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
              onClick={(e) => handleClick(e)}
              disabled={fieldEmpty()}
            />
          </div>
        </>
      ) : (
        <div className="input">
          <p className="input-result">Felicidades! Me ganaste 😔👊</p>
          <img
            className="input-imgTristeza"
            src="https://cdn140.picsart.com/334012617052211.png?type=webp&to=min&r=640"
          />
        </div>
      )}
    </>
  );
};

export default InputContainer;

import "./styles.css";
import { useState } from "react";

const InputContainer = () => {
  //logica abajo
  const [result, setResult] = useState(true);

  const [tries, setTries] = useState(0);

  const [posible, setPosible] = useState(false);

  const [form, setForm] = useState({
    numero: "",
  });

  //abajo 1er input
  const [priInput, setPriInput] = useState({
    respuesta: "",
    respuesta2: "",
  });

  const vaciar = () => {
    const { respuesta, respuesta2 } = priInput;
    return [respuesta, respuesta2].includes("");
  };

  //se termina

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

  const noClick = (ev) => {
    console.log('funcion noClick')
  }

  const handleChange = (numero, evt) => {
    const value = evt.target.value;
    const formData = { ...form, numero: value };
    setForm(formData);
  };
  //nuevo
  const rtaChange = (respuesta, evt) => {
    const valor = evt.target.value;
    const input = { ...priInput, respuesta: valor, respuesta2: valor };
    setPriInput(input)
  };

  const oportunidadClick = (evt) => {
    console.log("aca actua el onClick");
    setPosible(true);
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
          value="Estás a punto de perder, ¿Querés otra oportunidad?"
        />
      );
    }
  };

  if (posible) {
    return (
      <>
        <div className="input">
          <p className="input-pista">Aca va la propuesta nueva</p>
          <img src="https://firebasestorage.googleapis.com/v0/b/coderhouse-bijouterie.appspot.com/o/desafio.jpeg?alt=media&token=f5cd60fa-185a-4fde-b535-55b5a445fb55" />

          <label className="input-parrafo">
            a x=
            <input
              placeholder="Escriba aqui"
              className="input-label"
              onChange={(evt) => {
                rtaChange("respuesta", evt);
              }}
            />
          </label>
          <label className="input-parrafo">
            b x=
            <input
              placeholder="Escriba aqui"
              className="input-label"
              onChange={(evt) => {
                rtaChange("respuesta", evt);
              }}
            />
          </label>
          <input
            className="input-btn"
            type="submit"
            onClick={(ev) => noClick(ev)}
            disabled={vaciar()}
            //NO FUNCIONAN EL BTN ENVIAR CUANDO EL INPUT ESTA VACIO
          />
        </div>
      </>
    );
  }

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

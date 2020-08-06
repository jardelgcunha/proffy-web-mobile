import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/57026576?s=460&u=3b0435573973af468a16aca9341df60d948e556a&v=4"
          alt="Jardel Cunha"
          id="img-custom"
        />
        <div>
          <strong>Jardel Cunha</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias no âmbito de programação.
        <br />
        <br />
        Apaixonado por desenvolvimento frontend e backend.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;

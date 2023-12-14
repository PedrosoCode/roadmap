import React from "react";
import { Link } from "react-router-dom";
import MyLinks from "../components/MainPageLinkCards";

const Links = [
  { titulo: "curriculo", link: "https://gabrielribeiropedroso.com.br" },
  {
    titulo: "FrontEnd (em breve)",
    link: "./Frontend",
  },
  {
    titulo: "Backend (em breve)",
    link: "https://exemplo.com/javascript-avancado",
  },
];

function Home() {
  return (
    <div className="">
      <h1>Bem-vindo ao meu caderno de estudos,</h1>
      <p>
        Aqui estarei utilizando como referências os tópicos encontrados em
        Roadmap.sh
      </p>
      <div>
        {/* Mapeie os dados e renderize os cartões com base nas props */}
        {Links.map((dados, index) => (
          <MyLinks key={index} {...dados} />
        ))}
      </div>
    </div>
  );
}

export default Home;

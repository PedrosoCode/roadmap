import React from "react";
import Card from "../components/MainPageLinkCards";

const Links = [
  { titulo: "curriculo", link: "https://gabrielribeiropedroso.com.br" },
  {
    titulo: "FrontEnd (em breve)",
    link: "https://exemplo.com/javascript-avancado",
  },
  {
    titulo: "Backend (em breve)",
    link: "https://exemplo.com/javascript-avancado",
  },
];

function Home() {
  return (
    <div className="MainBG">
      <h1>Bem-vindo ao meu caderno de estudos,</h1>
      <p>
        Aqui estarei utilizando como referências os tópicos encontrados em
        Roadmap.sh
      </p>
      <div>
        {/* Mapeie os dados e renderize os cartões com base nas props */}
        {Links.map((dados, index) => (
          <Card key={index} {...dados} />
        ))}
      </div>
    </div>
  );
}

export default Home;

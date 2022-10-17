import React from "react";
import CardVideo from "./Componentes/CardVideo";
import "./styles.css";
import { GlobalStyled } from "./GlobalStyled";
import {ContainerStyled, NavStyled, ListStyled, MainStyled, HeaderStyled} from "./AppStyled"

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <ContainerStyled>
        <GlobalStyled/>
        <HeaderStyled>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </HeaderStyled>

        <MainStyled>
          <NavStyled>
            <ListStyled>
              <li>Início</li>
              <li>Em alta</li>
              <li>Inscrições</li>
              <hr />
              <li>Originais</li>
              <li>Histórico</li>
            </ListStyled>
          </NavStyled>

          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </MainStyled>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </ContainerStyled>
    </div>
  );
}

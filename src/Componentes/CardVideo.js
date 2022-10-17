import {CardStyled, ImgStyled, TextStyled} from './CardVideoStyled'

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <CardStyled onClick={reproduzVideo}>
      <ImgStyled src={props.image1} alt={props.textoAlternativo} />
      <TextStyled>{props.titulo}</TextStyled>
    </CardStyled>
  );
}

export default CardVideo;

import style from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({ character, onClose }) {
  let id = character.id;
  let name = character.name;
  let status = character.status;
  let species = character.species;
  let gender = character.gender;
  let originName = character.origin.name;
  let image = character.image;

  return (
    <div className={style.characterContainer}>
      <button className={style.closeButton} onClick={() => { onClose(id) }}>X</button>
        <Link to={`/detail/${id}`} >
          <p className={style.characterName}>{name}</p>
        </Link>
      <div className={style.infoCharacter}>
        <p className={style.paragraph}>Estatus: {status}</p>
        <p className={style.paragraph}>Especie: {species}</p>
        <p className={style.paragraph}>Genero: {gender}</p>
        <p className={style.paragraph}>Origen: {originName}</p>
      </div>
      <img className={style.image} src={image} />
    </div>
  );
}

export default Card;
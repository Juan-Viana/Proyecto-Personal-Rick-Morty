import Card from '../Card/Card';
import style from './Cards.module.css';

function Cards({ characters, onClose }) {
  return (
    <div className={style.charactersContainer}>
      {
        characters.map((element) => {
          return <Card
            character={element}
            onClose={onClose}
          />
        })
      }
    </div >
  );
}

export default Cards;
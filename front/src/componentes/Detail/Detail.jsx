import style from "./Detail.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div className={style.container}>
            <div className={style.characterContainer}>
                <h3 className={style.characterName}>{character.name && character.name}</h3>
                <img className={style.image} src={character.image && character.image} />
            </div >
        </div>
    )
}
export default Detail;
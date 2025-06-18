import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../types.ts";
import { Star } from "../islands/Star.tsx";


type Props = {
    character:Character
};

export const CharacterDetail:FunctionalComponent<Props> = (props) => {

    return(
        <div class="detail">

            {props.character.image ? <img src={props.character.image}></img> : "Image Not Found"}
            <h2>
                {props.character.name}   
                <Star characterId={props.character.id}/>
            </h2>
            {props.character.house ? <p>Casa: {props.character.house}</p>: <p>Casa: Desconocida</p>}
            
            <p>{props.character.alive ? "Vivo" : "Muerto"}</p>
            <a href="/" data-ancestor="true" aria-current="true">Volver</a>
        </div>
    )
}
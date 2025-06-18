import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../types.ts";
import { Star } from "../islands/Star.tsx";

type Props = {
    character: Character
}

export const CharacterCard:FunctionalComponent<Props> = (props) => {

    return(
        <div class="card">
            <a href={`/characters/${props.character.id}`}>
            {props.character.image ? <img src={props.character.image}></img> : <img src="no-image.jpg"></img>}
            
            </a>
            <div class="card-info">
                <a class="name" href={`/characters/${props.character.id}`}>{props.character.name}</a>
                <Star characterId={props.character.id}/>
            </div>
        </div>
    )
}
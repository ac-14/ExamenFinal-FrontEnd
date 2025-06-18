import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../types.ts";
import { CharacterCard } from "./CharacterCard.tsx";

type Props = {
    characters:Character[]
}

export const Characters:FunctionalComponent<Props> =(props) => {
    return(
        <div class="grid">
            {props.characters.map((c) => <CharacterCard character={c}/>)}
        </div>
    )
}
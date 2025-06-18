import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";

type Props= {
    characterId: string
}

export const Star:FunctionalComponent<Props> = (props) => {
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const cookies = document.cookie.split("; ");
        const favCookie = cookies.find(c=> c.startsWith("favorites="));
        if(favCookie){
            const favsContent = favCookie.split("=")[1];
            const favs = JSON.parse(favsContent) as string[];
            setIsFav(favs.includes(props.characterId))
        }
    }, []);


    const handleClick = () => {
        const cookies = document.cookie.split("; ");
        const favCookie = cookies.find(c=> c.startsWith("favorites="));
        const favs = favCookie ? JSON.parse(favCookie.split("=")[1]) as string[] : []
        let newFavs :string[]
        if(favs.includes(props.characterId)){
            newFavs = favs.filter(id => id !== props.characterId);
        } else{
            newFavs = [...favs, props.characterId];
        }
        document.cookie = `favorites=${JSON.stringify(newFavs)};path=/`;
        setIsFav(newFavs.includes(props.characterId))
    }

    return(
        <span class={isFav ? "star fav" : "star" } onClick={handleClick}>★</span>
    )
}

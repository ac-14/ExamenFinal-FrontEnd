import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { CharacterDetail } from "../../components/CharacterDetail.tsx";
import { Character } from "../../types.ts";
import Axios from "npm:axios"
type Data = {
    character: Character
}
export const handler:Handlers =  {
    GET: async(req:Request, ctx:FreshContext<unknown,Data>) =>{
        const id = ctx.params.id;
        const response = await Axios.get(`https://hp-api.onrender.com/api/character/${id}`);
        const character = response.data[0];
        return ctx.render({character})
    }
}


const Page = (props:PageProps<Data>) => {
    return(
        <CharacterDetail character={props.data.character}/>
    )
}

export default Page;


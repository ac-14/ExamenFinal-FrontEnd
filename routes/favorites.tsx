import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"
import { Characters } from "../components/Characters.tsx";
type Data = {
    characters: Character
}

export const handler:Handlers =  {
    GET: async(req: Request, ctx:FreshContext<unknown,Data>) => {
        const cookies = req.headers.get("cookie")?.split("; ");
        const favCookie = cookies?.find(c => c.startsWith("favorites="));
        if(favCookie){
            const favContent = favCookie.split("=")[1];
            const favs= JSON.parse(favContent) as string[];
            const response = await Promise.all(favs.map((f) => {return Axios.get(`https://hp-api.onrender.com/api/character/${f}`)}));
            const characters = response.map(r => r.data[0]);
            
            return ctx.render({characters})
        }
        return ctx.render()
    }
}

const Page = (props:PageProps<Data>) => {
    return(
        <div><Characters characters={props.data.characters}/></div>
    )
}

export default Page;
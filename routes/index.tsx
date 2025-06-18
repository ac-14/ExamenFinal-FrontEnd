import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Characters } from "../components/Characters.tsx";
import { Character } from "../types.ts";
import Axios from "npm:axios"
type Data = {
  characters: Character[]
}
export const handler:Handlers = {
  GET: async(req:Request, ctx:FreshContext<unknown,Data>) => {
    const response = await Axios.get("https://hp-api.onrender.com/api/characters");
    const characters:Character[] = response.data;

    return ctx.render({characters})
  }
}

const Page = (props:PageProps<Data>) => {
  return(
    <Characters characters={props.data.characters}/>
  )
}

export default Page;
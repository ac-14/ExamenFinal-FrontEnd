import { FunctionalComponent } from "preact/src/index.d.ts";

export const Header:FunctionalComponent = () => {
    return(
        <header class="header">
            <nav>
                <a href="/" data-current="true" aria-current="page">Todos</a>
                <a href="/favorites">Favoritos</a>
            </nav>
        </header>
    )
}
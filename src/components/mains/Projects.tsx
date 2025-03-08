import { useEffect } from "react"
import PageLayout from "../PageLayout"
import { BulletPointProp } from "../../types";

const bullets : BulletPointProp[] = [
    {
        title: "Roguelike Tutorials",
        subtitle: "July 2024 - August 2024",
        content: "I created a personal roguelike game through rogueliketutorials, which guided me in building a roguelike game using Python and libtcod. Throughout the process, I gained hands-on experience with procedural generation, turn-based mechanics, and managing game entities. I also learned how to structure a game engine, handle field-of-view calculations, and implement combat systems. This experience deepened my understanding of game development fundamentals and reinforced my ability to work with complex systems in Python."
    },
]

export default function Projects() {

    useEffect(() => {
        document.title = "Projects | Resume";
    }, []);

    return (
        <PageLayout 
                title={`Projects`}
                bullets={bullets}
                table={false}
                calc={true} />
    )
}
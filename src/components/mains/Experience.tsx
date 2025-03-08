import { useEffect } from "react"
import PageLayout from "../PageLayout"
import { BulletPointProp } from "../../types";

const bullets : BulletPointProp[] = [
    {
        title: "掌上方舟 | China, Shenzhen",
        subtitle: "Software Engineer | May 2024 - July 2024",
        content: "During my internship at 掌上方舟, I primarily worked with JavaScript to develop mobile games. I contributed to game mechanics, UI/UX enhancements, and performance optimizations, ensuring smooth gameplay across different devices. This experience strengthened my skills in front-end development, game logic implementation, and collaborating in a fast-paced development environment.",
    }
]

export default function Experience() {

    useEffect(() => {
        document.title = "Experience | Resume";
    }, []);

    return (
        <PageLayout 
                title={`Experience`}
                bullets={bullets}
                table={false}
                calc={false} />
    )
}
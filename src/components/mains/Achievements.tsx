import { useEffect } from "react"
import PageLayout from "../PageLayout"
import { BulletPointProp } from "../../types";

const bullets : BulletPointProp[] = [
    {
        title: "Canoeing |  2014 - 2017",
        subtitle: "National Gold Medal in 2016",
    },
    {
        title: "Basketball | 2018 - 2020",
        subtitle: "Finished Nationals in 5th Place in 2019",
    },
    {
        title: "Muay Thai | August 2024 - Present",
    },
]

export default function Achievements() {

    useEffect(() => {
        document.title = "Achievements | Resume";
    }, []);

    return (
        <PageLayout 
                title={`Achievements`}
                bullets={bullets}
                table={false}
                calc={true} />
    )
}
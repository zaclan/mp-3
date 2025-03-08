import { useEffect } from "react"
import PageLayout from "../PageLayout"
import { BulletPointProp } from "../../types";

const bullets : BulletPointProp[] = [
    {
        title: "Email",
        subtitle: "lanyk@bu.edu",
    },
    {
        title: "Phone",
        subtitle: "999-112-8234",
    },
    {
        title: "Address",
        subtitle: "123 Commonwealth, MA, USA",
    },
]

export default function Contacts() {

    useEffect(() => {
        document.title = "Contacts | Resume";
    }, []);

    return (
        <PageLayout 
                title={`Contacts`}
                bullets={bullets}
                table={true}
                calc={false} />
    )
}
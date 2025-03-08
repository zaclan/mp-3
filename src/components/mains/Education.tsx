import { useEffect } from "react"
import PageLayout from "../PageLayout"
import { BulletPointProp } from "../../types";


const bullets : BulletPointProp[] = [
    {
        title: "Boston University | Boston, MA", 
        subtitle: "BA in Computer Science",
        content: "Class of 2026",
    }, 
    {
        title: "Eunoia Junior College | Singapore, SG",
        subtitle: "A Level Certificate", 
        content: "Class of 2019",
    },
    {
        title: "Saint Joseph Insitution | Singapore, SG",
        subtitle: "O-Level Certificate",
        content: "Class of 2017"
    },
    {
        title: "Nanyang Primary School | Singapore, SG",
        subtitle: "PSLE Certificate",
        content: "Class of 2012"
    }

]

export default function Education() {

    useEffect(() => {
        document.title = "Education | Resume";
    }, []);

    return (
        <PageLayout 
        title={`Education`}
        bullets={bullets}
        table={false}
        calc={false} />
    )
}
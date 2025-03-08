import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import ContactTable from "./ContactTable";
import Calculator from "./Calculator";
import { StyledContent, StyledMain, StyledTitle } from "../SharedStyles";
import { PageProps } from "../types";
import BulletPoints from "./BulletPoints";
import { BulletPointProp } from "../types";


export default function PageLayout(prop : PageProps) {
    return ( 
        <>
        <Header /> 
        <StyledContent>
            <Nav />
            <StyledMain>
                <StyledTitle>{prop.title}</StyledTitle>
                {
                    prop.bullets.map((point : BulletPointProp) => 
                        <BulletPoints 
                            title={point.title}
                            subtitle={point.subtitle}
                            content={point.content} />
                    )
                }

                {
                    prop.table && (
                        <ContactTable />
                    )
                }

                {
                    prop.calc && (
                        <Calculator />
                    )
                }
            </StyledMain>
        </StyledContent>
        <Footer />
        </>
    )
}
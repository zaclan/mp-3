import styled from "styled-components";
import Nav from "../Nav";
import Footer from "../Footer";
import Header from "../Header";
import { StyledContent, StyledMain, StyledText, StyledTitle } from "../../SharedStyles";
import { useEffect } from "react";


const StyledDiv = styled.div`
    display: flex;
    justify-conent: center;
    margin-bottom: 3%;
    
    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledImage = styled.img`
    max-width: 50%;
    margin: 0 3% 3% 0%;
`;

export default function Home() {

    useEffect(() => {
        document.title = "Home | Resume";
    }, []);


    return (
        <>
        <Header />
        <StyledContent>
            <Nav />
            <StyledMain>
                <StyledTitle>Home</StyledTitle>
                <StyledDiv>
                    <StyledImage src="/profile.jpeg" alt="Zac Lan" />
                    <StyledText>
                        Hi, I'm Zac Lan and I'm a junior at Boston University studying Computer Science. I have a strong passion for problem-solving and building software that makes an impact. Lately, I've been diving into machine learning and full-stack development, exploring how technology can solve real-world challenges.
                        Outside of coding, I love hiking, playing guitar, and trying out new coffee spots around Boston. I'm also a big fan of basketball—both playing and watching. When I'm not working on projects or studying, you can probably find me at a local café or exploring new tech trends.
                    </StyledText>
                </StyledDiv>
                <StyledText>
                    Welcome to my website. You can find information about me through this online portfolio.
                </StyledText>
            </StyledMain>
        </StyledContent>
        <Footer />
        </>
    );
}
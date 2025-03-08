import styled from "styled-components"; 


export const StyledMain = styled.main`
    display: block;
    width: 70%;
    min-height: 100vh;
    padding: 3%;
    background-color: #202020;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

export const StyledTitle = styled.h2`
    font-size: calc(4px + 2.5vw);
    font-weight: 500;
    color: #00b8fb;
    margin-bottom: 4%;

    @media screen and (max-width: 750px) {
        text-align: center;
    }  
`;

export const StyledSubTitle = styled.h3`
    font-size: calc(4px + 1.25vw);
`;

export const StyledContent = styled.div`
    display: flex; 
    width: 100%
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

export const StyledText = styled.p`
    font-size: calc(4px + 1vw);
`;

export const BulletPointsDiv = styled.div`
    border-left: 0.5vw solid #00b8fb;
    padding-left: 2%;
    margin-bottom: 5%;
`;


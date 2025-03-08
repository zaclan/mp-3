import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #a2b2b8;
    padding: 1% 2%;
    justify-content: center;

    @media screen and (max-width: 750px) {
        justify-content: center;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const StyledName = styled.h1`
    font-size: calc(4px + 2vw);
    font-weight: 500; 
`

export const StyledDesc = styled.p`
    font-size: calc(4px+1vw);
`

export default function Header() {
    return (
        <StyledHeader>
                <StyledName>Zac Lan</StyledName>
                <StyledDesc id="title-desc">My Online Resume</StyledDesc>
        </StyledHeader>
    )
}
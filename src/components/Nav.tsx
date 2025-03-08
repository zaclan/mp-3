import { Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex; 
    width: 30%; 
    background-color: #101010;
  
    @media (max-width: 750px) {
        width: 100%;
    }
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 6%;
    gap: 2vw;
    width: 100%;
  
    @media (max-width: 750px) {
        flex-direction: row;
        padding: 1%;
        gap: 1%;
        width: 100%;
    }
`;

const StyledItem = styled.li`
    list-style-type: none;
    
    @media (max-width: 750px) {
        width: 100%;
        display: flex; 
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    font-size: calc(4px + 1.5vw);
    background-color: #202020;
    width: 90%;
    padding: 5%;
    border: 1px black solid;
    color: #f0f0f0;
    text-decoration: none; 
    
    &:hover {
        color: #00acfb;
    }
    
    @media (max-width: 750px) {
        font-size: calc(4px + 1vw);
        justify-content: center; 
        width: 100%;
    }
`;



export default function Nav(){
    return (
            <StyledNav>
                <StyledList>
                    <StyledItem><StyledLink to={`/`}>Home</StyledLink></StyledItem>
                    <StyledItem><StyledLink to={`/achievements`}>Achievements</StyledLink></StyledItem>
                    <StyledItem><StyledLink to={`/education`}>Education</StyledLink></StyledItem>
                    <StyledItem><StyledLink to={`/experience`}>Experience</StyledLink></StyledItem>
                    <StyledItem><StyledLink to={`/projects`}>Projects</StyledLink></StyledItem>
                    <StyledItem><StyledLink to={`/contacts`}>Contacts</StyledLink></StyledItem>
                </StyledList>
            </StyledNav>
    )
}
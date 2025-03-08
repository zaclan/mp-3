import { Link } from "react-router"
import styled from "styled-components"
import { StyledText } from "../SharedStyles";

const StyledFooter = styled.footer`
    background-color: #a2b2b8;
    padding: 1%;
`;

export default function Footer() {
    return (
        <>
            <StyledFooter>
                <StyledText>All rights reserved by Zac Lan <Link to={`/credits`}></Link> &copy;</StyledText>
            </StyledFooter>
        </>
    )
}
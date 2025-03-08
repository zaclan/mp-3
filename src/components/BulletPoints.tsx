import styled from "styled-components";
import { StyledText, StyledSubTitle } from "../SharedStyles";
import { BulletPointProp } from "../types";

const StyledDiv = styled.div`
    border-left: 0.5vw solid #00b8fb;
    padding-left: 2%;
    margin-bottom: 5%;
`;

export default function BulletPoints(prop : BulletPointProp) {
    return (
        <StyledDiv>
            <StyledSubTitle>{prop.title}</StyledSubTitle>
            <StyledText><em>{prop.subtitle}</em></StyledText>
            <StyledText>{prop.content}</StyledText>
        </StyledDiv>
    )
}
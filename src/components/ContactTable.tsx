import styled from "styled-components";

const StyledTable = styled.table`
    width: 100%;
    margin-top: 5%;
    border-collapse: collapse;
`;

const StyledTh = styled.th`
    text-align: left;
    font-size: calc(4px + 1vw);
    border: #101010 1px solid;
    padding: 1%;
    background-color: #2b3c5d;
`;

const StyledTr = styled.tr`
    text-align: left;
    font-size: calc(4px + 1vw);
    border: #101010 1px solid;
    padding: 1%;
`;

const StyledTd = styled.td`
    text-align: left;
    font-size: calc(4px + 1vw);
    border: #101010 1px solid;
    padding: 1%;
    background-color: #303030;
`;

export default function ContactTable() {
    return (
        <StyledTable> 
            <StyledTr>
                <StyledTh>Name</StyledTh>
                <StyledTh>Email</StyledTh>
                <StyledTh>Phone</StyledTh>
            </StyledTr>
            <StyledTr>
                <StyledTd>John Doe</StyledTd>
                <StyledTd>john@gmail.com</StyledTd>
                <StyledTd>(123) 456-7891</StyledTd>
            </StyledTr>
            <StyledTr>
                <StyledTd>John Smith</StyledTd>
                <StyledTd>smith@gmail.com</StyledTd>
                <StyledTd>(123) 456-7892</StyledTd>
            </StyledTr>
            <StyledTr>
                <StyledTd>Smith Cook</StyledTd>
                <StyledTd>cook@gmail.com</StyledTd>
                <StyledTd>(123) 456-7893</StyledTd>
            </StyledTr>
        </StyledTable>
    )
}
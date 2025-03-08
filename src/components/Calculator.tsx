import { useState } from "react";
import styled from "styled-components";
import { StyledText } from "../SharedStyles";

const StyledH2 = styled.h2`
    text-align: center;
    margin-bottom: 5%;
    font-size: calc(4px + 2.5vw);
    font-weight: 500;
    color: #00b8fb;
    margin-bottom: 4%;
`;

const StyledH3 = styled.h3`
    margin: 0;
    font-size: calc(4px + 1.25vw);
    font-weight: 500;
`;

const StyledCalcDiv = styled.div`
    background: rgb(147, 14, 76);
    width: 80%;
    padding: 5%;
    margin: 0% auto;
`;

const StyledInputsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5%;
`;

const StyledInput = styled.input`
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
    margin-bottom: 5%;
`;

const StyledLabel = styled.label`
    margin-bottom: 5%;
`;

const StyledButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 1%;
    margin-bottom: 15px;
`;

const StyledButton = styled.button`
    padding: 0.5vw 1vw;
    margin-top: 2%;
    font-size: calc(1px + 1.5vw);
    font-family: Poppins, "Helvetica Neue", Arial, sans-serif;
    background-color: #007BFF;
    color: #f0f0f0;
    border: #101010 1px solid;
`;



export default function Calculator() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [output, setOutput] = useState(0);

    function myAdd() {
        setOutput(firstNumber + secondNumber);
    }

    function mySubtract() {
        setOutput(firstNumber - secondNumber);
    }

    function myMultiply() {
        setOutput(firstNumber * secondNumber);
    }

    function myDivide() {
        setOutput(firstNumber / secondNumber);
    }

    function myPower() {
        let result = firstNumber;
        for (let i = 1; i < secondNumber; i++) {
            result *= firstNumber;
        }
        setOutput(result);
    }

    function myClear() {
        setFirstNumber(0);
        setSecondNumber(0);
        setOutput(0);
    }

    return (
        <>
            <StyledH2>Calculator</StyledH2>
            <StyledCalcDiv>
                <StyledInputsDiv>
                    <StyledLabel htmlFor="first-number">First Number:</StyledLabel>
                    <StyledInput type="number" 
                                 id="first-number" 
                                 value={firstNumber} 
                                 onChange={(e) => setFirstNumber(Number(e.target.value))} />
                    <StyledLabel htmlFor="second-number">Second Number:</StyledLabel>
                    <StyledInput type="number"
                                 id="second-number"
                                 value={secondNumber}
                                 onChange={(e) => setSecondNumber(Number(e.target.value))} />
                </StyledInputsDiv>
                <StyledButtonDiv>
                    <StyledButton onClick={myAdd}>+</StyledButton>
                    <StyledButton onClick={mySubtract}>-</StyledButton>
                    <StyledButton onClick={myMultiply}>*</StyledButton>
                    <StyledButton onClick={myDivide}>/</StyledButton>
                    <StyledButton onClick={myPower}>**</StyledButton>
                    <StyledButton onClick={myClear}>Clear</StyledButton>
                </StyledButtonDiv>
                <StyledText>Output</StyledText>
                <StyledH3 style={{ color: output < 0 ? "red" : "white"}}>{output}</StyledH3>
            </StyledCalcDiv>
        </>
    )
}
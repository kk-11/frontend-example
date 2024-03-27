import styled from "styled-components";

const Panel = styled.section`
    width: 310px;
    border-radius: 20px;
    padding: 45px 30px;
    background: white;
    color: #333;
    box-shadow: 1px 5px 5px #333;
    position: relative;
    display: flex;
    flex-direction: column;
`;

const StyledInput = styled.input`
    appearance: none;
    border: none;
    border-radius: 10px;
    background: #eee;
    border: 2px solid #efefef;
    color: #777;
    letter-spacing: 2px;
    padding: 10px;
    font-size: 1.3em;
`;

const StyledLabel = styled.label`
    text-align: left;
    font-weight: bold;
    margin-top: 15px;
`;

const Text = styled.p`
    font-weight: bold;
    font-size: 0.8em;
    color: #aaa;
`;

const Title = styled.h2<{ $align?: "left" }>`
    font-weight: bold;
    margin-bottom: 20px;
    ${(p) =>
        p.$align === "left" &&
        `
    text-align: left;
    `}
`;

const Button = styled.button`
    margin-top: 20px;
    box-shadow: 1px 5px 5px #333;
    padding: 16px 0;
`;

const Error = styled.aside`
    padding-top: 30px;
    color: red;
`;

export { Panel, StyledInput, StyledLabel, Text, Title, Button, Error };

import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.color ||'#e57744'};
    width:100%;
    height: 50px;
    border:0;
    border-radius: 8px ;
    cursor: pointer;
    font-size:  16px;
    color:white;
    font-family: 'Fira Code';
`;

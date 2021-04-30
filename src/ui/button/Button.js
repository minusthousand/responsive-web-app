import styled from 'styled-components'

export default styled.button`
    display: block;
    background-color: ${(props) =>
        props.outlined ? 'transparent' : '#ffffff'};
    border: 1px solid #ffffff !important;
    color: ${(props) => (props.outlined ? '#ffffff' : '#000000')};
    padding: ${(props) => (props.large ? '12px 26px' : '8px 20px')};
    font-size: 20px;
    border-radius: 2px;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
        background: white;
        color: black;
        transition: all 0.3s ease-out;
    }
`

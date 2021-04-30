import styled from 'styled-components'

export default styled.button`
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${(props) => (props.liked ? '#a00010' : '#000000')};
`

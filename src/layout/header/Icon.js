import styled from 'styled-components'

export default styled.i`
    margin-left: ${(props) => (props.menu ? '0' : '0.5rem')};
    font-size: ${(props) => (props.menu ? '1.8rem' : '1.2rem')};
    color: white;
`

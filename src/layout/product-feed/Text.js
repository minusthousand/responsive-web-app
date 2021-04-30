import styled from 'styled-components'

export default styled.h5`
    color: ${(props) => (props.price ? '#a00010' : '#252e48')};
    margin-top: 5px;
    font-size: 18px;
    line-height: 24px;
`

import styled from 'styled-components'

export default styled.input`
    height: 50px;
    width: 50%;
    border: none;
    border-radius: 30px;
    padding-left: 30px;
    background-color: white;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
    -webkit-filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.05));
    filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.05));

    &:focus {
        outline: none;
    }
`

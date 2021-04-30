import styled from 'styled-components'

export default styled.div`
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    align-items: center;

    @media screen and (max-width: 960px) {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(25%, 100%);
    }
`

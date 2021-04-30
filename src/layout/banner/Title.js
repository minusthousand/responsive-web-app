import styled from 'styled-components'

export default styled.h1`
    text-align: center;
    color: white;
    font-size: 70px;

    @media screen and (max-width: 960px) {
        .banner-container > h1 {
            font-size: 50px;
        }
    }
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
`

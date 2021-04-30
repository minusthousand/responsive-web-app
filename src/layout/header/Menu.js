import styled from 'styled-components'

export default styled.ul`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 60vw;
    justify-content: end;
    margin-right: 2rem;

    @media screen and (max-width: 960px) {
        background: #0f0f0f;
        z-index: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 64px;
        left: ${(props) => (props.isActive === 'active' ? '0' : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
    }
`

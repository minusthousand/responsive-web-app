import styled from 'styled-components'

export default styled.li`
    cursor: pointer;
    height: 65px;
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;

    &:hover {
        border-bottom: 4px solid #fff;
        transition: all 0.2s ease-out;
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            background-color: #fff;
            color: #0f0f0f;
            border-radius: 0;
        }
    }
`

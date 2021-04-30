import styled from 'styled-components'
import LikeIcon from './LikeIcon'

export default styled.button`
    display: block;
    border: none;
    background-color: white;
    position: absolute;
    top: 15px;
    right: ${(props) => (props.liked ? '15px' : '-50px')};
    height: 40px;
    width: 40px;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-out;
    &:hover ${LikeIcon} {
        color: #a00010;
    }
`

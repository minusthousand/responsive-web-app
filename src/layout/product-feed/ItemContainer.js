import styled from 'styled-components'
import LikeButton from './LikeButton'

export default styled.div`
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
    -webkit-filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.05));
    filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.05));
    border-radius: 5px;
    overflow: hidden;
    overflow: hidden;

    &:hover ${LikeButton} {
        right: 15px;
        transition: all 0.3s ease-out;
    }
`

import styled from 'styled-components';

export const Wrapper = styled.div`
  ${props =>
    props.clickable ?
    `a {
      pointer-events: all;
    }` : `
      img {
        pointer-events: none;
      }
    `
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 8px;
  animation: animateMovieThumb 0.5s;
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 50%);

  :hover {
    opacity: 0.8;
    transform: translateY(-4px);
  }

  @keyframes animateMovieThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

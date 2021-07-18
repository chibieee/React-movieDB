import React from "react";

import { Link } from "react-router-dom";

import { Wrapper, Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
    <Wrapper clickable={clickable}>
        {clickable ? (
            <Link to={`/movie/${movieId}`}>
                <Image src={image} alt="movie thumbnail" />
            </Link>
        ) : (<Image src={image} alt="movie thumbnail" /> )}
        
    </Wrapper>
);

export default Thumb
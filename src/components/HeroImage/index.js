import React from "react";

import { Wrapper, Content, Text } from "./HeroImage.styles";

                //Destructure out image, title, text from props object
const HeroImage = ({ image, title, text}) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
)

export default HeroImage;
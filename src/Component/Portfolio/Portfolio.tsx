import React from 'react'
import Back from '../../assets/portfolio.jpg'
import { Section, BackgroundDiv, ContentDiv } from './style'
interface Props {
    
}

export const Portfolio = (props: Props) => {
    return (
        <div>
            <Section>
              <BackgroundDiv>
                <img src={Back}/>
              </BackgroundDiv>
              <ContentDiv>
                  <h1>Lorem ipsum dolor sit amet.</h1>
                  <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus eveniet officiis consequatur!</h2>
                  <button>Buy Now</button>
              </ContentDiv>
            </Section>
        </div>
    )
}

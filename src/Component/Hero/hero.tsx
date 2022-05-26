import React from 'react'
import hero from '../../assets/hero.jpg'
import Herodesign from '../../assets/HeroDesign.png'
import { Section, BackgroundDiv, SecContent, Salediv, InfoContainer} from './style'
interface Props {
    
}

export const Hero = (props: Props) => {
    return (
        <div>
            <Section>
                <BackgroundDiv>
                    <img src={hero}/>
                </BackgroundDiv>

                <SecContent>
                    <Salediv>
                        <img src={Herodesign} alt=''/>
                        <h1>BIG SALE <span>50% OFF</span></h1>
                    </Salediv>

                    <InfoContainer>
                        <h2>Reatiler</h2>
                       
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>dolor sit amet consectetur adipisicing elit </p>

                        <button>Order Now</button>
                    </InfoContainer>
                   
                </SecContent>
            </Section>
        </div>
    )
}

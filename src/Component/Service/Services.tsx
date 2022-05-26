import React from 'react'
import pic1 from '../../assets/Services1.png'
import pic2 from '../../assets/Services2.png'
import pic3 from '../../assets/Services3.png'

import { Section, TitleDiv, Services, ServiceCart } from './style'

interface Props {
    
}

export const Service = (props: Props) => {
    return (
        <div>
            <Section>
                <TitleDiv>
                    <h1>What we do ?</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem maiores aut tempore!</p>
                </TitleDiv>

                <Services>
                    <ServiceCart>
                        <img src={pic1}/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Numquam provident minima vero.</p>
                        <button>Read More</button>
                    </ServiceCart>

                    <ServiceCart>
                        <img src={pic2}/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Numquam provident minima vero.</p>
                        <button>Read More</button>
                    </ServiceCart>

                    <ServiceCart>
                        <img src={pic3}/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Numquam provident minima vero.</p>
                        <button>Read More</button>
                    </ServiceCart>
                </Services>
            </Section>
        </div>
    )
}

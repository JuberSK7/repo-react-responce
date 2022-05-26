import React from 'react'
import User from '../../assets/elon.jpg'
import { Section, TestContainer, TestTitle, TestCustomer, CustomerCart, CartImage} from './style'
interface Props {
    
}

export const Test = (props: Props) => {
    return (
        <div>
            <Section>
                <TestContainer>
                    <TestTitle><h1><span>What</span> Customers Says</h1></TestTitle>
                </TestContainer>
                <TestCustomer>
                    <CustomerCart>
                        <CartImage>
                            <img src={User}/>
                        </CartImage>
                    </CustomerCart>
                </TestCustomer>
            </Section>
        </div>
    )
}

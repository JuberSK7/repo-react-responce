import React from 'react'
import Logo from '../../assets/pizza-64.gif'
import {
    Nav, ToggleDiv, LogoDiv, NavLinks
} from './style'

interface Props {
    
}

export const Navbar = (props: Props) => {
    return (
        <div>
            <Nav>
                <LogoDiv>
                    <img src={Logo}/>
                    <ToggleDiv>

                    </ToggleDiv>
                </LogoDiv>


                <NavLinks>
                    <li>
                       <a>Home</a>
                    </li>

                    <li>
                       <a>Our Services</a>
                    </li>

                    <li>
                       <a>PortFolio</a>
                    </li>

                    <li>
                       <a>Test</a>
                    </li>

                    <li>
                       <a>Products</a>
                    </li>

                    <li>
                       <a>NewsLetter</a>
                    </li>
                </NavLinks>
            </Nav>
        </div>
    )
}

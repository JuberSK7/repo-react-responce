import styled from 'styled-components'


export const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
//background-color: green;
padding: 0  4vw;
`


export const LogoDiv = styled.div`
img{
    margin-top: 1rem;
    cursor: pointer;
    height: 46px;
}`

export const ToggleDiv = styled.div`
display: none;`


export const NavLinks = styled.ul`
display: flex;
list-style-type: none;
gap: 2rem;

li{
    a{
        color: #fc4958;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover{
            color: #f9c7f4;
        }
    }
}
`
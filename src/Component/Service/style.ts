import styled from 'styled-components'

export const Section = styled.section`
margin: 2rem 4rem;`



export const TitleDiv = styled.div`
text-align: center;
display: flex;
flex-direction: column;
gap: 2rem;

h1{
    font-size: 3rem;
    text-transform: uppercase;
     color: #f9c74f;
}

p{
    padding: 0 10px;
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;;
}`




export const Services = styled.section`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10vw;
margin-top: 4rem;`



export const ServiceCart = styled.section`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5vw;
padding: 0 3vw;

img{
    height: 3.4rem;
}

p{
    text-align: center;
    line-height: 2rem;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
}

button{
    padding: 0.6rem 3rem;
    letter-spacing: 0.2rem;
    border-radius: 2rem;
    font-size: 1.1rem;
    border: none;
    color: #fff;
    background-color: #fc4958;
    transition: 0.3s ease-in-out;
    &:hover{
        background-color: #f9c74f;
    }
}
`




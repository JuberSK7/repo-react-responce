import styled from 'styled-components'

export const Section = styled.section`
height: 100vh;

`

export const BackgroundDiv = styled.div`
height: 100%;
img{
    height: 100%;
    width: 100%;
    filter: brightness(60%);
    object-fit: cover;
}`

export const SecContent = styled.div`
top: 0;
position: absolute;
display: flex;
align-items: center;
justify-content: space-between;
height: 100%;
width: 100vw;`

export const Salediv = styled.div`
left: 10%;
position: relative;
img{
    height: 70vh;
}
h1{
    color: #fff;
    position: absolute;
    top: 24vh;
    left: 14vh;
    font-size: 4.3rem;

    span{
        display: block;
        color: red;
        font-size: 4.8rem;
    }

}`


export const InfoContainer = styled.div`

position: absolute;
top: 40%;
right: 10%;
display: flex;
flex-direction: column;
align-items: flex-end;
gap: 1rem;
h2{
    color: #f9c74f;
    font-size: 4rem;
    letter-spacing: 0.4rem;
}
p{
    color: #fff;
    text-align:end;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
}
button{
    padding: 1rem 2rem;
    background-color: #fc4958;
    color: #fff;
    border: none;
    font-weight: 800;
    letter-spacing: 0.2rem;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover{
        background-color: #f9c74f;
    }

}
`
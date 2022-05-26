import styled from "styled-components";


export const Section = styled.section`
height: 80vh;
position: relative;
margin: 2rem 4rem;
border-radius: 5rem;

`


export const BackgroundDiv = styled.div`
height: 100%;
overflow: hidden;
border-radius: 1rem;
img{
    height:  100%;
    width: 100%;
    object-fit: cover;
    filter: brightness(60%);
    transition: 0.8s ease-in-out;
    border-radius: 1rem;
    &:hover{
        cursor: pointer;
        transition: scale(1.2);
        
    }
}


`



export const ContentDiv = styled.div`
position: absolute;
top: 25%;
left: 10%;
color: #fff;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
gap: 1rem;

h1{
    font-size: 3rem;
}

h2{
    font-size: 1.2rem;
}

button{
padding: 1rem 2rem;
border: none;
border-radius: 4rem;
font-size: 1.3rem;
color: #fff;
background: linear-gradient( to right, #fc4958, #e85d05);
transition: 0.5s ease-in-out;
cursor: pointer;
&:hover{
    background: linear-gradient( to left, #fc4958, #e85d05);
}
}`





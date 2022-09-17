import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  background-color: rgb(32,32,36);
  padding: 10px;

  input{
    margin-right: 20px;
    padding: 10px 5px;
    border-radius: 5px ;
    border: 1.5px solid white;
    &:focus{
      border: 1.5px solid #8257E5;
    }
    @media screen and (max-width:550px){
      width: 40%;
    }
  }

  button{
    transition: all 1s ease;
    background-color: ${props => props.isOn ? "#8257E5" : "#8257E555"} ;
    cursor: ${props => props.isOn ? "pointer" : "not-allowed"} ;
    color: ${props => props.isOn ? "#ffffff" : "#ffffff66"};
    padding: 12px 20px;
    border-radius: 10px;
    border: none;
    font-size: 12px;
  }
`
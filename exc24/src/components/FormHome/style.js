import styled from "styled-components"

export const Button = styled.button`
  transition: background 1.5s ease;
  background-color: ${props => props.isOn ? "black" : "rgb(233, 0, 0)"} ;
  cursor: ${props => props.isOn ? "pointer" : "not-allowed"} ;
  color:white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
`
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: #777777;
  padding: 10px;
`
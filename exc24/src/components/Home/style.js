import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`
export const Anotacao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 5px;
  border-bottom: 1px solid #999;
  max-width: 700px;
  margin: 14px 20px;
  flex-grow: 1;

  p{
    color: ${({theme})=> theme.colors.color};
    font-size: 12px;
    transition: all 0.2s;
  }
  span{
    color: ${({theme})=> theme.colors.color};    
    font-size: 12px;
    transition: all 0.2s;
  }
`
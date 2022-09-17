import styled from "styled-components";

export const SwitchWrapper = styled.div`
  cursor: pointer;

  div{
    width: 40px;
    height: 15px;
    position: relative;
    text-align: center;
  }

  span{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    border-radius: 40px ;
    background-color: ${ ({theme}) => theme.colors.background};

    ::before{
      content: "";
      width: 19px;
      height: 19px;
      background-color: ${ ({theme}) => theme.colors.color};
      border-radius: 50%;
      position: absolute;
      transition: .5s all ease;
      transform: ${ ({theme}) => theme.transform};
    }
  }
`

import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 360px;
  height: 56px;
  background-color: white;
  position: absolute;
  bottom: 34px;
`;
export const FooterUl = styled.ul`
  display: flex;
  padding-left: 0;
  margin-top: 13px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

export const FooterList = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props => (props.isClicked ? '#ff6a21' : '#bcbcbc')};
  cursor: pointer;
  transition: 0.3s;
`;
export const FooterTitle = styled.span`
  margin: 3px 0 10px 0;
`;

export const FooterImg = styled.img`
  width: 20px;
  height: 18px;
`;

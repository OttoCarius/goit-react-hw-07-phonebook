import styled from 'styled-components';

export const StyledCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledInput = styled.input`
  margin: 10px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  text-transform: ${p => p.theme.textTransform.cap};
  width: 200px;
  height: 30px;
  border-radius: 20px;
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.5);
  text-align: center;

  ::placeholder {
    text-align: center;
  }
`;

export const StyledLabel = styled.label`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  text-transform: ${p => p.theme.textTransform.cap};
  text-align: center;
`;

export const StyledButton = styled.button`
  margin: 10px;
  color: black;
  /* color: ${p => p.theme.colors.primaryText}; */
  background-color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  text-transform: ${p => p.theme.textTransform.cap};
  width: 140px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 2px;
  font-weight: 500;
  border-radius: 40px;
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease 0s;

  :hover,
  :focus {
    background-color: #adadad;
  }
`;

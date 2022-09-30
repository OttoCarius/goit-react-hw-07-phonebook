import styled from 'styled-components';

export const StyledInput = styled.input`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  text-transform: ${p => p.theme.textTransform.cap};
  width: 332px;
  height: 30px;
  border-radius: 20px;
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.5);
  text-align: center;
  display: flex;
  /* margin-bottom: 20px; */

  ::placeholder {
    text-align: center;
  }
`;

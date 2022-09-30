import styled from 'styled-components';
import bgImage from '../img/iphone2.png';

const Box = styled.div`
  width: 430px;
  min-height: 870px;
  margin-top: 80px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  /* box-shadow: 2px 2px 2px 2px #808d93, 2px 2px 2px 2px #808d93,
    2px 2px 2px 2px #cdd2d5, 1px 2px #808d93, 2px 1px #cdd2d5, 2px 3px #808d93,
    3px 2px 2px 2px #cdd2d5, 3px 4px 2px 2px #808d93, 4px 3px 2px 2px #cdd2d5,
    -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5,
    -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5; */
  background: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default Box;

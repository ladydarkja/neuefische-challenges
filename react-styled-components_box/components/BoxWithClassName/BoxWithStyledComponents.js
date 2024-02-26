import styled, { css } from "styled-components";

// function bgColor({ $isBlack }) {
//   if ($isBlack) {
//     return "black";
//   } else {
//     return "green";
//   }
// }

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ $isBlack }) => {
    return $isBlack ? "black" : "green";
  }};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;

export default StyledBox;

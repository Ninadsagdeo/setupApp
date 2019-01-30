import styled from "@emotion/native";
import { colors } from "../../Themes/colors";
import { STATUS_BAR } from "../../Themes/Dimensions";
// const ContainerFluid = styled.View`
//     flex:1;
//     backgroundColor:#FF4500;
//     width:100%;
//     padding:10px;
// `

const ContainerFluid = styled.View`
  width: 100%;

  background-color: ${colors.secondary};
  padding: 10px;
`;
const Container = styled.View`
  width: 80%;
  height: 20%;
  margin: 0px auto;
`;

const TextView = styled.Text`
  font-size: 18;
  color: white;
`;

const PrimaryButton = styled.Button`
  background-color: black;
`;

export { ContainerFluid, TextView, Container, PrimaryButton };

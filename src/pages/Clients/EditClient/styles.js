import styled from "styled-components";
import { FormControl, Card } from "@material-ui/core";

export const LoginContainer = styled.div`
  width: 100vw;
  display: flex;

  text-align: center;
  margin-top: 20vh;
  /* display: flex; */

  form {
    width: 100%;
  }

  .control {
    margin: 15px 0;
  }

  h3 {
    margin-bottom: 40px;
  }

  button {
    margin: 0 auto;
  }
`;

export const StyledFormControl = styled(FormControl)`
  margin: 15px 0;
  width: 80%;
`;

export const StyledCard = styled(Card)`
  width: 40vw;
  margin: 0 auto;
  padding: 30px 0;
  /* height: 80vh; */
`;

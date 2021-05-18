import React, { useState } from "react";
import {
  OutlinedInput,
  InputLabel,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { LoginContainer, StyledFormControl, StyledCard } from "./styles";
import Button from "../../components/Button";
import { useAuth } from "../../contexts/useAuth";

function SignIn() {
  const context = useAuth();
  const [error, setError] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    const resp = await context.Login(
      e.target.email.value,
      e.target.password.value
    );

    if (!resp) {
      setError("Login inválido");
    }
  }

  return (
    <LoginContainer>
      <StyledCard>
        <Typography variant="h3">Sign In</Typography>
        {error ? (
          <Typography color="secondary" variant="p">
            {error}
          </Typography>
        ) : null}
        <form onSubmit={(e) => handleLogin(e)}>
          <CardContent>
            <div className="control">
              <StyledFormControl variant="outlined">
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput id="email" name="email" label="Email" />
              </StyledFormControl>
            </div>
            <StyledFormControl variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput id="password" type="password" label="Password" />
            </StyledFormControl>
          </CardContent>
          <CardActions>
            <Button type="submit" variant="contained" color="primary">
              Entrar
            </Button>
          </CardActions>
        </form>
      </StyledCard>
    </LoginContainer>
  );
}

export default SignIn;

import React, { useState, useEffect } from "react";
import {
  OutlinedInput,
  InputLabel,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { LoginContainer, StyledFormControl, StyledCard } from "./styles";
import Button from "../../components/Button";
import { apiSysFar } from "../../services/apiSysFar";
import { useAuth } from "../../contexts/useAuth";

function Register(props) {
  const [error, setError] = useState(false);
  const context = useAuth();

  useEffect(() => {
    if (context.jwt) {
      props.history.push("clientes");
    }
  }, [context.jwt]);

  async function handleRegister(e) {
    e.preventDefault();

    const resp = await apiSysFar
      .post("/auth/register", {
        email: e.target.email.value,
        password: e.target.password.value,
        password_confirmation: e.target.password_confirmation.value,
        name: e.target.clientName.value,
      })
      .catch((error) => {
        console.log("asd");
      });

    if (!resp.data) {
      setError("Erro ao cadastrar");
    } else {
      props.history.push("sign");
    }
  }

  return (
    <LoginContainer>
      <StyledCard>
        <Typography variant="h3">Registrar-se</Typography>
        {error ? (
          <Typography color="secondary" variant="h6">
            {error}
          </Typography>
        ) : null}
        <form onSubmit={(e) => handleRegister(e)}>
          <CardContent>
            <div className="control">
              <StyledFormControl variant="outlined">
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput required id="email" name="email" label="Email" />
              </StyledFormControl>
            </div>
            <div>
              <StyledFormControl variant="outlined">
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  required
                  type="password"
                  label="Password"
                />
              </StyledFormControl>
            </div>
            <div>
              <StyledFormControl variant="outlined">
                <InputLabel htmlFor="password">Confirmação de Senha</InputLabel>
                <OutlinedInput
                  required
                  id="password_confirmation"
                  type="password"
                  label="Confirmação de Senha"
                />
              </StyledFormControl>
            </div>
            <div>
              <StyledFormControl variant="outlined">
                <InputLabel htmlFor="password">Nome</InputLabel>
                <OutlinedInput
                  required
                  id="clientName"
                  type="text"
                  label="Nome"
                />
              </StyledFormControl>
            </div>
          </CardContent>
          <CardActions>
            <Button type="submit" variant="contained" color="primary">
              Registrar-se
            </Button>
          </CardActions>
        </form>
      </StyledCard>
    </LoginContainer>
  );
}

export default Register;

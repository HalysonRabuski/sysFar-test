import React from "react";
import {
  OutlinedInput,
  InputLabel,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { LoginContainer, StyledFormControl, StyledCard } from "./styles";
import Button from "../../../components/Button";
import { apiSysFar } from "../../../services/apiSysFar";
import { useAuth } from "../../../contexts/useAuth";

function NewClient(props) {
  const auth = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await apiSysFar.post(
      "/clients",
      {
        name: e.target.ClientName.value,
        birth_date: e.target.birthDate.value,
        email: e.target.email.value,
      },
      {
        headers: {
          Authorization: `Bearer ${auth.jwt}`,
        },
      }
    );

    if (data) props.history.push("/clientes");
  }

  return (
    <LoginContainer>
      <StyledCard>
        <Typography variant="h3">Cadastrar Novo Cliente</Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          <CardContent>
            <div className="control">
              <StyledFormControl variant="outlined">
                <InputLabel htmlFor="name">Nome</InputLabel>
                <OutlinedInput id="ClientName" label="Nome" />
              </StyledFormControl>
            </div>
            <div>
              <StyledFormControl variant="outlined">
                <InputLabel htmlFor="password">Data de Nascimento</InputLabel>
                <OutlinedInput
                  id="birthDate"
                  defaultValue={new Date()}
                  type="datetime-local"
                  label="Data de Nascimento"
                />
              </StyledFormControl>
            </div>
            <div className="control">
              <StyledFormControl variant="outlined">
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput id="email" name="name" label="Email" />
              </StyledFormControl>
            </div>
          </CardContent>
          <CardActions>
            <Button type="submit" variant="contained" color="primary">
              Cadastrar
            </Button>
          </CardActions>
        </form>
      </StyledCard>
    </LoginContainer>
  );
}

export default NewClient;

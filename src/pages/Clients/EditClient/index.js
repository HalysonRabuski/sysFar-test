import React, { useState, useEffect } from "react";
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

function EditClient(props) {
  const [client, setClient] = useState({});
  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [birthDate, setBirthDate] = useState({});
  const auth = useAuth();

  async function getUserById() {
    const { data } = await apiSysFar.get(`/clients/${props.match.params.id}`, {
      headers: {
        Authorization: `Bearer ${auth.jwt}`,
      },
    });

    setName(data.name);
    setEmail(data.email);
    setBirthDate(data.birth_date);
  }

  useEffect(() => {
    getUserById();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await apiSysFar.put(
      `/clients/${props.match.params.id}`,
      {
        name: name,
        birth_date: birthDate,
        email: email,
      },
      {
        headers: {
          Authorization: `Bearer ${auth.jwt}`,
        },
      }
    );

    if (data) props.history.push("/clients");
  }

  return (
    <LoginContainer>
      <StyledCard>
        <Typography variant="h3">Cadastrar Novo Cliente</Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          <CardContent>
            <div className="control">
              <StyledFormControl variant="outlined">
                <InputLabel htmlFor="name" shrink={name.length > 0}>
                  Nome
                </InputLabel>
                <OutlinedInput
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  //   id="ClientName"
                  label="Nome"
                />
              </StyledFormControl>
            </div>
            <div>
              <StyledFormControl variant="outlined">
                <InputLabel shrink={birthDate.length > 0} htmlFor="password">
                  Data de Nascimento
                </InputLabel>
                <OutlinedInput
                  id="birthDate"
                  value={birthDate}
                  type="date"
                  onChange={(e) => {
                    setBirthDate(e.target.value);
                  }}
                  label="Data de Nascimento"
                />
              </StyledFormControl>
            </div>
            <div className="control">
              <StyledFormControl variant="outlined">
                <InputLabel shrink={email.length > 0} htmlFor="email">
                  Email
                </InputLabel>
                <OutlinedInput
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  value={email}
                  label="Email"
                />
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

export default EditClient;

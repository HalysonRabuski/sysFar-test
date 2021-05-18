import React from "react";
import { TopBarContainer } from "./styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";

function TopBar() {
  const auth = useAuth();

  return (
    <TopBarContainer>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">SysFar</Typography>
          <div className="actions">
            {auth.jwt ? (
              <>
                <Link to="/clientes">
                  <Button mr={2} color="inherit">
                    Clientes
                  </Button>
                </Link>
                <Button onClick={auth.Logout} outlined color="secondary">
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Link to="/sign">
                  <Button mr={2} color="inherit">
                    Entrar
                  </Button>
                </Link>
                <Link to="registrar">
                  <Button color="inherit">Registrar-se</Button>
                </Link>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </TopBarContainer>
  );
}

export default TopBar;

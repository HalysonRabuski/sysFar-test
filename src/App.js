import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./routes/Routes";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { useAuth } from "./contexts/useAuth";
import { apiSysFar } from "./services/apiSysFar";

function App() {
  const context = useAuth();

  apiSysFar.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        context.Logout();
        alert("Sessão expirada");
      }
      return error;
    }
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    /* margin: 0 auto; */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    /* width: 100vw;
    margin: 0 auto; */
    /* height: 100vh; */
    background: ${(props) => props.theme.colors.background};
    font-family: "inter", sans-serif;
    /* color: white; */
    font-size: 1rem;
}

a{
    text-decoration: none;
    color: white;
}

@media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    margin-bottom: 30px;

    h1 {
      font-size: 1.8rem;
      margin-bottom: 20px;
    }
  }
`;

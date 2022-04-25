import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700;900&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Titillium Web', sans-serif;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%
    }

    @media (max-width: 720px){
      font-size: 87.5%
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-family: 'Titillium Web', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;
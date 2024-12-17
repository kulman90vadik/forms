import { Provider } from './Provider';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./global.css";

<link href="https://fonts.googleapis.com/css?family=Outfit:100,200,300,400,500,600,700,800,900" rel="stylesheet" />

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   
      <Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    
  </StrictMode>
);

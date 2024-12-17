import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Form from "./Form/Form";
import HookForm from "./HookForm/HookForm";
// import styles from './index.module.css';
// import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/hookform" element={<HookForm />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;

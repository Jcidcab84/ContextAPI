import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import Consultar from "./components/Consultar";

import ContextProvider from "./Context/Context";

const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <div>
      <Navbar />
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
        <Consultar PHOTO_URL={PHOTO_URL} />
      </ContextProvider>
    </div>
  );
};
export default App;
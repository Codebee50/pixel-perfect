import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AntdUiConfig from "./store/AntdUiConfig";

const App = () => {
  return (
    
    <AntdUiConfig>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </AntdUiConfig>
  );
};

export default App;

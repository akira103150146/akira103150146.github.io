import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import English from "./pages/English";
import Article from "./components/Article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Layout()}>
          <Route index element={Home()}/>
          <Route path="/english-class" element={English()}></Route>
          <Route path="/english-class/:article" element={<Article></Article>}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

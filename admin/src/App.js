import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import CreateCanvas from "./pages/CreateCanvas";
import Enterence from "./pages/Enterence";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Enterence />} />
          <Route path="/create-canvas" element={<CreateCanvas />} />
          <Route path="/create-blog" element={<CreateBlog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

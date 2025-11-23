import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      {/* Layout Wraps Header + Footer */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

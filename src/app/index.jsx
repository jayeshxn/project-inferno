import {Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import Playground from "../pages/playground";
import PageNotFound from "../pages/PageNotFound";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Playground />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
}

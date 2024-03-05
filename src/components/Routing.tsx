import { Route, Routes } from "react-router-dom";
import SingleVideo from "./Videos/SingleVideo";
import Home from "./Home";
import SingleCharacter from "./Characters/SingleCharacter";
import SingleLocation from "./Locations/SingleLocation";
import SearchPage from "./Search/SearchPage";
import NotFound from "./NotFound";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<SingleVideo />} />
      <Route path="/character/:id" element={<SingleCharacter />} />
      <Route path="/location/:id" element={<SingleLocation />} />
      <Route path="/search/:value" element={<SearchPage />} />
      <Route path="/search/" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;

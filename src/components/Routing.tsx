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
      <Route path="/rickandmorty/" element={<Home />} />
      <Route path="/rickandmorty/video/:id" element={<SingleVideo />} />
      <Route path="/rickandmorty/character/:id" element={<SingleCharacter />} />
      <Route path="/rickandmorty/location/:id" element={<SingleLocation />} />
      <Route path="/rickandmorty/search/:value" element={<SearchPage />} />
      <Route path="/rickandmorty/search/" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;

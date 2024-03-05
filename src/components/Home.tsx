import { useAppSelector } from "../store/hooks";
import Characters from "./Characters/Characters";
import Locations from "./Locations/Locations";
import Navbar from "./Navbar";
import Videos from "./Videos/Videos";

const Home = () => {
  const videos = useAppSelector((state) => state.videos);
  const characters = useAppSelector((state) => state.characters);
  const locations = useAppSelector((state) => state.locations);

  return (
    <div>
      <Navbar />
      {videos.isActive && <Videos />}
      {characters.isActive && <Characters />}
      {locations.isActive && <Locations />}
    </div>
  );
};

export default Home;

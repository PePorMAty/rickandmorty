import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  onActiveCharacters,
  onDisabledCharacters,
} from "../store/slices/charactersSlice";
import {
  onActiveLocation,
  onDisabledLocation,
} from "../store/slices/locationsSlice";
import { onActiveVideos, onDisabledVideos } from "../store/slices/videosSlice";

const Navbar = () => {
  const isActiveVideos = useAppSelector((state) => state.videos.isActive);
  const isActiveCharacters = useAppSelector(
    (state) => state.characters.isActive
  );
  const isActiveLocations = useAppSelector((state) => state.locations.isActive);

  const dispatch = useAppDispatch();

  const handleActiveVideos = () => {
    localStorage.setItem("page", "videos");
    dispatch(onActiveVideos());
    dispatch(onDisabledLocation());
    dispatch(onDisabledCharacters());
  };

  const handleActiveCharacters = () => {
    localStorage.setItem("page", "characters");
    dispatch(onActiveCharacters());
    dispatch(onDisabledLocation());
    dispatch(onDisabledVideos());
  };

  const handleACtiveLocation = () => {
    localStorage.setItem("page", "locations");
    dispatch(onActiveLocation());
    dispatch(onDisabledVideos());
    dispatch(onDisabledCharacters());
  };

  useEffect(() => {
    dispatch(onActiveVideos());
    dispatch(onActiveCharacters());
    dispatch(onActiveLocation());
    localStorage.getItem("page");
  }, [dispatch]);

  return (
    <div className="flex justify-center px-10">
      <div
        className={`text-xl px-20 hover:opacity-80 cursor-pointer ${
          isActiveVideos ? "text-lime-500" : ""
        }`}
        onClick={handleActiveVideos}
      >
        <p>Videos</p>
      </div>
      <div
        className={`text-xl px-20 hover:opacity-80 cursor-pointer ${
          isActiveCharacters ? "text-lime-500" : ""
        }`}
        onClick={handleActiveCharacters}
      >
        Characters
      </div>
      <div
        className={`text-xl px-20 hover:opacity-80 cursor-pointer ${
          isActiveLocations ? "text-lime-500" : ""
        }`}
        onClick={handleACtiveLocation}
      >
        Locations
      </div>
    </div>
  );
};

export default Navbar;

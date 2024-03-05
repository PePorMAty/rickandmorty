import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCharacter } from "../../store/slices/charactersSlice";
import { getLocation } from "../../store/slices/locationsSlice";
import { getVideo } from "../../store/slices/videosSlice";
import SearchLink from "./SearchLink";

const SearchPage = () => {
  const { filteredCharacters } = useAppSelector((state) => state.characters);
  const { filteredLocations } = useAppSelector((state) => state.locations);
  const { filteredVideo } = useAppSelector((state) => state.videos);

  const dispatch = useAppDispatch();

  const handleGetVideo = (value: number) => {
    dispatch(getVideo(value));
  };
  const handleGetCharacter = (value: number) => {
    dispatch(getCharacter(value));
  };
  const handleGetLocation = (value: number) => {
    dispatch(getLocation(value));
  };

  return (
    <div className="mt-16 mb-8">
      <p className="mb-8 font-bold text-xl"> Search:</p>

      {!filteredCharacters.length &&
        !filteredLocations.length &&
        !filteredVideo.length && <div>Not found</div>}

      <div className="grid grid-cols-5 gap-8">
        <SearchLink
          filteredArray={filteredCharacters}
          handleClick={handleGetCharacter}
          title="character"
        />
        <SearchLink
          filteredArray={filteredLocations}
          handleClick={handleGetLocation}
          title="location"
        />
        <SearchLink
          filteredArray={filteredVideo}
          handleClick={handleGetVideo}
          title="video"
        />
      </div>
    </div>
  );
};

export default SearchPage;

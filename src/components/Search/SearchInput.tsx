import { ChangeEvent, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch } from "../../store/hooks";
import { filterCharacterSearch } from "../../store/slices/charactersSlice";
import { filterLocation } from "../../store/slices/locationsSlice";
import { filterVideo } from "../../store/slices/videosSlice";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const [submit, setSubmit] = useState(false);
  const dispatch = useAppDispatch();

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch(filterCharacterSearch(value));
    dispatch(filterLocation(value));
    dispatch(filterVideo(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 1);
  };

  if (submit) {
    return <Navigate to={`/search/${value}`} />;
  }

  return (
    <div className="flex">
      <div className="flex flex-col justify-center">
        <form onSubmit={handleSubmit}>
          <input
            className="bg-transparent border-2 px-2 py-1 rounded-md w-80 border-lime-500"
            type="text"
            placeholder="Search"
            value={value}
            onChange={handleOnchange}
            onSubmit={handleSubmit}
            data-testing="input-value"
          />
        </form>
      </div>
      <Link
        to={`/search/${value}`}
        className="absolute mb-1 flex flex-col justify-center right-80 top-10 after:content-[''] after:absolute after:right-8 after:bg-lime-500 after:w-0.5 after:h-9"
      >
        <FaSearch />
      </Link>
    </div>
  );
};

export default SearchInput;

import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getLocation,
  selectLocationType,
} from "../../store/slices/locationsSlice";
import { useEffect, useState } from "react";
import Select from "../Select";

const Locations = () => {
  const { locations } = useAppSelector((state) => state.locations.data);
  const { filteredLocations } = useAppSelector((state) => state.locations);

  const [type, setType] = useState(localStorage.getItem("type") ?? "");

  const dispatch = useAppDispatch();

  const filteredTypes = locations.reduce<string[]>((acc, item) => {
    return acc.includes(item.type) ? acc : [...acc, item.type];
  }, []);

  const handleChangeType = (value: string) => {
    setType(value);
    localStorage.setItem("type", value);
  };

  useEffect(() => {
    dispatch(selectLocationType({ type }));
    localStorage.getItem("type");
  }, [dispatch, type]);

  return (
    <div className="mt-16 mb-8">
      <Select
        handleChange={handleChangeType}
        title="type"
        array={filteredTypes}
      />
      <div className="grid grid-cols-5 gap-8">
        {filteredLocations.map((elem) => (
          <Link
            to={`/rickandmorty/location/${elem.id}`}
            className="cursor-pointer mb-4 hover:opacity-80"
            key={elem.id}
            onClick={() => dispatch(getLocation(elem.id))}
          >
            <img
              className="rounded-xl mb-2 h-40 w-full"
              src={elem.image}
              alt="preview"
            />
            <h3 className="">{elem.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Locations;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getVideo, selectSeason } from "../../store/slices/videosSlice";
import Select from "../Select";

const Videos = () => {
  const [season, setSeason] = useState(
    localStorage.getItem("season") || "1 season"
  );
  const { currentSeason } = useAppSelector((state) => state.videos.data);
  const { video } = useAppSelector((state) => state.videos.data);

  const dispatch = useAppDispatch();

  const filteredSeason = video.reduce<string[]>((acc, item) => {
    return acc.includes(item.season) ? acc : [...acc, item.season];
  }, []);

  const handleChangeSelect = (value: string) => {
    localStorage.setItem("season", value);
    setSeason(value);
  };

  useEffect(() => {
    dispatch(selectSeason(season));
    if (!localStorage.getItem("season")) {
      localStorage.setItem("season", "1 season");
      localStorage.setItem("page", "videos");
    }
    localStorage.getItem("season");
  }, [dispatch, season]);

  return (
    <div className="mt-16 mb-8">
      <div className="flex">
        <h1 className="mr-8 text-3xl">{localStorage.getItem("season")}</h1>
        <Select
          handleChange={handleChangeSelect}
          title={"season"}
          array={filteredSeason}
        />
      </div>
      <div className="grid grid-cols-4 gap-8">
        {currentSeason.map((elem) => (
          <Link
            to={`/video/${elem.id}`}
            className="cursor-pointer mb-4 hover:opacity-80"
            key={elem.id}
            onClick={() => dispatch(getVideo(elem.id))}
          >
            <img className="rounded-xl mb-2" src={elem.image} alt="preview" />
            <div className="flex">
              <p className="font-bold mb-2 pr-2">{elem.season} season</p>
              <p className="font-bold mb-2">{elem.series} series</p>
            </div>
            <h3 className="">{elem.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Videos;

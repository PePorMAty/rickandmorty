import { useEffect } from "react";
import Logo from "./components/Logo";
import Routing from "./components/Routing";
import SearchInput from "./components/Search/SearchInput";
import { useAppDispatch } from "./store/hooks";
import { onActiveVideos } from "./store/slices/videosSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!localStorage.getItem("page")) {
      localStorage.setItem("season", "1 season");
      localStorage.setItem("page", "videos");
      dispatch(onActiveVideos());
    }
  }, []);

  return (
    <div className="container">
      <header className="flex justify-between w-full ">
        <Logo />
        <SearchInput />
      </header>
      <main className="mt-12">
        <Routing />
      </main>
    </div>
  );
}

export default App;

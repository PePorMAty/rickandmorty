import Logo from "./components/Logo";
import Routing from "./components/Routing";
import SearchInput from "./components/Search/SearchInput";

function App() {
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

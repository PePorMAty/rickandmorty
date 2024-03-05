import { Link } from "react-router-dom";

type Props = {
  filteredArray: any[];
  handleClick: (value: number) => void;
  title: string;
};

const SearchLink = ({ filteredArray, handleClick, title }: Props) => {
  return (
    <>
      {filteredArray.map((elem) => (
        <Link
          to={`/${title}/${elem.id}`}
          className="cursor-pointer mb-4 hover:opacity-80"
          key={elem.id}
          onClick={() => handleClick(elem.id)}
        >
          <img
            className="rounded-xl mb-2 w-50 w-full h-4/6"
            src={elem.image}
            alt="preview"
          />
          <h3 className="">{elem.name || elem.title}</h3>
        </Link>
      ))}
    </>
  );
};

export default SearchLink;

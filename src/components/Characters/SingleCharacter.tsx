import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const SingleCharacter = () => {
  const { currentCharacter } = useAppSelector((state) => state.characters.data);

  const naviate = useNavigate();

  return (
    <div className="mt-16">
      <div className="flex">
        <img
          className="rounded-md w-4/12"
          src={currentCharacter.image}
          alt={currentCharacter.name}
        />
        <div className="flex flex-col ml-8">
          <div className="mb-4">
            Name:
            <span className="font-bold ml-2">{currentCharacter.name}</span>
          </div>
          <div className="mb-4">
            Species:
            <span className="font-bold ml-2">{currentCharacter.species}</span>
          </div>
          <div className="mb-4">
            Status:
            <span className="font-bold ml-2">{currentCharacter.status}</span>
          </div>
          <div className="mb-4">
            Gender:
            <span className="font-bold ml-2">{currentCharacter.gender}</span>
          </div>
          <div className="mb-4">
            Age:
            <span className="font-bold ml-2">{currentCharacter.age}</span>
          </div>
          <div className="mb-4">
            Place of origin:
            <span className="font-bold ml-2">
              {currentCharacter.placeOfOrigin}
            </span>
          </div>
          <div className="mb-4">
            Description:
            <span className="font-bold ml-2">
              {currentCharacter.description}
            </span>
          </div>
          <p
            className="mt-10 bg-lime-500 w-max px-2 rounded-sm hover:opacity-80 cursor-pointer"
            onClick={() => naviate(-1)}
          >
            Back
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacter;

import reducer, {
  filterCharacterSearch,
  selectCharacters,
} from "./store/slices/charactersSlice";
import { store } from "./store/store";

describe("characterSlice", () => {
  const initialState = {
    isActive: false,
    filteredCharacters: [],
    data: {
      characters: [
        {
          id: 1,
          name: "Rick Sanchez",
          image: "rickSanchez",
          species: "Human",
          status: "Alive",
          gender: "Male",
          age: 70,
          placeOfOrigin: "Earth (Dimension C-137)",
          description: `Richard "Rick" Sanchez of Dimension C-137, commonly referred to as Rick C-137, is one of the two titular protagonists of Rick and Morty, alongside Morty.`,
        },
        {
          id: 2,
          name: "Morty Smith",
          image: "mortySmith",
          species: "Human",
          status: "Alive",
          gender: "Male",
          age: 14,
          placeOfOrigin: "Earth (Dimension C-137)",
          description: `Mortimer Chauncey "Morty" Smith Sr. of the Prime Dimension is one of the two titular protagonists of Rick and Morty, alongside Rick. He was often incorrectly identified as Morty C-137 until Season 5.`,
        },
        {
          id: 3,
          name: "Summer Smith",
          image: "summerSmith",
          species: "Human",
          status: "Alive",
          gender: "Female",
          age: 17,
          placeOfOrigin: "Earth (Dimension C-131)",
          description: `Summer Smith of Dimension C-131 is the tritagonist of Rick and Morty. She is a member of the Smith Family and the daughter of Jerry Smith and Beth Smith/Space Beth, the older sister of Morty Smith, and the mother of Naruto Smith.`,
        },
      ],
      currentCharacter: {},
    },
  };

  it('Should filter characters by "Human" and "Alive and Male"', () => {
    const payload = {
      status: "Alive",
      species: "Human",
      gender: "Male",
    };

    store.dispatch(selectCharacters(payload));

    const expectedFilteredCharacters = {
      isActive: false,
      filteredCharacters: [
        {
          id: 1,
          name: "Rick Sanchez",
          image: "rickSanchez",
          species: "Human",
          status: "Alive",
          gender: "Male",
          age: 70,
          placeOfOrigin: "Earth (Dimension C-137)",
          description: `Richard "Rick" Sanchez of Dimension C-137, commonly referred to as Rick C-137, is one of the two titular protagonists of Rick and Morty, alongside Morty.`,
        },
        {
          id: 2,
          name: "Morty Smith",
          image: "mortySmith",
          species: "Human",
          status: "Alive",
          gender: "Male",
          age: 14,
          placeOfOrigin: "Earth (Dimension C-137)",
          description: `Mortimer Chauncey "Morty" Smith Sr. of the Prime Dimension is one of the two titular protagonists of Rick and Morty, alongside Rick. He was often incorrectly identified as Morty C-137 until Season 5.`,
        },
      ],
      data: {
        characters: [
          {
            id: 1,
            name: "Rick Sanchez",
            image: "rickSanchez",
            species: "Human",
            status: "Alive",
            gender: "Male",
            age: 70,
            placeOfOrigin: "Earth (Dimension C-137)",
            description: `Richard "Rick" Sanchez of Dimension C-137, commonly referred to as Rick C-137, is one of the two titular protagonists of Rick and Morty, alongside Morty.`,
          },
          {
            id: 2,
            name: "Morty Smith",
            image: "mortySmith",
            species: "Human",
            status: "Alive",
            gender: "Male",
            age: 14,
            placeOfOrigin: "Earth (Dimension C-137)",
            description: `Mortimer Chauncey "Morty" Smith Sr. of the Prime Dimension is one of the two titular protagonists of Rick and Morty, alongside Rick. He was often incorrectly identified as Morty C-137 until Season 5.`,
          },
          {
            id: 3,
            name: "Summer Smith",
            image: "summerSmith",
            species: "Human",
            status: "Alive",
            gender: "Female",
            age: 17,
            placeOfOrigin: "Earth (Dimension C-131)",
            description: `Summer Smith of Dimension C-131 is the tritagonist of Rick and Morty. She is a member of the Smith Family and the daughter of Jerry Smith and Beth Smith/Space Beth, the older sister of Morty Smith, and the mother of Naruto Smith.`,
          },
        ],
        currentCharacter: {},
      },
    };

    expect(reducer(initialState, selectCharacters(payload))).toEqual(
      expectedFilteredCharacters
    );
  });

  it("Should return all characters if no filters are provided", () => {
    const action = {
      type: selectCharacters.type,
      payload: {},
    };

    const result = reducer(initialState, selectCharacters(action));

    expect(result.filteredCharacters).toEqual(initialState.data.characters);
  });
});

describe("filterCharacterSearch", () => {
  it("Should filter characters by name", () => {
    const initialState = {
      isActive: false,
      filteredCharacters: [],
      data: {
        characters: [
          {
            id: 1,
            name: "Rick Sanchez",
            image: "rickSanchez",
            species: "Human",
            status: "Alive",
            gender: "Male",
            age: 70,
            placeOfOrigin: "Earth (Dimension C-137)",
            description: `Richard "Rick" Sanchez of Dimension C-137, commonly referred to as Rick C-137, is one of the two titular protagonists of Rick and Morty, alongside Morty.`,
          },
          {
            id: 2,
            name: "Morty Smith",
            image: "mortySmith",
            species: "Human",
            status: "Alive",
            gender: "Male",
            age: 14,
            placeOfOrigin: "Earth (Dimension C-137)",
            description: `Mortimer Chauncey "Morty" Smith Sr. of the Prime Dimension is one of the two titular protagonists of Rick and Morty, alongside Rick. He was often incorrectly identified as Morty C-137 until Season 5.`,
          },
        ],
        currentCharacter: {},
      },
    };

    const result = reducer(initialState, filterCharacterSearch("Rick"));

    expect(result.filteredCharacters).toEqual([
      {
        id: 1,
        name: "Rick Sanchez",
        image: "rickSanchez",
        species: "Human",
        status: "Alive",
        gender: "Male",
        age: 70,
        placeOfOrigin: "Earth (Dimension C-137)",
        description: `Richard "Rick" Sanchez of Dimension C-137, commonly referred to as Rick C-137, is one of the two titular protagonists of Rick and Morty, alongside Morty.`,
      },
    ]);
  });
});

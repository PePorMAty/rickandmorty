import { createSlice } from "@reduxjs/toolkit";
import { IInitialStateCharacter } from "../../types";
import { initialCharactersData } from "../../stubData/charactersData";

const initialState: IInitialStateCharacter = {
  isActive: false,
  filteredCharacters: [],
  data: initialCharactersData,
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    onActiveCharacters: (state) => {
      if (localStorage.getItem("page") === "characters") {
        state.isActive = true;
      }
    },
    onDisabledCharacters: (state) => {
      state.isActive = false;
    },
    getCharacter: (state, { payload }) => {
      let current = state.data.characters.find((item) => item.id === payload);
      state.data.currentCharacter = { ...current };
    },
    filterCharacterSearch: (state, { payload }) => {
      state.filteredCharacters = state.data.characters.filter((item) => {
        return item.name.toLowerCase().includes(payload.toLowerCase());
      });
    },
    selectCharacters: (state, { payload }) => {
      state.filteredCharacters = state.data.characters.filter((item) => {
        return (
          (!payload.status || payload.status === item.status) &&
          (!payload.species || payload.species === item.species) &&
          (!payload.gender || payload.gender === item.gender)
        );
      });

      if (!payload.status && !payload.species && !payload.gender) {
        state.filteredCharacters = state.data.characters;
      }
    },
  },
});

export const {
  onActiveCharacters,
  onDisabledCharacters,
  getCharacter,
  filterCharacterSearch,
  selectCharacters,
} = characterSlice.actions;

export default characterSlice.reducer;

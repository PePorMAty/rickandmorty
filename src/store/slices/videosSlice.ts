import { createSlice } from "@reduxjs/toolkit";
import { IIinitialStateVideo } from "../../types";
import { initialVideoData } from "../../stubData/videosData";

const initialState: IIinitialStateVideo = {
  isActive: false,
  filteredVideo: [],
  data: initialVideoData,
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    onActiveVideos: (state) => {
      if (localStorage.getItem("page") === "videos") {
        state.isActive = true;
      }
    },
    onDisabledVideos: (state) => {
      state.isActive = false;
    },
    selectSeason: (state, { payload }) => {
      state.data.currentSeason = state.data.video.filter(
        (item) => item.season === payload
      );
    },
    getVideo: (state, { payload }) => {
      let current = state.data.video.find((item) => item.id === payload);
      state.data.currentVideo = { ...current };
    },
    filterVideo: (state, { payload }) => {
      state.filteredVideo = state.data.video.filter((item) => {
        return item.title.toLowerCase().includes(payload.toLowerCase());
      });
    },
  },
});

export const {
  onActiveVideos,
  onDisabledVideos,
  selectSeason,
  getVideo,
  filterVideo,
} = videosSlice.actions;

export default videosSlice.reducer;

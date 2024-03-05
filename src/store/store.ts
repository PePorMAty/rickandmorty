import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import videosSlice from "./slices/videosSlice";
import charactersSlice from "./slices/charactersSlice";
import locationsSlice from "./slices/locationsSlice";

export const store = configureStore({
  reducer: {
    videos: videosSlice,
    characters: charactersSlice,
    locations: locationsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

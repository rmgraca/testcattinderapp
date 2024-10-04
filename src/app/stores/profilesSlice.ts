import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '~app/store';

export interface profileState {
  id?: string | undefined;
  name?: string | undefined;
  country?: string | undefined;
  url?: string | undefined;
  rank?: string | undefined;
}

export interface profilesPoolsState {
  feedPool: Array<profileState>;
  favouritesPool: Array<profileState>;
}

const initialState: profilesPoolsState = {
  feedPool: [],
  favouritesPool: [],
};

export const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    setProfilesPool: (state, action: PayloadAction<profileState[]>) => {
      state.feedPool = action.payload;
    },
    dislikeProfile: (state, action: PayloadAction<profileState>) => {
      state.feedPool = state.feedPool.filter(profile => profile.id !== action.payload.id);
    },
    removeFavourite: (state, action: PayloadAction<profileState>) => {
      state.favouritesPool = state.favouritesPool.filter(profile => profile.id !== action.payload.id);
    },
    likeProfile: (state, action: PayloadAction<profileState>) => {
      const existsInFavourites = state.favouritesPool.some(profile => profile.id === action.payload.id);
      if (!existsInFavourites) {
        state.favouritesPool.push(action.payload);
      }

    }
  }
});

export const { setProfilesPool, dislikeProfile, likeProfile, removeFavourite } = profilesSlice.actions;
export const selectTrendingPool = (state: RootState) => state.profiles.trendingPool;
export const selectFavouritesPool = (state: RootState) => state.profiles.favouritesPool;
export const selectActiveProfileId = (state: RootState) => state.profiles.activeProfileId;

export default profilesSlice.reducer;

import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swiper from 'react-native-swiper';
import { ProfileCard } from '~components/ui/profile/profileCard';
import { useGetCatProfilesPoolQuery, usePostCatProfileMutation } from '~services/catApi';
import { setProfilesPool, dislikeProfile, profileState, likeProfile } from '~app/stores/profilesSlice';
import { profileType } from '~types/profileType';

interface ProfileProps {
  isFavouriteMode: boolean;
  onActiveProfileChange: Function;
}

export const Profile: React.FC<ProfileProps> = ({ isFavouriteMode, onActiveProfileChange }) => {
  const dispatch = useDispatch();
  const profileFeed = useSelector((state: any) => state.profiles.feedPool);
  const favourites = useSelector((state: any) => state.profiles.favouritesPool);
  const [postCatProfile, { isLoading: isPosting }] = usePostCatProfileMutation();
  const { data: fetchedProfiles, isLoading, isError } = useGetCatProfilesPoolQuery();
  const [activeIndex, setActiveIndex] = useState(0);
  const [card, setCard] = useState([]);
  const profilesArray = isFavouriteMode ? favourites : profileFeed;
  const swiperRef = useRef(null);

  const handleDislike = (profile: profileState) => {
    dispatch(dislikeProfile(profile));
  };

  const handleLikeProfile = async (profile: profileState) => {
    dispatch(likeProfile(profile));
    try {
      const result = await postCatProfile(profile.id);
      if (result) {
        console.log('response ', result);
        console.log('Profile liked and posted to the Cat API!');
      }
    } catch (error) {
      console.error('Error posting profile:', error);
    }
  };

  const getIdFromArrayByIndex = (array: profileState[], index: number): string | undefined => {
    if (index < 0 || index >= array.length) {
      return undefined;
    }
    return array[index]?.id;
  };

  const handleSwipeMain = (index: number) => {
    const id = getIdFromArrayByIndex(profilesArray, activeIndex);
    if (index > activeIndex) {
      if (id) {
        handleDislike(profilesArray[activeIndex]);
      }
    } else if (index < activeIndex) {
      if (id) {
        handleLikeProfile(profilesArray[activeIndex]);
      }
    }
    onActiveProfileChange(index || 0);
    setActiveIndex(index);
  };

  const handleSwipefavourites = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isFavouriteMode && fetchedProfiles && !isLoading && !isError) {
      dispatch(setProfilesPool(fetchedProfiles));
    }
  }, [fetchedProfiles, isLoading, isError, dispatch, isFavouriteMode]);

  if (profilesArray.length) {
    return (
      <Swiper
      ref={swiperRef}
        autoplay={false}
        showsButtons={false}
        loop={false}
        horizontal={true}
        showsPagination={false}
        onIndexChanged={index => (!isFavouriteMode ? handleSwipeMain(index) : handleSwipefavourites(index))}
      >
        {profilesArray.map((profile: profileType) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </Swiper>
    );
  } else {
    return null;
  }
};

export default Profile;

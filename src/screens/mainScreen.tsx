import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BaseScreen } from '~screens/baseScreen';
import { StyleSheet, View } from 'react-native';
import { RoundButton } from '~components/ui/roundButton';
import { Profile } from '~components/ui/profile/profile';
import { CustomSwitch } from '~components/ui/customSwitch';
import { usePostCatProfileMutation } from '~services/catApi';
import { dislikeProfile, likeProfile, removeFavourite, profileState } from '~app/stores/profilesSlice';

export function MainScreen() {
  const dispatch = useDispatch();
  const styles = useStyles();
  const [postCatProfile] = usePostCatProfileMutation();
  const profileFeed = useSelector((state: any) => state.profiles.feedPool);
  const favourites = useSelector((state: any) => state.profiles.favouritesPool);
  const [isFavouriteMode, setIsFavouriteMode] = useState(false);
  const [activeProfile, setActiveProfile] = useState<profileState>(profileFeed[0]);

  const handleToggle = (value: boolean) => {
    setIsFavouriteMode(value);
  };

  const handleDislike = () => {
    isFavouriteMode ? dispatch(removeFavourite(activeProfile)) : dispatch(dislikeProfile(activeProfile));
  };

  const handleLikeProfile = async () => {
    console.log('liking this ', activeProfile)
    dispatch(likeProfile(activeProfile));
    try {
      const result = await postCatProfile(activeProfile.id);
      if (result) {
        console.log('response ', result);
        console.log('Profile liked and posted to the Cat API!');
      }
    } catch (error) {
      console.error('Error posting profile:', error);
    }
  };

  useEffect(() => {
    const profilesArray = isFavouriteMode ? favourites : profileFeed;
    setActiveProfile(profilesArray[0]);
  }, [profileFeed, favourites, isFavouriteMode]);

  return (
    <BaseScreen style={styles.mainScreenContainer}>
      <CustomSwitch onToggle={handleToggle} isActive={isFavouriteMode} />
      <Profile isFavouriteMode={isFavouriteMode} onActiveProfileChange={setActiveProfile} />

      <View style={styles.buttonsContainer}>
        <RoundButton type="downVote" onPress={handleDislike} />
        {!isFavouriteMode && <RoundButton type="upVote" onPress={handleLikeProfile} />}
      </View>
    </BaseScreen>
  );
}

function useStyles() {
  return StyleSheet.create({
    mainScreenContainer: {
      display: 'flex',
      backgroundColor: '#fbfaff',
      paddingTop: 25,
      alignItems: 'center',
      height: '100%'
    },
    loadingIndiciator: {
      marginTop: 85
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      position: 'absolute',
      bottom: 80
    },
    imageContainer: {
      flex: 1
    }
  });
}

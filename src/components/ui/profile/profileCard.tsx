import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { useGetCatProfileInfoQuery } from '~services/catApi';
import { profileType } from '~types/profileType';
import { useLoading } from '~hooks/useLoadingContext';

interface ProfileCardProps {
  profile: profileType;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const { data: refinedProfileInfo } = useGetCatProfileInfoQuery(profile.id);
  const { startLoading, stopLoading } = useLoading();

  //TODO: tidy up the variables here
  //TODO: add loading to the images
  return (
      <View>
        <Image
          source={{ uri: profile.url }}
          style={[styles.image]}
          onLoadStart={() => startLoading()}
          onLoadEnd={() => stopLoading()}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{refinedProfileInfo?.breeds[0].name}</Text>
            <Text style={styles.country}>{refinedProfileInfo?.breeds[0].origin}</Text>
          </View>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{profile.id}</Text>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: '93%',
    height: '80%',
    borderRadius: 15,
    backgroundColor: '#EC537E'
  },
  detailsContainer: {
    alignSelf: 'center',
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    bottom: 64,
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  textContainer: {
    flex: 1,
    marginBottom: 5
  },
  rankContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  country: {
    fontSize: 14,
    color: '#666'
  },
  rank: {
    marginBottom: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  }
});

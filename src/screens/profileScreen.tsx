import * as React from 'react';
import { BaseScreen } from '~screens/baseScreen';
import { StyleSheet, Text } from 'react-native';

export function ProfileScreen() {
  const styles = useStyles();

  return (
    <BaseScreen style={styles.MainScreenContainer}>
      <Text>3</Text>
     
    </BaseScreen>
  );
}

function useStyles() {
  return StyleSheet.create({
    MainScreenContainer: {
      display: 'flex',
      backgroundColor: '#fbfaff',
      paddingTop: 25,
      alignItems: 'center',
      height: '100%'
    },
    loadingIndiciator: {
      marginTop: 85
    }
  });
}

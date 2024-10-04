import React, { useRef } from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback, GestureResponderEvent } from 'react-native';
import { DownVoteIcon } from '~assets/svg/downVote';
import { UpVoteIcon } from '~assets/svg/upVote';

interface RoundButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  type: string;
}

export const RoundButton: React.FC<RoundButtonProps> = ({ onPress, type }) => {
  const isUpVote = type === 'upVote';

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const elevationAnim = useRef(new Animated.Value(10)).current;

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 0.3,
        useNativeDriver: true
      }),
      Animated.timing(elevationAnim, {
        toValue: 0.3,
        duration: 100,
        useNativeDriver: false
      })
    ]).start();
  };

  const handlePressOut = (event: GestureResponderEvent) => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true
      }),
      Animated.timing(elevationAnim, {
        toValue: 10,
        duration: 100,
        useNativeDriver: false
      })
    ]).start();

    if (onPress) {
      onPress(event);
    }
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <View style={styles.button}>
        <Animated.View style={[{ transform: [{ scale: scaleAnim }] }]}>{isUpVote ? <UpVoteIcon /> : <DownVoteIcon />}</Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }
  }
});

import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Animated, TouchableOpacity } from 'react-native';
import { StarIcon } from '~assets/svg/star';
import { FlameIcon } from '~assets/svg/flame';

type CustomSwitchProps = {
  isActive: boolean;
  onToggle: (value: boolean) => void;
};

export const CustomSwitch: React.FC<CustomSwitchProps> = ({ isActive, onToggle }) => {
  const [isEnabled, setIsEnabled] = useState(isActive);

  const switchAnim = useRef(new Animated.Value(isActive ? 1 : 0)).current;

  const toggleSwitch = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    Animated.timing(switchAnim, {
      toValue: newValue ? 1 : 0,
      duration: 300,
      useNativeDriver: false
    }).start();
    onToggle(newValue);
  };

  const translateX = switchAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 43]
  });

  const backgroundColor = switchAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#e3e3e4', '#e3e3e4']
  });

  return (
    <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.7}>
      <Animated.View style={[styles.switchContainer, { backgroundColor }]}>
        <FlameIcon width={20} height={20} fill={isEnabled ? '#bfbfc0' : '#EC537E' } style={styles.iconLeft} />
        <Animated.View style={[styles.switchButton, { transform: [{ translateX }] }]} />
        <StarIcon width={20} height={20} fill={!isEnabled ? '#bfbfc0' : '#e4c92d'} style={styles.iconRight} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 88,
    height: 30,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    position: 'relative',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  switchButton: {
    position: 'absolute',
    width: 42,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  iconLeft: {
    marginLeft: 8,
    zIndex: 1
  },
  iconRight: {
    marginRight: 8,
    zIndex: 1
  }
});

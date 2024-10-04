import * as React from 'react';
import { View, ScrollView, StyleSheet, ViewProps, SafeAreaView, ScrollViewProps } from 'react-native';
import { PropsWithChildren } from 'react';

type BaseScreenProps = PropsWithChildren &
  ScrollViewProps &
  ViewProps & {
    scrollable?: boolean;
    noPadding?: boolean;
  };

export function BaseScreen({ children, noPadding, scrollable, style, ...props }: BaseScreenProps) {
  const styles = useStyles();

  return (
    <SafeAreaView style={[styles.flex1, style]} {...props}>
      {!!scrollable && <ScrollView {...props}>{children}</ScrollView>}
      {!scrollable && <View style={[styles.flex1, style]} {...props}>{children}</View>}
    </SafeAreaView>
  );
}

function useStyles() {
  return StyleSheet.create({
    flex1: {
      flex: 1
    }
  });
}

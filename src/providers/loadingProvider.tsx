import * as React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { createContext, useState } from 'react';
import { LoadingContextProps } from '~types/loadingContext';

interface Props {
  children: React.ReactNode;
}

export const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

export const LoadingProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={125} color="white" />
        </View>
      )}
    </LoadingContext.Provider>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: .7
  },
});
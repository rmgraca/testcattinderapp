import { useContext } from 'react';
import { LoadingContext } from '~root/src/providers/loadingProvider';
import { LoadingContextProps } from '~types/loadingContext';

export function useLoading(): LoadingContextProps {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }

  return context;
}

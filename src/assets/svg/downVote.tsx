import { Path, Svg } from 'react-native-svg';

export function DownVoteIcon() {
  return (
    <Svg width="35" height="35" viewBox="0 0 32 32" fill="none">
      <Path 
        d="M24 8L8 24" 
        stroke="#E16359" 
        strokeWidth="3"
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <Path 
        d="M8 8L24 24" 
        stroke="#E16359" 
        strokeWidth="3"
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </Svg>
  );
}

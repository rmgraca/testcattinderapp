import { Path, Svg, SvgProps, Defs, Rect } from 'react-native-svg';

export function StarIcon(props: SvgProps) {
  return (
    <Svg width="17" height="16" viewBox="0 0 17 16" fill="none" {... props}>
      <Path
        d="M9.11247 1.66003L11.1725 5.83337L15.7791 6.5067L12.4458 9.75337L13.2325 14.34L9.11247 12.1734L4.99247 14.34L5.77913 9.75337L2.4458 6.5067L7.05247 5.83337L9.11247 1.66003Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

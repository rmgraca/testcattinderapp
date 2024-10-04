import { Path, Svg, SvgProps } from 'react-native-svg';

export function UserIcon(props: SvgProps) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="none" {... props}>
      <Path
        d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6903 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66666C5.78261 12.5 4.93476 12.8512 4.30964 13.4763C3.68452 14.1014 3.33333 14.9493 3.33333 15.8333V17.5"
        stroke={props.color || 'none'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 9.16667C11.841 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.841 2.5 10 2.5C8.15906 2.5 6.66667 3.99238 6.66667 5.83333C6.66667 7.67428 8.15906 9.16667 10 9.16667Z"
        stroke={props.color || 'none'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

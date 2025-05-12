import Svg, { Path } from "react-native-svg";

export default function AccueilIcon({color}: {color:string}) {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 24 24"
    >
      <Path
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8m-2 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
      />
    </Svg>
  );
}

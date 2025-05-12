import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export default function PartageIcon({color}: {color:string}) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
    >
      <G clipPath="url(#clip0_2451_507)">
        <Path
          d="M1.25 20V19C1.25 15.134 4.38401 12 8.25 12V12C12.116 12 15.25 15.134 15.25 19V20"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <Path
          d="M13.25 14V14C13.25 11.2386 15.4886 9 18.25 9V9C21.0114 9 23.25 11.2386 23.25 14V14.5"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <Path
          d="M8.25 12C10.4591 12 12.25 10.2091 12.25 8C12.25 5.79086 10.4591 4 8.25 4C6.04086 4 4.25 5.79086 4.25 8C4.25 10.2091 6.04086 12 8.25 12Z"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18.25 9C19.9069 9 21.25 7.65685 21.25 6C21.25 4.34315 19.9069 3 18.25 3C16.5931 3 15.25 4.34315 15.25 6C15.25 7.65685 16.5931 9 18.25 9Z"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2451_507">
          <Rect
            width={24}
            height={24}
            fill="white"
            transform="translate(0.25)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

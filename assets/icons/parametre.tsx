import Svg, { Path } from "react-native-svg";

export default function ParametreIcon({ color } : {color:string}) {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <Path
        d="M12.75 15C14.4069 15 15.75 13.6569 15.75 12C15.75 10.3431 14.4069 9 12.75 9C11.0931 9 9.75 10.3431 9.75 12C9.75 13.6569 11.0931 15 12.75 15Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M20.3724 10.3954L19.2747 7.7448L20.75 6L18.75 4L17.0147 5.48295L14.3078 4.36974L13.6853 2H11.731L11.0991 4.40113L8.45441 5.51596L6.75 4L4.75 6L6.20337 7.78885L5.1225 10.4463L2.75 11V13L5.15111 13.6555L6.26575 16.2997L4.75 18L6.75 20L8.54116 18.5403L11.147 19.6123L11.75 22H13.75L14.3545 19.6132L17.0051 18.5155C17.4469 18.8313 18.75 20 18.75 20L20.75 18L19.2659 16.2494L20.3639 13.598L22.7499 12.9772L22.75 11L20.3724 10.3954Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

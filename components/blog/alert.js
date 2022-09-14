import { TbTrafficCone, TbHandFinger } from "react-icons/tb";

const colorSchemes = {
  important: {
    bg: "bg-red-100",
    text: "text-red-900",
    header: "bg-red-400",
    icon: <TbTrafficCone />,
  },
  info: {
    bg: "bg-blue-100",
    text: "text-[#022457]",
    header: "bg-blue-400",
    icon: <TbHandFinger />,
  },
};

const Alert = ({ type, children }) => {
  const colorScheme = colorSchemes[type];
  return (
    <div className={`rounded-md shadow-[0px_0px_30px_5px_rgba(0,0,0,0.1)] ${colorScheme.bg} ${colorScheme.text}`}>
      <div
        className={`px-3 py-2 rounded-t-md flex items-center gap-2`}
      >
        <span className="text-xl">{colorScheme.icon}</span>
        <span className="text-lg font-bold">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </div>
      <div className="px-3 py-1 rounded-md">{children}</div>
    </div>
  );
};

export default Alert;

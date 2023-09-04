import { useSelector } from "react-redux";
import {
  calendarIcon,
  calendarBIcon,
  timerIcon,
  timerBIcon,
  completeIcon,
  completeBIcon,
} from "../data/assets";

const SummaryCard = () => {
  const items = useSelector((state) => state.items.items);
  const totalItems = items.length;

  const cardData = [
    {
      id: 1,
      icon: calendarIcon,
      iconii: calendarBIcon,
      color: "#FF7CA4",
      colorii: "#fe90b1",
      name: "All Task",
      number: totalItems,
    },

    {
      id: 2,
      icon: timerIcon,
      iconii: timerBIcon,
      color: "#FFC23D",
      colorii: "#fbce6d",
      name: "In Progress",
      number: "N/A",
    },
    {
      id: 3,
      icon: completeIcon,
      iconii: completeBIcon,
      color: "#15B569",
      colorii: "#4ab884",
      name: "Completed",
      number: "N/A",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-2">
      {cardData.map(({ id, icon, iconii, color, colorii, name, number }) => (
        <div
          key={id}
          style={{ backgroundColor: color }}
          className={`relative bg-[${color}] rounded-md  h-36 m-5 p-5 flex flex-col justify-between text-left`}
        >
          <div className=" absolute w-[97%] h-[8.2rem] bg-black z-[-2] rounded-md"></div>
          <img src={icon} className="w-6" />
          <img
            src={iconii}
            style={{ backgroundColor: colorii }}
            className={`absolute bg-[${colorii}] h-24 w-24 bottom-0 right-0 rounded-tl-xl rounded-br-xl`}
          />
          <h3 className="font-semibold text-xl z-10">{name}</h3>
          <h2 className="font-semibold text-4xl">{number}</h2>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;

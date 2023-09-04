import { cardData } from "../data/summaryCard";

const SummaryCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-2">
      {cardData.map(({ icon, iconii, color, colorii, name, number }) => (
        <div
          className={`relative bg-[${color}] rounded-md  h-36 m-5 p-5 flex flex-col justify-between text-left`}
        >
          <div className=" absolute w-[97%] h-[8.2rem] bg-black z-[-2] rounded-md"></div>
          <img src={icon} className="w-6" />
          <img
            src={iconii}
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

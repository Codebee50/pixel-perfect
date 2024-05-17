import { PiCaretDoubleRight } from "react-icons/pi";

const ServiceCard = (props) => {
  return (
    <div className="flex flex-col items-start border border-[#e4dff7] p-5 rounded-md h-max">
      <div className="bg-purple100 p-2 rounded-md">
        <props.icon size={"1.2em"} className="fill-white" color="#ffffff" />
      </div>
      <p className="text-black100 font-steradian font-medium mt-2 text-xl">
        {props.name}
      </p>
      <p className="text-sm text-gray100">{props.description}</p>

      <div className="cursor-pointer flex flex-row items-center mt-5 gap-2">
        <p className="font-steradian text-black">More details </p>
        <PiCaretDoubleRight/>
      </div>
    </div>
  );
};

export default ServiceCard;

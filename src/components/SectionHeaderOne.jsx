import StrokeBtn from "./StrokeBtn";

const SectionHeaderOne = (props) => {
  return (
    <div className="w-full flex flex-row justify-between items-center flex-wrap">
      <div className="w-full max-w-[700px] flex-col">
        <h1 className="text-black100 font-medium font-steradian text-2xl sm:text-4xl">
          {props.bigText}
        </h1>
        <p className="font-steradian text-gray100 text-sm mt-2">
          {props.smallText}
        </p>
      </div>

      <StrokeBtn label="Lets talk" className="mt-4" />
    </div>
  );
};

export default SectionHeaderOne;

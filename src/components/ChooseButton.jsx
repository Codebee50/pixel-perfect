const ChooseButton = (props) => {
  return (
    <button
      className={`${
        props.selected ? "bg-black100" : "bg-[#F3F3F3]"
      } mr-3 mt-3 py-2 px-4 rounded-full`}
      onClick={props.onClick}
    >
      <p
        className={`font-steradian ${
          props.selected ? "text-white" : "text-[#8B8B8B]"
        }  text-[0.8rem]`}
      >
        {props.name}
      </p>
    </button>
  );
};

export default ChooseButton;

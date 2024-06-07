import ChooseButton from "./ChooseButton";

const ChooseServiceButton = (props) => {
    const isSelected = props.index === props.selectedIndex
  return (
    <ChooseButton selected={isSelected} onClick={props.onSetSelectedIndex.bind(null, props.index)} name={props.service.name}/>
  );
};

export default ChooseServiceButton;

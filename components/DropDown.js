import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { COLORS } from "../constants";

const DropDown = (props) => {
  const { listOfItems } = props;
  const labelAndValue = listOfItems.map((e) => ({ label: e, value: e }));
  const [items, setItems] = React.useState(labelAndValue);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={{ width: "90%" }}
      textStyle={{ fontSize: 20, color: COLORS.primary_blue }}
    />
  );
};

export default DropDown;

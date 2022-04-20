import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { COLORS } from "../constants";
import { meditationSounds } from "../screens/focused_screens/FocusedMeditation";

const DropDown = () => {
  const meditationSoundsTitles = meditationSounds.map((e) => e.title);
  const labelAndValue = meditationSoundsTitles.map((e) => ({
    label: e,
    value: e,
  }));
  const [items, setItems] = React.useState(labelAndValue);
  const [open, setOpen] = React.useState(false);
  const [chosenMusic, setChosenMusic] = React.useState(
    meditationSoundsTitles[0]
  );

  return (
    <DropDownPicker
      open={open}
      value={chosenMusic}
      items={items}
      setOpen={setOpen}
      setValue={setChosenMusic}
      setItems={setItems}
      containerStyle={{ width: "90%" }}
      textStyle={{ fontSize: 20, color: COLORS.primary_blue }}
    />
  );
};

export default DropDown;

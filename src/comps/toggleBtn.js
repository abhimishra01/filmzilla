import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import {useState} from "react";
export default function TrendingToggleButton() {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        {/* <FormatAlignLeftIcon /> */}
        Today
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        {/* <FormatAlignCenterIcon /> */}
        This Week
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

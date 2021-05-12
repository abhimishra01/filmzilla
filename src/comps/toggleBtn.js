import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import {useState} from "react";
import "./togglebtn.css";

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
      <ToggleButton
      style={{color:"var(--secondary)",fontSize:"0.8rem",padding:"0.98rem", fontFamily:"Rubik, sans-serif"}}  
      value="left" aria-label="left aligned">
        Today
      </ToggleButton>
      <ToggleButton 
        style={{color:"var(--secondary)",fontSize:"0.8rem",padding:"0.98rem", fontFamily:"Rubik, sans-serif"}}  
      value="center" 
      aria-label="centered">
        This Week
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

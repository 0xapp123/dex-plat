import React from "react";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";

const ToggleSwitch = () => {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 34,
    height: 18,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 17,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(16px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: "2px",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#121616" : "#FFAB5C",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 14,
      height: 14,
      color: "#2E3838",
      borderRadius: 10,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 19 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  return (
    <div>
      <AntSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
    </div>
  );
};

export default ToggleSwitch;

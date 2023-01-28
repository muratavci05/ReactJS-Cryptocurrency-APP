//Temporary drawer >>> https://v4.mui.com/components/drawers/#drawer

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { CryptoState } from "../../CryptoContext";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function UserSidebar() {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const {user} = CryptoState();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
           <Avatar 
           onClick={toggleDrawer(anchor,true)}
           style={{
            height: 38,
            width: 38,
            marginLeft:15,
            cursor:"pointer",
            backgroundColor:"#eebc1d",
           }}
           src={user.photoURL}
           alt={user.displayName || user.email}
           />
        
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            hello
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

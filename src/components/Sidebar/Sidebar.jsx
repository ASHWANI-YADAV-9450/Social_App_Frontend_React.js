import React from "react";
import { navigationMenu } from "./SidebarNavigation";
import { Avatar, Button, Card, Divider, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { auth} = useSelector(store=>store);
  const navigate= useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNaviagte=(item)=>{
    if(item.title==="Profile"){
      navigate(`/profile/${auth.user?.id}`)
    }
  }

  return (
    <Card className="card h-screen flex flex-col justify-between py-5">
      <div className="space-y-8 pl-5">
        <div>
          <span className="logo font-bold text-xl">Social APP</span>
        </div>

        <div className="space-y-8">
          {navigationMenu.map((item) => (
            <div onClick={()=>handleNaviagte(item)} className="cursor-pointer flex space-x-3 items-center">
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Divider />
        <div className="pl-5 flex items-center justify-between pt-5">
          <div className="flex items-center space-x-3">
            <Avatar src="data:image/png;base64,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" />
            <div>
              <p className="font-bold">{auth.user?.firstName +" "+ auth.user?.lastName}</p>
              <p className="opacity-70">@{auth.user?.firstName.toLowerCase() +"_"+ auth.user?.lastName.toLowerCase()}</p>
            </div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;

import { Avatar } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const StoryCircle = () => {
  return (
    <div>
      <div className="flex flex-col items-center mr-4 cursor-pointer">
        <Avatar
          sx={{ width: "5rem", height: "5rem" }}
          src="https://img.freepik.com/free-photo/artist-white_1368-3543.jpg"
        //   className="flex flex-col items-center mr-4 cursor-pointer"
        ></Avatar>
        <p>codewith...</p>
      </div>
    </div>
  );
};

export default StoryCircle;

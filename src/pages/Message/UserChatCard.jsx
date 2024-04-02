import { MoreHoriz } from "@mui/icons-material";
import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector } from "react-redux";

const UserChatCard = ({ chat }) => {
  const { message,auth } = useSelector((store) => store);
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              width: "3.5rem",
              height: "3.5rem",
              fontSize: "1.5rem",
              bgcolor: "#191c29",
              color: "rgb(88,199,250)",
            }}
            src="https://media.istockphoto.com/id/877367116/photo/green-winged-macaw-ara-chloropterus-1-year-old-flying-in-front-of-white-background.jpg?b=1&s=612x612&w=0&k=20&c=yPVVkemrN52q6QH1OGVKTAKnpzmGBBf2Qvs3p7fVoWg="
          />
        }
        action={
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        }
        title={auth.user.id===chat.users[0].id?chat.users[1].firstName +" "+ 
        chat.users[1].lastName:chat.users[0].firstName +" "+ chat.users[0].lastName}
        subheader={"new message"}
      ></CardHeader>
    </Card>
  );
};

export default UserChatCard;

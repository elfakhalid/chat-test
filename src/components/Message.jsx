import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export const Message = ({ message }) => {
  const ref = useRef();
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return <div
    ref={ref}
    className={`message ${message.senderId === currentUser.uid && "owner"}`}
  >
    <div className="messageInfo">
      <img
        src={
          message.senderId === currentUser.uid
            ? currentUser.photoURL
            : data.user.photoURL
        }
        alt=""
      />
      <span>{new Date(message?.date?.seconds * 1000 + message?.date?.nanoseconds / 1e6).toLocaleDateString()}</span>
    </div>
    <div className="messageContent">
      <p>{message.text}</p>
      {message?.img && <img src={message?.img} alt="" />}
    </div>
  </div>;
};

export default Message;

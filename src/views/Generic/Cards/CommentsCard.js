// ** React Imports
import { useState, useEffect } from "react";

// ** Custom Components
import Avatar from "@components/avatar";
import { getUserData } from "@utils";

// ** Third Party Components
import classnames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import { MoreVertical, Send, Image } from "react-feather";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  Form,
  Label,
  InputGroup,
  Input,
  InputGroupText,
  Button,
} from "reactstrap";

// ** Images
import profilePic from "@src/assets/images/portrait/small/avatar-s-11.jpg";

// ** Styles
import "@styles/base/pages/app-chat-list.scss";
import { toast } from "react-toastify";

const data = {
  chat: {
    id: 2,
    userId: 1,
    unseenMsgs: 0,
    chat: [
      {
        message: "How can we help? We're here for you!",
        time: "Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)",
        senderId: 11,
      },
      {
        message:
          "Hey John, I am looking for the best admin template. Could you please help me to find it out?",
        time: "Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)",
        senderId: 1,
      },
      {
        message: "It should be Bootstrap 5 compatible.",
        time: "Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)",
        senderId: 1,
      },
      {
        message: "Absolutely!",
        time: "Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)",
        senderId: 11,
      },
      {
        message: "Modern admin is the responsive bootstrap 5 admin template.!",
        time: "Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",
        senderId: 11,
      },
      {
        message: "Looks clean and fresh UI.",
        time: "Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)",
        senderId: 1,
      },
      {
        message: "It's perfect for my next project.",
        time: "Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)",
        senderId: 1,
      },
      {
        message: "How can I purchase it?",
        time: "Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)",
        senderId: 1,
      },
      {
        message: "Thanks, from ThemeForest.",
        time: "Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)",
        senderId: 11,
      },
      {
        message: "I will purchase it for sure. 👍",
        time: "2020-12-08T13:52:38.013Z",
        senderId: 1,
      },
    ],
  },
  contact: {
    id: 1,
    fullName: "Felecia Rower",
    avatar: require("@src/assets/images/portrait/small/avatar-s-20.jpg")
      .default,
    status: "away",
  },
};

const CommentsCard = ({ searchTerm, slug, postHook, customHook }) => {
  const { data: commentsData } = customHook({
    slug: slug,
  });
  // console.log("commentsData", commentsData);

  const user = getUserData();

  // ** States
  const [msg, setMsg] = useState("");
  const [chatRef, setChatRef] = useState(null);
  // const [chatData, setChatData] = useState(data);
  const [chatData, setChatData] = useState(commentsData);

  // console.log("chatData", chatData);

  //** Formats chat data based on sender
  const formattedChatData = () => {
    let chatLog = [];
    // if (chatData) {
    //   // chatLog = chatData.chat.chat;
    //   chatLog = commentsData?.results;
    // }
    if (commentsData) {
      // chatLog = chatData.chat.chat;
      chatLog = commentsData?.results;
    }

    const formattedChatLog = [];
    // let chatMessageSenderId = chatLog[0] ? chatLog[0].senderId : undefined;
    let chatMessageSenderId = user?.user_details?.slug
      ? user?.user_details?.slug
      : undefined;
    let msgGroup = {
      senderId: chatMessageSenderId,
      messages: [],
    };

    chatLog.forEach((msg, index) => {
      // if (chatMessageSenderId === msg.senderId) {

      if (chatMessageSenderId === msg?.owner?.id) {
        msgGroup.messages.push({
          // msg: msg.message,
          // time: msg.time,
          msg: msg?.text,
          time: msg?.date_created,
          image: msg?.owner?.user_profile?.image,
        });
      } else {
        // chatMessageSenderId = msg.senderId;
        chatMessageSenderId = msg?.owner?.slug;
        formattedChatLog.push(msgGroup);
        msgGroup = {
          // senderId: msg.senderId,
          senderId: msg?.owner?.slug,
          messages: [
            {
              // msg: msg.message,
              // time: msg.time,
              msg: msg?.text,
              time: msg?.date_created,
              image: msg?.owner?.user_profile?.image,
            },
          ],
        };
      }
      if (index === chatLog.length - 1) formattedChatLog.push(msgGroup);
    });
    // console.log("formattedChatLog", formattedChatLog);
    return formattedChatLog;
  };

  //** Renders user chat
  const renderChats = () => {
    return formattedChatData().map((item, index) => {
      // console.log("userDatra:", item);
      return (
        <div>
          <div
            key={index}
            className={classnames("chat", {
              // "chat-left": item.senderId !== 11,
              "chat-left": item.senderId !== user?.user_details?.slug,
              //commentsData?.results[1]?.owner?.id
            })}
          >
            <div className="chat-avatar">
              <Avatar
                className="box-shadow-1 cursor-pointer"
                // img={item.senderId === 11 ? profilePic : chatData.contact.avatar}
                // img={
                //   item.senderId === user?.user_details?.slug
                //     ? user?.profile?.image
                //       ? `${process.env.REACT_APP_BACKEND_IMG_BASEURL}${user?.profile?.image}`
                //       : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
                //     : item?.messages[0]?.image
                //     ? `${process.env.REACT_APP_BACKEND_IMG_BASEURL}${item?.messages[0]?.image}`
                //     : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
                // }

                img={
                  item.senderId !== user?.user_details?.slug
                    ? item?.messages[0]?.image
                      ? `${process.env.REACT_APP_BACKEND_IMG_BASEURL}${item?.messages[0]?.image}`
                      : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
                    : user?.profile?.image
                    ? `${process.env.REACT_APP_BACKEND_IMG_BASEURL}${user?.profile?.image}`
                    : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
                }

                // img={
                //   //commentsData?.results[1]?.owner?.id
                //   item.senderId === 11
                //     ? `${process.env.REACT_APP_BACKEND_IMG_BASEURL}${commentsData?.results[1]?.owner?.user_profile?.image}`
                //     : profilePic
                // }
              />
            </div>

            <div className="chat-body">
              {item.messages.map((chat) => (
                <div key={chat.msg} className="chat-content">
                  <p>{chat.msg}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    });
  };

  //** Scroll to chat bottom
  const scrollToBottom = () => {
    chatRef.scrollTop = Number.MAX_SAFE_INTEGER;
  };

  useEffect(
    () => {
      if (chatRef !== null) {
        scrollToBottom();
      }
    },
    //  [chatRef, chatData.chat.chat.length]
    [chatRef, commentsData?.results?.length]
  );

  const [addComment] = postHook();

  const handleSendMsg = (e) => {
    e.preventDefault();
    // console.log("msgeeee:", msg);

    if (msg) {
      let formdata = new FormData();
      formdata.append("text", msg);

      addComment({ slug: slug, data: formdata }).then((response) => {
        if (response.data) {
          // console.log("response.data:", response.data);
          setMsg("");
        }

        if (response.error) {
          toast.error(JSON.stringify(response.error.data));
        }
      });
    }
    //   if (response.error) {
    //     toast.error(JSON.stringify(response.error.data));
    //   }
    // });
    // if (msg.trim().length) {
    //   const newMsg = chatData;

    //   newMsg.chat.chat.push({
    //     message: msg,
    //     time: new Date(),
    //     senderId: 11,
    //   });

    //   setChatData(newMsg);
    //   setMsg("");
    // }
  };

  return (
    <Card className="chat-widget " style={{ marginLeft: "0.5px" }}>
      <CardHeader>
        <div className="d-flex align-items-center">
          {/* <Avatar
            status="online"
            className="me-2"
            img={chatData.contact.avatar}
            imgHeight="34"
            imgWidth="34"
          /> */}
          <h5 className="mb-0">Notes Comments</h5>
        </div>
        <div className="d-flex ">
          <div className="d-flex align-items-center mb-sm-0 mb-1 justify-content-end">
            <label className="mb-0">Search</label>
            <Input
              type="text"
              value={searchTerm}
              className="ms-50 w-100"
              // onChange={(e) => handleFilter(e.target.value)}
            />
          </div>

          <MoreVertical size={18} className="cursor-pointer my-auto " />
        </div>
      </CardHeader>
      <div className="chat-app-window">
        <PerfectScrollbar
          containerRef={(el) => setChatRef(el)}
          className="user-chats scroll-area"
          options={{ wheelPropagation: false }}
        >
          <div className="chats">{renderChats()}</div>
        </PerfectScrollbar>
        <Form className="chat-app-form" onSubmit={(e) => handleSendMsg(e)}>
          <InputGroup className="input-group-merge me-1 form-send-message">
            <InputGroupText>
              <Label className="attachment-icon mb-0" for="attach-doc">
                <Image className="cursor-pointer text-secondary" size={14} />
                <input type="file" id="attach-doc" hidden />
              </Label>
            </InputGroupText>
            <Input
              value={msg}
              className="border-0"
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Type your message"
            />
          </InputGroup>
          <Button className="send" color="primary">
            <Send size={14} className="d-lg-none" />
            <span className="d-none d-lg-block">Send</span>
          </Button>
        </Form>
      </div>
    </Card>
  );
};

export default CommentsCard;

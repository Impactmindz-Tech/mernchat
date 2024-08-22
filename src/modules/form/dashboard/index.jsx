import React, { useEffect, useState } from "react";
import Input from "../../../components/input";
import { fetchConversationss, fetchMessageApi, sendMessageApi, usersApi } from "../../../utils/api";
import { io } from "socket.io-client";

const Dashboard = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectedConversationId, setSelectedConversationId] = useState("");
  const [allUser, setAllUser] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:8080"));
  }, []);

  useEffect(()=>{
    socket?.emit('addUser' , user?._id)
    socket?.on("getUsers" , users=>{
      console.log(users)
    })
  },[socket])

  const [receiverId, setReceiverId] = useState("");
  const fetchConversations = async () => {
    try {
      const response = await fetchConversationss(user?._id);

      setConversation(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMessage = async (item) => {
    const conversationId = item?.conversationId || "new"; // Use "default" or a valid ID

    const body =
      conversationId === "new"
        ? {
            senderId: user?._id,
            receiverId: item?.user?.receiverId,
          }
        : {};


    try {
      const response = await fetchMessageApi(conversationId, body.senderId, body.receiverId);

      setMessage(response);
      setSelectedConversationId(response?.conversationId);
      setReceiverId(item?.user?.receiverId);
    } catch (error) {
      console.log("Error fetching messages:", error);
    }
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return; // Prevent sending empty messages
    let body = {
      conversationId: selectedConversationId ? selectedConversationId : "new",
      senderId: user._id,
      message: inputMessage,
      receiverId: receiverId,
    };
    try {
      const response = sendMessageApi(body);
      if (response) {
        setInputMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchusers = async () => {
    try {
      const res = await usersApi(user?._id);
      setAllUser(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchConversations();
    fetchusers();
  }, []);

  return (
    <div className="w-screen flex">
      <div className="w-[25%] border border-[#ccc] h-screen bg-secondary">
        <div className="flex items-center justify-center my-8">
          <div className="border border-primary p-[2px] rounded-full">
            <img className="rounded-full" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" width={75} height={75} />
          </div>
          <div className="ml-6">
            <h3 className="text-2xl">{user.fullname}</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>
        <hr />
        <div className="mx-14 mt-10">
          <div className="text-primary text-lg">message</div>
          <div>
            {conversation.length > 0 ? (
              conversation?.map((item, index) => {
                return (
                  <div key={index} className="flex items-center py-6 border-b border-[#ccc] cursor-pointer" onClick={() => fetchMessage(item)}>
                    <div className="border border-primary  rounded-full">
                      <img className="rounded-full" src={"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt="" width={60} height={60} />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold">{item.user.fullname}</h3>
                      <p className="text-sm font-light">{item.user.email}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center text-lg font-semibol mt-20">No Conversation</div>
            )}
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-white h-screen flex flex-col  items-center">
        <div className="w-[75%] bg-secondary h-[80px] mt-14 rounded-full">
          <div className="flex items-center px-14 h-full">
            <img className="rounded-full cursor-pointer" src={"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt="" width={60} height={60} />
            <div className="ml-6 mr-auto">
              <h3 className="text-lg">{message[0]?.user?.fullname}</h3>
              <p className="text-sm font-light">Online</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[75%] w-full overflow-y-scroll border-b">
          {message?.messages?.map(({ message, user: { id } = {} }) => {
            // Check if the message belongs to the current user
            const isCurrentUser = id === user?._id;
            return (
              <div key={id} className={`px-10 pt-7 ${isCurrentUser ? "text-right" : "text-left"}`}>
                <div className={`max-w-[40%] p-3 ${isCurrentUser ? "bg-primary text-white rounded-b-lg rounded-tl-xl ml-auto" : "bg-secondary rounded-b-lg"}`}>{message}</div>
              </div>
            );
          })}
        </div>
        <div className="p-14 w-full flex items-center">
          <Input placeholder="Type a message... " className="w-[75%]" onChange={(e) => setInputMessage(e.target.value)} inputClassname="outline-none p-3 w-full border border-[#ccc] rounded-lg bg-[#fff]" />
          <div className="ml-4 pl-4 cursor-pointer bg-secondary" onClick={sendMessage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 14l11 -11" />
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[25%] bg-light px-8 py-16 h-screen">
        <div className="text-primary text-lg">People</div>
        {allUser.length > 0 ? (
          allUser?.map((item, index) => {
            return (
              <div key={index} className="flex items-center py-6 border-b border-[#ccc] cursor-pointer" onClick={() => fetchMessage(item)}>
                <div className="border border-primary  rounded-full">{/* <img className="rounded-full" src={"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt="" width={60} height={60} /> */}</div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold">{item.user.fullname}</h3>
                  <p className="text-sm font-light">{item.user.email}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-lg font-semibol mt-20">No Conversation</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

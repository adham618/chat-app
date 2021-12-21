
import React, { useState, useEffect, useContext } from "react"

import { Context } from "../context"

import dynamic from "next/dynamic"
import { useRouter } from "next/router"

const Chats = () => {
  const ChatEngine = dynamic(() =>
    import("react-chat-engine").then((module) => module.ChatEngine)
  )
  const MessageFormSocial = dynamic(() =>
    import("react-chat-engine").then((module) => module.MessageFormSocial)
  )
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/");
    }
  }, [username, secret]);

  if (!showChat) return <div />;
  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="80vh"
          projectID="37d93d41-8b71-4b43-9a7e-8747fa5e0978"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  )
}
export default Chats
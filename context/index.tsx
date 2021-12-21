import { useState, createContext, SetStateAction } from "react";
//
interface ContextProps {
  children: React.ReactNode
}


//
export const Context = createContext();

const ContextProvider = ({ children }: ContextProps) => {
  const [username, setUsername] = useState("")
  const [secret, setSecret] = useState("")

  const value = {
    username,
    setUsername,
    secret,
    setSecret,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export default ContextProvider
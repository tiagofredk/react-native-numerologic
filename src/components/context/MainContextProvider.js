import { StyleSheet, Text, View } from 'react-native'
import React, {createContext} from 'react'

export const MainContext = createContext();

const MainContextProvider = ({children}) => {
  
  const [user, setUser] = useState("Tiago")

  return (
    <MainContext.Provider
    value={{
      user,
      setUser
    }}
    >
      {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider

const styles = StyleSheet.create({})
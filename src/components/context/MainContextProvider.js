import { StyleSheet } from 'react-native'
import React, { createContext, useState } from 'react'

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  
  const [destiny, setDestiny] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [origin, setOrigin] = useState("");
  const [personality, setPersonality] = useState("");
  const [heart, setHeart] = useState("");
  const [firstvowel, setFirstvowel] = useState("");
  const [Username, setUsername] = useState("");
  const [Date, setDate] = useState("01-01-2022");

  return (
    <MainContext.Provider
      value={{
        destiny, setDestiny,
        birthdate, setBirthdate,
        year, setYear,
        month, setMonth,
        day, setDay,
        origin, setOrigin,
        personality, setPersonality,
        heart, setHeart,
        firstvowel, setFirstvowel,
        Username, setUsername
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider

const styles = StyleSheet.create({})

import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [title,setTitle] = useState('');
  const [company,setCompany] = useState('')
  const [phone,setPhone] = useState('')
  const [website,setWebsite] = useState('')
  const [email,setEmail] = useState('')
  const [address,setAddress] = useState('')
  const updateName = (newName,newTitle,newCompany,newPhone,newWebsite,newEmail,newAddress) => {
    setName(newName);
    setTitle(newTitle)
    setCompany(newCompany)
    setPhone(newPhone)
    setWebsite(newWebsite)
    setEmail(newEmail)
    setAddress(newAddress)
  };

  return (
    <AppContext.Provider value={{ name,title,company,phone,website,email,address, updateName  }}>
      {children}
    </AppContext.Provider>
  );
};
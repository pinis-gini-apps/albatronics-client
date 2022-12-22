import React, {useEffect, useState} from 'react';

import {UserContext} from './user.context';
import {IUser} from './user.interface';
import axios from 'axios'
type UserContextProps = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserContextProps> = ({children}) => {
  const [userData, setUserData] = useState({id: '', role: '', username: ''})
  
  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/user/me', {
        method: 'GET',
        headers: {'Content-type': 'application/json'},
      });
      const text = await response.text();
      return text ? JSON.parse(text) : {};
    } catch (error) {
      console.error(error);
    }
  }



  useEffect(() => {
  fetchUserData()
  }, [])

  const userInfo: IUser = {...userData, setUserData};

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

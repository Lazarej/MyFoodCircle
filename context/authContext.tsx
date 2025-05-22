// contexts/AuthContext.tsx
import User from '@/lib/mock/type/user';
import { useRouter } from 'expo-router';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

type AuthContextType = {
  user: User;
  setUser: (user: User) => void;
  logOut: () => void;
  register: (email:string, password:string) => void
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children} : {children:ReactNode}) => {
   const [auth, setAuthState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const setAuth = async (auth:boolean) => {
    setAuthState(auth);
    if (auth) {
      await SecureStore.setItemAsync("user-id", String(user.id));
      router.replace("/(protected)/(tabs)"); 
    }
  };

  const register = async (email: string, password: string) => {
    console.log('start')
    try {
      const response = await axios.post('http://192.168.1.9:1337/api/auth/local/register', {
        username:email,
        email,
        password,
      });
      console.log('data', response.data);
      await SecureStore.setItemAsync('userToken', response.data.jwt);
    } catch (error) {
      console.log(error);
   
    }

  }
  const logOut = async () => {
    setAuthState(false);
    await SecureStore.deleteItemAsync("userToken");
    router.replace("/(auth)/login");
    };
    
     const loadUser = async () => {
       const token = await SecureStore.getItemAsync("userToken");
      if (token) {
        setAuthState(prev => prev = true);
      }
      setIsLoading(false);
    };

  useEffect(() => {
    loadUser();
  }, []);


  return (
    <AuthContext.Provider value={{ user, setUser, logOut, register, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

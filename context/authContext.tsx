// contexts/AuthContext.tsx
import User from '@/constants/type/user';
import { useRouter } from 'expo-router';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

type AuthContextType = {
  user: User;
  setUser: (user: User) => void;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children} : {children:ReactNode}) => {
   const [user, setUserState] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const setUser = async (user: User) => {
    setUserState(user);
    if (user) {
      await SecureStore.setItemAsync("user-id", String(user.id));
      router.replace("/"); // ou /tabs
    }
  };

  const logout = async () => {
    setUserState(null);
    await SecureStore.deleteItemAsync("user-id");
    router.replace("/auth");
    };
    
     const loadUser = async () => {
      const id = await SecureStore.getItemAsync("user-id");
      if (id) {
        setUserState({ id: parseInt(id), name: "User" }); // tu peux fetch l'utilisateur complet ici
      }
      setIsLoading(false);
    };

  useEffect(() => {
    loadUser();
  }, []);


  return (
    <AuthContext.Provider value={{ user, setUser, logout, isLoading }}>
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

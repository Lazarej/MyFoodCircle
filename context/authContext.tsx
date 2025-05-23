// contexts/AuthContext.tsx
import { useRouter } from "expo-router";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import User from "@/lib/type/user";

type AuthContextType = {
  auth: boolean;
  logIn: (email: string, password: string) => void | string;
  logOut: () => void;
  register: (email: string, password: string)  => void | string;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuthState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const logIn = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        "http://192.168.1.9:1337/api/auth/local",
        {
          identifier: email,
          password,
        }
      );
      
      await SecureStore.setItemAsync("userToken", response.data.jwt);
      router.replace("/(protected)/(tabs)");
      setAuthState(true); 
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const strapiError = error.response?.data?.error?.message;
        return strapiError;
      } else {
        return "Erreur réseau ou interne";
      }
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        "http://192.168.1.9:1337/api/auth/local/register",
        {
          username: email,
          email,
          password,
        }
      );
  
      await SecureStore.setItemAsync("userToken", response.data.jwt);
      router.replace("/(protected)/(tabs)");
      setAuthState(true); // ensuite seulement
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const strapiError = error.response?.data?.error?.message;
        return strapiError;
      } else {
        return "Erreur réseau ou interne";
      }
    }
  };
  const logOut = async () => {
    await SecureStore.deleteItemAsync("userToken");
    router.replace("/(auth)/login");
    setAuthState(false);
  };

  const loadUser = async () => {
    const token = await SecureStore.getItemAsync("userToken");
    console.log(token);
    if (token) {
      setAuthState(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, logIn, logOut, register, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

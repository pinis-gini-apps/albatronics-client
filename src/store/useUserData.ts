import create from "zustand";

interface IUserConfig {
    userData: any;
    setUserData: (userConfig: any) => void;
}


export const useUserData = create<IUserConfig>(set => ({
  userData: {},
  setUserData: (userData: any) => set(() => ({ userData })),
}));
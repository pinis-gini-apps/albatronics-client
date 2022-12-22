import create from "zustand";

interface IUserConfig {
  userConfig: any;
  setUserConfig: (userConfig: any) => void;
}


export const useUserConfig = create<IUserConfig>(set => ({
  userConfig: [],
  setUserConfig: (userConfig: any) => set(() => ({ userConfig })),
}));
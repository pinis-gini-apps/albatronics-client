import create from "zustand";

interface IUserConfig {
  userConfig: any;
  allowedRoutes: string[];
  setUserConfig: (userConfig: any) => void;
  setAllowedRoutes: (allowedRoutes: any) => void;
}


export const useUserConfig = create<IUserConfig>(set => ({
  userConfig: [],
  allowedRoutes: [],
  setUserConfig: (userConfig: any) => set((state) => ({...state, userConfig })),
  setAllowedRoutes: (allowedRoutes: any) => set((state) => ({ ...state, allowedRoutes })),
}));
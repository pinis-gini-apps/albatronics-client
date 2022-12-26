import create from "zustand";

// const subRoutes = {};

// const calculateSubRoutes = (subRoute: string, parent: string) => {
  
// }

interface IAllowedRoutes {
  allowedRoutes: string[];
  // allowedSubRoutes: any;
  setAllowedRoutes: (allowedRoutes: any) => void;
  // setAllowedSubRoutes: (subRoute: string, parent: string) => void;
}


export const useAllowedRoutes = create<IAllowedRoutes>(set => ({
  allowedRoutes: [],
  // allowedSubRoutes: {},
  setAllowedRoutes: (allowedRoutes: any) => set((state) => ({ ...state, allowedRoutes })),
  // setAllowedSubRoutes: (subRoute: string, parent: string) => set((state) => ({ ...state, allowedSubRoutes: calculateSubRoutes(subRoute,parent)  })),
}));
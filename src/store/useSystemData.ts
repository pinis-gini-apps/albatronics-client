import create from "zustand";

interface ISystemData {
    timestamp: string;
}

interface ISystemDataSlice {
    systemData: ISystemData;
    setSystemData: (property: string, value: any) => void;
}


const systemDataObj = (systemData: ISystemData, property: string, value: any) => {
if ((systemData as any)[property] === undefined) return { timestamp: '' };

const obj = {
    ...systemData,
    [property]: value
}

return obj;
}


export const useSystemData = create<ISystemDataSlice>(set => ({
    systemData: {
        timestamp: ''
    },
    setSystemData: (property: string, value:any) => set((state) => ({ ...state, systemData: systemDataObj(state.systemData, property, value) })),
}));
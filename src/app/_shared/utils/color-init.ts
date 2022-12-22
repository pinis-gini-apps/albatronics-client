import {POWER_LED_PROTOCOL} from '../../main/constants/power-led-protocol';
import {ENODEB_PROTOCOL} from '../../main/constants/eNodeB-protocol';

export const updateStatusBasedOnPowerLed = (protocolNumber: number | undefined, data: any): any => {
    const protocol: Record<number, any> = POWER_LED_PROTOCOL;
    const defaultValue = protocol[0];

    let row: { color: string; interval: string; message: any }

    if(data && data[0]?.key === "Status") {
        row = protocolNumber ? protocol[protocolNumber] || defaultValue : defaultValue;
        data[0].value = row.message;
    }

    return data;
};

export const getPowerLedColor = (protocolNumber: number | undefined, data: any): any => {
    const protocol: Record<number, any> = POWER_LED_PROTOCOL;
    const defaultValue = protocol[0];

    let row: { color: string; interval: string; message: any }

    if(data && data[0]?.key === "Status") {
        row = protocolNumber ? protocol[protocolNumber] || defaultValue : defaultValue;
        return row.color;
    }

    return "";
};

export const getENodeBProtocol = (protocolNumber: number | undefined): any => {
    const protocol: Record<number, any> = ENODEB_PROTOCOL;
    const defaultValue = protocol[0];

    let row: { color: string; interval: string; message: any }

    row = protocolNumber ? protocol[protocolNumber] || defaultValue : defaultValue;

    return row;
}

export const getENodeBColor = (protocolNumber: number | undefined): any => {
    return getENodeBProtocol(protocolNumber).color;
};

export const getENodeBStatusName = (protocolNumber: number | undefined): any => {
    return getENodeBProtocol(protocolNumber).message;
};

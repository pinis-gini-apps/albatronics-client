import { useUserConfig } from "store/useUserConfig";
import { useUserData } from "store/useUserData";

export const setUserConfig = async (data: any) => {
    try {
        const response = await fetch('/api/user/config', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                sensitive: 'true', mode: 'cors',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        const text = await response.text();
        const res = JSON.parse(text);
        return text ? res : {};
    } catch (error) {
        console.error(error);
    }
};

export const getUserConfig = async (userRole: string, token = '') => {
    try {
        const response = await fetch(`/api/user/config/${userRole.toLowerCase()}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token || localStorage.getItem('authToken')}`,
                sensitive: 'true', mode: 'cors',
                'Content-Type': 'application/json'
            },
        });
        const text = await response.text();
        const res = await JSON.parse(text);
        return text ? res : {};
    } catch (error) {
        console.error(error);
    }
};

export const initializeUserData = async (id: string, token = '') => {
    try {
        const response = await fetch(`/api/user/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token || localStorage.getItem('authToken')}`,
                sensitive: 'true', mode: 'cors',
                'Content-Type': 'application/json'
            },
        });
        const text = await response.text();
        const res = await JSON.parse(text);

        useUserData.getState().setUserData(res);

        if (res.userRole) {
            const userConfig = await getUserConfig(res.userRole, token);
            useUserConfig.getState().setUserConfig(userConfig)
        }
        return text ? res : {};
    } catch (error) {
        console.error(error);
    }
};
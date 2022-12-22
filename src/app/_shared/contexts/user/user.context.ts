import React from 'react';

import {IUser} from './user.interface';

export const UserContext = React.createContext<IUser>({id: '', role: '', username: '', setUserData: () => {}});

import React, {ReactElement} from 'react';
import {Navigate, Outlet} from 'react-router-dom';

type GuardedRouteProps = {
  isAllowed: boolean;
  redirectPath: string;
  children?: ReactElement;
};

export const GuardedRoute: React.FC<GuardedRouteProps> = ({isAllowed, redirectPath, children}) => {  
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }
  return children || <Outlet />;
};

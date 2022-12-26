import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {styled} from '@mui/material';

import { useUserConfig } from 'store/useUserConfig';
import { useAllowedRoutes } from 'store/useAllowedRoutes';

type SelectionPartProps = {
  selectionItems: any;
  color?: 'primary' | 'transparent';
};

const SelectionPartTabs = styled(Tabs)<Pick<SelectionPartProps, 'color'>>(
  ({
     theme,
     color,
   }) => ({
    backgroundColor: color === 'primary' ? theme.palette.primary.main : 'transparent',
    color: color === 'primary' ? theme.palette.primary.contrastText : 'inherit',
    '& .MuiTabs-indicator': {
      backgroundColor: color === 'primary' ? theme.palette.primary.contrastText : theme.palette.primary.main,
    },
  }),
);

export const SelectionPart: React.FC<SelectionPartProps> = ({selectionItems, color = 'primary'}) => {  
  const userConfig = useUserConfig(state => state.userConfig);
  const setAllowedRoutes = useAllowedRoutes(state => state.setAllowedRoutes);
  const [tabs, setTabs] = useState<any[]>([]);
  const [tabIndex, setTabIndex] = React.useState(0);



  useEffect(() => {
    if (userConfig.length > 0) {
      const routesList = userConfig.map((c: any) => c.id)
      setAllowedRoutes(routesList)
      selectionItems.forEach((element: any) => {        
        if (routesList.includes(element.label.toLowerCase())) {
          setTabs(prevState => [...prevState, element])
        }
      });
    }    
  }, [userConfig])


  return (
    <SelectionPartTabs
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
      variant="scrollable"
      textColor="inherit"
      color={color}
      scrollButtons={false}
      allowScrollButtonsMobile
      aria-label="main-navigation-part"
    >
      {tabs.length > 0 && tabs?.map((item: any) => (
        <Tab
          component={Link}
          to={item.route}
          label={item.label}
          key={item.route}
        />
      ))}
    </SelectionPartTabs>
  );
};

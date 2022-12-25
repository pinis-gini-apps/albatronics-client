import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {styled} from '@mui/material';

import { useUserConfig } from 'store/useUserConfig';

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
  const [tabs, setTabs] = useState<any[]>([]);
  const [tabIndex, setTabIndex] = React.useState(0);

  useEffect(() => {    
    if (userConfig.length > 0) {      
      userConfig.forEach((route: any, i: number) => {
        for (const children of route.childrens) {
          if (children.checked) {     
            setTabs(prevState => [...prevState, selectionItems[i]])       
            break;
          }}
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

import React, { useEffect, useState } from 'react';

import {Link} from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useUserConfig } from 'store/useUserConfig';

type SelectionPartWithButtons = {
  selectionItems: any;
  parent: string;
};

export const SelectionPartWithButtons: React.FC<SelectionPartWithButtons> = ({selectionItems, parent}) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = React.useState(0);
  const userConfig = useUserConfig(state => state.userConfig);
  const [tabs, setTabs] = useState<any>([]);

  useEffect(() => {    
    
    if (userConfig.length > 0 && selectionItems.length > 0) {      
      userConfig.forEach((route: any, i: number) => {        
        if(route.id === parent) {
          route.childrens.forEach((children: any) => {
            if (children.checked) {
              selectionItems.forEach((x:any) => {
                if(x.label === children.title) {
                  console.log(children.title, parent);
                  
                  setTabs((prevState: any) => [...prevState, x])
                }
              })
            }
          })
        }
      });      
    }
  }, [userConfig])
  
  
  return (
    <Box sx={{display: 'flex', gap: '0.5rem', paddingInline: '1rem', marginBlock: '1.5rem'}}>
      {tabs.length > 0 && tabs.map((item: any, itemNumber: any) => (
        <Button
          disableElevation
          size="small"
          component={Link}
          to={item.route}
          variant={selectedButtonIndex === itemNumber ? 'contained' : 'outlined'}
          key={item.route}
          onClick={() => setSelectedButtonIndex(itemNumber)}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

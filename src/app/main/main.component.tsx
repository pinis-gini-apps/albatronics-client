import React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import {SelectionPart} from '../_shared/components/selection-part/selection-part.component';
import {LedInfoProvider} from '../_shared/contexts/led-info/led-info.provider';

import './main.style.scss';
import {MAIN_SELECTION_PART_ITEMS} from './constants/main-selection-part-items';
import {MainRoutes} from './main-routes';
import {AppHeader} from './app-header/app-header.component';

export const Main: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <LedInfoProvider>
        <AppHeader />
        <Stack className="main-bg">
          <SelectionPart
            color="transparent"
            selectionItems={MAIN_SELECTION_PART_ITEMS}
          />
          <main style={{marginTop: '0.5px'}}>
            <MainRoutes />
          </main>
        </Stack>
      </LedInfoProvider>
    </Container>
  );
};

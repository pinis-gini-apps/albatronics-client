import React, {ReactElement} from 'react';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {GridToolbarContainer} from '@mui/x-data-grid';

type CrudDataTableEditToolbarProps<T> = {
  readonly onCreateActionClick: () => void;
};

export const CrudDataTableEditToolbar = <T extends unknown>({onCreateActionClick}: CrudDataTableEditToolbarProps<T>): ReactElement => (
  <GridToolbarContainer>
    <Button
      color="primary"
      startIcon={<AddIcon />}
      onClick={() => onCreateActionClick()}
    >
      Add record
    </Button>
  </GridToolbarContainer>
);

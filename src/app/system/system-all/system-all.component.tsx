import React, { useEffect, useState } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useHttp } from '../../_shared/modules/http/hooks/use-http';
import { CrudDataTable } from '../../_shared/components/crud-data-table/crud-data-table.component';

import { systemAllTableColumns } from './constants/system-all-table-columns';
import { SystemAllInformation } from './models/system-all-information';
import { composeSystemAllUpsertDto } from './constants/compose-system-all-upsert-dto';
import { nullSystemAllInformationConstructor } from './null-system-all-information.constructor';
import { Button } from '@mui/material';
import { generateNewRowId } from 'app/_shared/components/crud-data-table/contsants/generate-new-row-id';

export const SystemAll: React.FC = () => {
  const {
    operation: fetchSystemAllData,
    data: allSelectionData,
  } = useHttp<SystemAllInformation[]>({
    url: '/api/v1/system/configuration',
    method: 'GET',
  });
  const { operation: createSystemAllData } = useHttp<SystemAllInformation[]>({ method: 'POST' });
  const { operation: updateSystemAllData } = useHttp<SystemAllInformation[]>({ method: 'PUT' });
  const { operation: deleteSystemAllData } = useHttp<SystemAllInformation[]>({ method: 'DELETE' });
  const [updatedRows, setUpdatedRows] = useState<SystemAllInformation[]>([]);

  const [rowsToDeleteIds, setRowsToDeleteIds] = useState<string[]>([]);
  const [postRows, setPostRows] = useState<SystemAllInformation[]>([]);
  const [editedRows, setEditedRows] = useState<SystemAllInformation[]>([]);

  useEffect(() => {
    fetchSystemAllData();
  }, []);

  useEffect(() => {
    setUpdatedRows(allSelectionData || []);
  }, [allSelectionData]);


  const handleCreateAction = async (systemAll: SystemAllInformation) => {
    // console.log(systemAll, 'handleCreateAction');
    const id = generateNewRowId();
    systemAll = {...systemAll, id};
    setUpdatedRows(prevState => [...prevState, systemAll]);
    setPostRows(prevState => [...prevState, systemAll]);
    
    // await createSystemAllData({ url: '/api/v1/system/configuration', body: systemAll });
    // await fetchSystemAllData();
  }

  const handleDeleteAction = async ({ id }: SystemAllInformation) => {
    setRowsToDeleteIds(prevState => [...prevState, id]);
  }

  const handleUpdateAction = async (systemAll: SystemAllInformation) => {
    console.log('here');
    
    setEditedRows(prevState => [...prevState, systemAll]);
    console.log(systemAll, 'handleUpdateAction');
    const newRows = updatedRows.map((r, i:number) => {
      if(r.id === systemAll.id) {
        return systemAll;
      }
      return r;
    })
    setUpdatedRows(newRows);
  };


  const handleClear = async () => {
    setUpdatedRows(allSelectionData || [])    
    setEditedRows([]);
    setRowsToDeleteIds([]);
    setPostRows([]);



  }
  const handleOnSave = async () => {
    console.log(editedRows, rowsToDeleteIds, postRows);
    await createSystemAllData({ url: '/api/v1/system/configuration', body: postRows });
    // await updateSystemAllData({ url: '/api/v1/system/configuration', body: systemAll }); put
    // await deleteSystemAllData({ url: '/api/v1/system/configuration', body: systemAll }); delete

  }

  return (
    <Stack
      sx={{
        minHeight: '60vh',
        width: '100%',
      }}
    >
      <Typography variant="h5">TacMAN All Parameters List</Typography>
      <CrudDataTable
        data={updatedRows || []}
        columns={systemAllTableColumns}
        emptyRowConstructor={nullSystemAllInformationConstructor}
        onCreateActionClick={handleCreateAction}
        onUpdateActionClick={handleUpdateAction}
        onDeleteActionClick={handleDeleteAction}
        rowsToDeleteIds={rowsToDeleteIds}
      />
      <div className='buttons-container'>
        <Button disableElevation variant="contained" size="medium" color="success" onClick={handleOnSave}>
          SAVE & Apply
        </Button>
        <Button disableElevation variant="contained" size="medium" color="error" onClick={handleClear}>Clear</Button>
      </div>
    </Stack>
  );
};

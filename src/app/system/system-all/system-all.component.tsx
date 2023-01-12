import React, { useEffect, useState } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useHttp } from '../../_shared/modules/http/hooks/use-http';
import { CrudDataTable } from '../../_shared/components/crud-data-table/crud-data-table.component';

import { systemAllTableColumns } from './constants/system-all-table-columns';
import { SystemAllInformation } from './models/system-all-information';
import { nullSystemAllInformationConstructor } from './null-system-all-information.constructor';
import { Button } from '@mui/material';
import { generateNewRowId } from 'app/_shared/components/crud-data-table/contsants/generate-new-row-id';

import axios from 'axios'

export const SystemAll: React.FC = () => {
  const {
    operation: fetchSystemAllData,
    data: allSelectionData,
  } = useHttp<SystemAllInformation[]>({
    url: '/api/v1/configuration/all',
    method: 'GET',
  });
  const { operation: createSystemAllData } = useHttp<SystemAllInformation[]>({ method: 'POST' });
  const { operation: updateSystemAllData } = useHttp<SystemAllInformation[]>({ method: 'PUT' });
 
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
    const id = generateNewRowId();
    systemAll = {...systemAll, id};
    setUpdatedRows(prevState => [...prevState, systemAll]);
    setPostRows(prevState => [...prevState, systemAll]);
  }

  const handleDeleteAction = async ({ id }: SystemAllInformation) => {
    setRowsToDeleteIds(prevState => [...prevState, id]);
  }

  const handleUpdateAction = async (systemAll: SystemAllInformation) => {    
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
    postRows.length > 0 && await createSystemAllData({ url: '/api/v1/configuration', body: postRows });
    editedRows.length > 0 && await updateSystemAllData({ url: '/api/v1/configuration', body: editedRows })
    rowsToDeleteIds.length > 0 && await axios.delete('/api/v1/configuration', 
    { data: { rows: rowsToDeleteIds }, 
    headers: { "Authorization": `Bearer ${localStorage.getItem('authToken')}`, 
    'Content-Type': 'application/json'}})

    if (postRows.length > 0 || editedRows.length > 0 || rowsToDeleteIds.length > 0) await fetchSystemAllData();
    handleClear()
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

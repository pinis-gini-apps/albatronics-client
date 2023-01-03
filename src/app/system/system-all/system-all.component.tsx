import React, {useEffect} from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {useHttp} from '../../_shared/modules/http/hooks/use-http';
import {CrudDataTable} from '../../_shared/components/crud-data-table/crud-data-table.component';

import {systemAllTableColumns} from './constants/system-all-table-columns';
import {SystemAllInformation} from './models/system-all-information';
import {composeSystemAllUpsertDto} from './constants/compose-system-all-upsert-dto';
import {nullSystemAllInformationConstructor} from './null-system-all-information.constructor';
import {GridRowModes} from '@mui/x-data-grid';

export const SystemAll: React.FC = () => {
  const {
    operation: fetchSystemAllData,
    data: allSelectionData,
  } = useHttp<SystemAllInformation[]>({
    url: '/api/v1/system/all-selection',
    method: 'GET',
  });
  const {operation: createSystemAllData} = useHttp<SystemAllInformation[]>({method: 'POST'});
  const {operation: updateSystemAllData} = useHttp<SystemAllInformation[]>({method: 'PUT'});
  const {operation: deleteSystemAllData} = useHttp<SystemAllInformation[]>({method: 'DELETE'});

  let intervalId: string | number | NodeJS.Timer | undefined;
  let editMode: boolean;

  useEffect(() => {
    fetchSystemAllData();
    if(!editMode) {
        startInterval();
        return () => {
            clearInterval(intervalId);
        };
    }
  }, []);

  const handleTableChangeMode = (mode: GridRowModes) => {
    if (mode === GridRowModes.View) {
        editMode = false
        startInterval();
    } else {
        editMode = true;
        clearInterval(intervalId);
    }
  };

  const startInterval = () => {
      intervalId = setInterval(() => {
          fetchSystemAllData();
      }, 4000);
  }

  const handleCreateAction = React.useCallback(
    async (systemAll: SystemAllInformation) => {
      await createSystemAllData({url: '/api/v1/system/all-selection', body: systemAll});
      fetchSystemAllData();
    },
    [updateSystemAllData, fetchSystemAllData],
  );
  const handleDeleteAction = React.useCallback(
    async ({id}: SystemAllInformation) => {
      await deleteSystemAllData({url: `/api/v1/system/all-selection/${id}`});
      fetchSystemAllData();
  },
    [deleteSystemAllData, fetchSystemAllData],
  );
  const handleUpdateAction = React.useCallback(
    async (systemAll: SystemAllInformation) => {
      await updateSystemAllData({url: '/api/v1/system/all-selection', body: composeSystemAllUpsertDto(systemAll)});
      fetchSystemAllData();
    },
    [updateSystemAllData, fetchSystemAllData],
  );

  return (
    <Stack
      sx={{
        minHeight: '60vh',
        width: '100%',
      }}
    >
      <Typography variant="h5">TacMAN All Parameters List</Typography>
      <CrudDataTable
        data={allSelectionData || []}
        columns={systemAllTableColumns}
        emptyRowConstructor={nullSystemAllInformationConstructor}
        onCreateActionClick={handleCreateAction}
        onUpdateActionClick={handleUpdateAction}
        onDeleteActionClick={handleDeleteAction}
        onModeChange={handleTableChangeMode}
      />
    </Stack>
  );
};

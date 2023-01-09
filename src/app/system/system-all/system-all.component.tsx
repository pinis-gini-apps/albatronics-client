import React, {useEffect} from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {useHttp} from '../../_shared/modules/http/hooks/use-http';
import {CrudDataTable} from '../../_shared/components/crud-data-table/crud-data-table.component';

import {systemAllTableColumns} from './constants/system-all-table-columns';
import {SystemAllInformation} from './models/system-all-information';
import {composeSystemAllUpsertDto} from './constants/compose-system-all-upsert-dto';
import {nullSystemAllInformationConstructor} from './null-system-all-information.constructor';

export const SystemAll: React.FC = () => {
  const {
    operation: fetchSystemAllData,
    data: allSelectionData,
  } = useHttp<SystemAllInformation[]>({
    url: '/api/v1/configuration/all',
    method: 'GET',
  });
  const {operation: createSystemAllData} = useHttp<SystemAllInformation[]>({method: 'POST'});
  const {operation: updateSystemAllData} = useHttp<SystemAllInformation[]>({method: 'PUT'});
  const {operation: deleteSystemAllData} = useHttp<SystemAllInformation[]>({method: 'DELETE'});

  useEffect(() => {
    fetchSystemAllData();
  }, []);


  const handleCreateAction = async (systemAll: SystemAllInformation) => {
      await createSystemAllData({url: '/api/v1/configuration', body: systemAll});      
      await fetchSystemAllData();
    }

  const handleDeleteAction = async ({id}: SystemAllInformation) => {
      await deleteSystemAllData({url: `/api/v1/configuration/${id}`});
      await fetchSystemAllData();
  }

  const handleUpdateAction = async (systemAll: SystemAllInformation) => {
      await updateSystemAllData({url: '/api/v1/configuration', body: composeSystemAllUpsertDto(systemAll)});
      await fetchSystemAllData();
    };

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
      />
    </Stack>
  );
};

import React from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import {CrudDataTable} from '../../_shared/components/crud-data-table/crud-data-table.component';
import {NetworkTunnelingInformation} from './models/network-tunneling-information';
import {NETWORK_TUNNELING_IN_FORMATION_LIST_MOCK} from './constants/network-tunneling-information-list-mock';
import {nullNetworkTunnelingInformationConstructor} from './constants/null-network-tunneling-information-constructor';
import {NETWORK_TUNNELING_TABLE_COLUMNS} from './constants/network-tunneling-table-columns';

export const NetworkTunneling: React.FC = () => {
  const [networkTunnelingListData, setNetworkTunnelingListData] = React.useState<NetworkTunnelingInformation[]>(NETWORK_TUNNELING_IN_FORMATION_LIST_MOCK);
  const handleCreateAction = React.useCallback(
    (networkTunneling: NetworkTunnelingInformation) => {
      setNetworkTunnelingListData(data => [...data, {...networkTunneling, id: `id-00${data.length}`}]);
    },
    [setNetworkTunnelingListData],
  );
  const handleDeleteAction = React.useCallback(
    ({id}: NetworkTunnelingInformation) => {
      setNetworkTunnelingListData(data => data.filter(dataItem => dataItem.id !== id));
    },
    [setNetworkTunnelingListData],
  );
  const handleUpdateAction = React.useCallback(
    (networkTunneling: NetworkTunnelingInformation) => {
      setNetworkTunnelingListData(data => data.map(dataItem => (
        dataItem.id === networkTunneling.id
          ? networkTunneling
          : dataItem
        )))
    },
    [setNetworkTunnelingListData],
  );
  return (
    <Stack>
      <Typography variant="h5">Tunneling List</Typography>
      <CrudDataTable
        data={networkTunnelingListData}
        columns={NETWORK_TUNNELING_TABLE_COLUMNS}
        onCreateActionClick={handleCreateAction}
        onUpdateActionClick={handleUpdateAction}
        onDeleteActionClick={handleDeleteAction}
        emptyRowConstructor={nullNetworkTunnelingInformationConstructor}
      />
    </Stack>
  );
};

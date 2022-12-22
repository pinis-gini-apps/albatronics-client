import React from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {CrudDataTable} from '../../_shared/components/crud-data-table/crud-data-table.component';

import {NETWORK_PORT_FORWARDING_TABLE_COLUMNS} from './constants/network-port-forwarding-table-columns';
import {NetworkPortForwardingInformation} from './models/network-port-forwarding-model-information';
import {NETWORK_PORT_FORWARDING_INFORMATION_LIST_MOCK} from './constants/network-port-forwarding-information-list-mock';
import {
  nullNetworkPortForwardingInformationConstructor
} from './constants/null-network-port-forwarding-information-constructor';

export const NetworkPortForwarding: React.FC = () => {
  const [networkPortForwardingData, setNetworkPortForwardingData] = React.useState<NetworkPortForwardingInformation[]>(NETWORK_PORT_FORWARDING_INFORMATION_LIST_MOCK);
  const handleCreateAction = React.useCallback(
    (networkPortForwarding: NetworkPortForwardingInformation) => {
      setNetworkPortForwardingData(data => [...data, {...networkPortForwarding, id: `id-00${data.length + 1}`}]);
    },
    [setNetworkPortForwardingData],
  );
  const handleDeleteAction = React.useCallback(
    ({id}: NetworkPortForwardingInformation) => {
      setNetworkPortForwardingData(data => data.filter(dataItem => dataItem.id !== id));
    },
    [setNetworkPortForwardingData],
  );
  const handleUpdateAction = React.useCallback(
    (networkIpAddress: NetworkPortForwardingInformation) => {
      setNetworkPortForwardingData(data => data.map(dataItem => (
        dataItem.id === networkIpAddress.id
          ? networkIpAddress
          : dataItem
      )))
    },
    [setNetworkPortForwardingData],
  );
  return (
    <Stack>
      <Typography variant="h5">Port forwarding Summary</Typography>
      <CrudDataTable
        data={networkPortForwardingData}
        columns={NETWORK_PORT_FORWARDING_TABLE_COLUMNS}
        onCreateActionClick={handleCreateAction}
        onUpdateActionClick={handleUpdateAction}
        onDeleteActionClick={handleDeleteAction}
        emptyRowConstructor={nullNetworkPortForwardingInformationConstructor}
      />
    </Stack>
  );
}

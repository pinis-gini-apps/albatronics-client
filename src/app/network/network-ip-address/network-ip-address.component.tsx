import React from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import {CrudDataTable} from '../../_shared/components/crud-data-table/crud-data-table.component';

import {NETWORK_IP_ADDRESS_IN_FORMATION_LIST_MOCK} from './constants/network-ip-address-information-list-mock';
import {NETWORK_IP_ADDRESS_TABLE_COLUMNS} from './constants/network-ip-address-table-columns';
import {NetworkIpAddressInformation} from './models/network-ip-address-information';
import {nullNetworkIpAddressInformationConstructor} from './constants/null-network-ip-address-information-constructor';

export const NetworkIpAddress: React.FC = () => {
  const [networkIpAddressListData, setNetworkIpAddressListData] = React.useState<NetworkIpAddressInformation[]>(NETWORK_IP_ADDRESS_IN_FORMATION_LIST_MOCK);
  const handleCreateAction = React.useCallback(
    (networkIpAddress: NetworkIpAddressInformation) => {
      setNetworkIpAddressListData(data => [...data, {...networkIpAddress, id: `id-00${data.length}`}]);
    },
    [setNetworkIpAddressListData],
  );
  const handleDeleteAction = React.useCallback(
    ({id}: NetworkIpAddressInformation) => {
      setNetworkIpAddressListData(data => data.filter(dataItem => dataItem.id !== id));
    },
    [setNetworkIpAddressListData],
  );
  const handleUpdateAction = React.useCallback(
    (networkIpAddress: NetworkIpAddressInformation) => {
      setNetworkIpAddressListData(data => data.map(dataItem => (
        dataItem.id === networkIpAddress.id
          ? networkIpAddress
          : dataItem
        )))
    },
    [setNetworkIpAddressListData],
  );
  return (
    <Stack>
      <Typography variant="h5">Lan Interfaces</Typography>
      <CrudDataTable
        data={networkIpAddressListData}
        columns={NETWORK_IP_ADDRESS_TABLE_COLUMNS}
        onCreateActionClick={handleCreateAction}
        onUpdateActionClick={handleUpdateAction}
        onDeleteActionClick={handleDeleteAction}
        emptyRowConstructor={nullNetworkIpAddressInformationConstructor}
      />
    </Stack>
  );
};

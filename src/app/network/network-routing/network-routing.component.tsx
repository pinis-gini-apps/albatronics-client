import React from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import {CrudDataTable} from '../../_shared/components/crud-data-table/crud-data-table.component';
import {NetworkRoutingInformation} from './models/network-routing-information';
import {NETWORK_ROUTING_IN_FORMATION_LIST_MOCK} from './constants/network-routing-information-list-mock';
import {NETWORK_ROUTING_TABLE_COLUMNS} from './constants/network-routing-table-columns';
import {nullNetworkRoutingInformationConstructor} from './constants/null-network-routing-information-constructor';

export const NetworkRouting: React.FC = () => {
  const [networkRoutingListData, setNetworkRoutingListData] = React.useState<NetworkRoutingInformation[]>(NETWORK_ROUTING_IN_FORMATION_LIST_MOCK);
  const handleCreateAction = React.useCallback(
    (networkRouting: NetworkRoutingInformation) => {
      setNetworkRoutingListData(data => [...data, {...networkRouting, id: `id-00${data.length}`}]);
    },
    [setNetworkRoutingListData],
  );
  const handleDeleteAction = React.useCallback(
    ({id}: NetworkRoutingInformation) => {
      setNetworkRoutingListData(data => data.filter(dataItem => dataItem.id !== id));
    },
    [setNetworkRoutingListData],
  );
  const handleUpdateAction = React.useCallback(
    (networkRouting: NetworkRoutingInformation) => {
      setNetworkRoutingListData(data => data.map(dataItem => (
        dataItem.id === networkRouting.id
          ? networkRouting
          : dataItem
        )))
    },
    [setNetworkRoutingListData],
  );
  return (
    <Stack>
      <Typography variant="h5">Routing Rules</Typography>
      <CrudDataTable
        data={networkRoutingListData}
        columns={NETWORK_ROUTING_TABLE_COLUMNS}
        onCreateActionClick={handleCreateAction}
        onUpdateActionClick={handleUpdateAction}
        onDeleteActionClick={handleDeleteAction}
        emptyRowConstructor={nullNetworkRoutingInformationConstructor}
      />
    </Stack>
  );
};

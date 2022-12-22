import {GridColumns} from '@mui/x-data-grid';

import {NetworkPortForwardingInformation} from '../models/network-port-forwarding-model-information';

export const NETWORK_PORT_FORWARDING_TABLE_COLUMNS: GridColumns<NetworkPortForwardingInformation> = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    editable: true,
  },
  {
    field: 'sourceIpAddress',
    headerName: 'Source IP Address',
    flex: 1,
    editable: true,
  },
  {
    field: 'protocol',
    headerName: 'Protocol',
    flex: 1,
    editable: true,
  },
  {
    field: 'externalPort',
    headerName: 'External Port',
    flex: 1,
    editable: true,
  },
  {
    field: 'internalPort',
    headerName: 'Internal Port',
    flex: 1,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    editable: true,
  },
];

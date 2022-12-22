import {GridColumns} from '@mui/x-data-grid';

export const NETWORK_ROUTING_TABLE_COLUMNS: GridColumns = [
  {
    field: 'destinationIpAddress',
    headerName: 'Destination IP Address',
    flex: 1,
    editable: true,
  },
  {
    field: 'gatewayIpAddress',
    headerName: 'Gateway IP Address',
    flex: 1,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    editable: true,
  },
];

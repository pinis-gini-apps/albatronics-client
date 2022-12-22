import {GridColumns, GridPreProcessEditCellProps} from '@mui/x-data-grid';

import {SystemAllInformation} from '../models/system-all-information';

import {formatSystemAllTimeDate} from './format-system-all-time-date';

export const systemAllTableColumns: GridColumns<SystemAllInformation> = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    editable: true,
    preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
      if (!params.hasChanged) {
        return params.props;
      }
      const hasError = String(params.props.value).length < 1;
      return {...params.props, error: hasError};
    },
  },
  {
    field: 'value',
    headerName: 'Value',
    editable: true,
    preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
      if (!params.hasChanged) {
        return params.props;
      }
      const hasError = String(params.props.value).length < 1;
      return {...params.props, error: hasError};
    },
  },
  {
    field: 'dataType',
    headerName: 'Data Type',
    editable: true,
    preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
      if (!params.hasChanged) {
        return params.props;
      }
      const value = Number(params.props.value);
      const hasError = Number.isNaN(value) || value < -128 || value > 127;
      return {...params.props, error: hasError};
    },
  },
  {
    field: 'typeId',
    headerName: 'Type ID',
    editable: true,
  },
  {
    field: 'changeStatus',
    headerName: 'Change Status',
    editable: true,
    preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
      if (!params.hasChanged) {
        return params.props;
      }
      const value = Number(params.props.value);
      const hasError = Number.isNaN(value) || value < -128 || value > 127;
      return {...params.props, error: hasError};
    },
  },
  {
    field: 'visible',
    headerName: 'Visible',
    type: 'boolean',
    editable: true,
  },
  {
    field: 'tooltip',
    headerName: 'Tooltip message',
    editable: true,
  },
  {
    field: 'restWarm',
    headerName: 'Reset',
    editable: true,
    preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
      if (!params.hasChanged) {
        return params.props;
      }
      const value = Number(params.props.value);
      const hasError = Number.isNaN(value) || value < -128 || value > 127;
      return {...params.props, error: hasError};
    },
  },
  {
    field: 'modifiedTime',
    headerName: 'Modified time',
    type: 'dateTime',
    flex: 1,
    valueFormatter: (params) => formatSystemAllTimeDate(new Date(params.value)),
  },
];

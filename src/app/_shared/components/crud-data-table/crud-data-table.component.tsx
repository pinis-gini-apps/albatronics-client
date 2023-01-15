import React, {ReactElement} from 'react';

import {
  DataGrid,
  GridColumns,
  GridRowId,
  GridRowModes, GridRowModesModel, GridActionsCellItem, GridEventListener, MuiEvent, GridRowParams,
} from '@mui/x-data-grid';
import {GridEnrichedColDef} from '@mui/x-data-grid/models/colDef/gridColDef';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {GridValidRowModel} from '@mui/x-data-grid/models/gridRows';

import {Nullable} from '../../types/nullable';

import {CrudDataTableEditToolbar} from './crud-data-table-edit-toolbar/crud-data-table-edit-toolbar.component';
import {generateNewRowId} from './contsants/generate-new-row-id';
import {isNewRow} from './contsants/is-new-row';
import {StyledBox} from './styled-box/styled-box.component';

type CrudDataTableProps<T> = {
  readonly columns: GridColumns;
  readonly data: T[];
  readonly onUpdateActionClick: (row: T) => void;
  readonly onDeleteActionClick: (row: T) => void;
  readonly onCreateActionClick: (row: T) => void;
  readonly onModeChange?: (mode: GridRowModes) => void;
  readonly emptyRowConstructor: () => Nullable<T>;
  rowsToDeleteIds?: string[];
};

const handleRowEditStart = (
  params: GridRowParams,
  event: MuiEvent<React.SyntheticEvent>,
) => {
  event.defaultMuiPrevented = true;
};
const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
  event.defaultMuiPrevented = true;
};

export const CrudDataTable = <T extends GridValidRowModel>(
  {
    columns,
    data = [],
    onDeleteActionClick,
    onUpdateActionClick,
    onCreateActionClick,
    emptyRowConstructor,
    rowsToDeleteIds
  }: CrudDataTableProps<T>
): ReactElement => {
  const [rows, setRows] = React.useState<T[]>([]);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
  const handleProcessRowUpdateError = React.useCallback((error: Error) => {
    console.log(error);
    
  }, []);
  
  React.useEffect(() => {
      setRows(data);
    },
    [data]);

  const handleAddRowClick = React.useCallback(
    () => {
      const id = generateNewRowId();
      setRows((oldRows) => [...oldRows, {...emptyRowConstructor(), id} as T]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: {
          mode: GridRowModes.Edit,
        },
      }));
    },
    [emptyRowConstructor],
  );

  const handleEditClick = React.useCallback(
    (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: {mode: GridRowModes.Edit},
    });
  },
    [rowModesModel],
  );

  const handleSaveClick = React.useCallback(
    (row: T) => () => { 
    setRowModesModel({
      ...rowModesModel,
      [row.id]: {mode: GridRowModes.View},
    });
  },
    [rowModesModel],
    );

  const handleCancelClick = React.useCallback(
    (row: T) => () => {
    setRowModesModel({
      ...rowModesModel,
      [row.id]: {
        mode: GridRowModes.View,
        ignoreModifications: true,
      },
    });
    if (isNewRow(row)) {
      setRows(rows => rows.filter(r => r.id !== row.id));
    }
  },
  [rowModesModel],
  );

  const processRowUpdate = React.useCallback(
    (row: T) => {
      if (isNewRow(row)) {
        onCreateActionClick({...row, id: null});
      } else {
        onUpdateActionClick(row);
      }      
    return row;
  },
  [onUpdateActionClick, onCreateActionClick],
  );

  const actionsColumn: GridEnrichedColDef<T> = {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    flex: 1,
    cellClassName: 'actions',
    getActions: ({id, row}:  GridRowParams) => {
      const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
      if (isInEditMode) {
        return [
          <GridActionsCellItem
            icon={<SaveIcon />}
            label="Save"
            onClick={handleSaveClick(row)}
          />,
          <GridActionsCellItem
            icon={<CancelIcon />}
            label="Cancel"
            className="textPrimary"
            onClick={handleCancelClick(row)}
            color="inherit"
          />,
        ];
      }
      return [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          color="inherit"
          onClick={handleEditClick(id)}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => onDeleteActionClick(row)}
          color="inherit"
        />,
      ];
    },
  };
  return (
    <StyledBox sx={{ height: 530 }}>
    <DataGrid
      rows={rows}
      editMode="row"
      columns={[...columns, actionsColumn]}
      isCellEditable={(params) => (params.field  !== 'changeStatus' && params.field  !== 'modifiedTime')}
      hideFooter={true}
      rowModesModel={rowModesModel}
      getRowClassName={(params) => rowsToDeleteIds?.includes(params.row.id) ? 'red-row' : ''}
      components={{Toolbar: CrudDataTableEditToolbar}}
      componentsProps={{
        toolbar: {onCreateActionClick: handleAddRowClick}
      }}
      onRowEditStart={handleRowEditStart}
      onRowEditStop={handleRowEditStop}
      processRowUpdate={processRowUpdate}
      experimentalFeatures={{newEditingApi: true}}
      onProcessRowUpdateError={handleProcessRowUpdateError}
    />
    </StyledBox>
  );
};

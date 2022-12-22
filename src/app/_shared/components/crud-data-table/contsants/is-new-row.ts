import {GridValidRowModel} from '@mui/x-data-grid/models/gridRows';

import {NEW_ROW_ID_PREFIX} from './new-row-id-prefix';

export const isNewRow = <T extends GridValidRowModel>(row: T): boolean => row?.id?.startsWith(NEW_ROW_ID_PREFIX);

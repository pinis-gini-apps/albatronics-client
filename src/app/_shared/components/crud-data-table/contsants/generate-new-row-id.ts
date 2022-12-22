import {NEW_ROW_ID_PREFIX} from './new-row-id-prefix';

export const generateNewRowId = (): string => `${NEW_ROW_ID_PREFIX}-${Math.floor(Math.random() * 1000_000_000_000)}`;

import {SelectionPartItem} from '../../_shared/components/selection-part/models/selection-part-item';

export const SYSTEM_SELECTION_PART_ITEMS: ReadonlyArray<SelectionPartItem> = [
  { label: 'Status', route: './status', },
  { label: 'General', route: './general', },
  { label: 'Cellular', route: './cellular', },
  { label: 'Power', route: './power', },
  { label: 'Shutdown / reboot', route: './shutdown-reboot', },
  { label: 'All', route: './all', }
];

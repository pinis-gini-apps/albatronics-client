import {SelectionPartItem} from '../../_shared/components/selection-part/models/selection-part-item';

export const MAIN_SELECTION_PART_ITEMS: ReadonlyArray<SelectionPartItem> = [
  { label: 'System', route: './system', },
  { label: 'Network', route: './network', },
  { label: 'eNodeB', route: './eNodeB', },
  { label: 'Serial', route: './serial', },
  { label: 'Backhaul', route: './backhaul', },
  { label: 'GPS', route: './gps', },
  { label: 'Diagnostic', route: './diagnostic', },
  { label: 'Logs', route: './logs', },
  { label: 'Privileges', route: './privileges', },
];

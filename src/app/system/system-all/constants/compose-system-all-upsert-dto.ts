import { SystemAllInformation } from '../models/system-all-information';

const coerceToNullableNumber = (value: string | number): number | null => (
  Number.isFinite(parseFloat(value as string))
    ? Number(value)
    : null
);

export const composeSystemAllUpsertDto = (
  {
    id,
    name,
    value,
    dataType,
    typeId,
    changeStatus,
    visible,
    tooltip,
    restWarm,
    modifiedTime,
  }: SystemAllInformation
): SystemAllInformation => ({
  id,
  name,
  value,
  dataType,
  typeId: coerceToNullableNumber(typeId as number) as number,
  changeStatus,
  visible,
  tooltip,
  restWarm: coerceToNullableNumber(restWarm as number) as number,
  modifiedTime,
});

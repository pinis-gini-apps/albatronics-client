export interface SystemAllInformation {
  readonly id: string;
  readonly name: string;
  readonly value: string;
  readonly dataType: string;
  readonly typeId: number;
  readonly changeStatus: number;
  readonly visible: boolean;
  readonly tooltip: string;
  readonly restWarm: number;
  readonly modifiedTime: string;
}

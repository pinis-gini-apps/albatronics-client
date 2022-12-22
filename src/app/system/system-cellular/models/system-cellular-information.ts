export interface SystemCellularInformation {
  readonly plmn: string;
  readonly apn: string;
  readonly band: string;
  readonly bandWidth: number;
  readonly cellId: number;
  readonly tac: number;
  readonly pdnIpAddress: string;
  readonly dnsIpAddress: string;
  readonly ntpIpAddress: string;
}

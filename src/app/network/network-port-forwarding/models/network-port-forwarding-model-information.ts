export interface NetworkPortForwardingInformation {
  id: string;
  name: string | null;
  sourceIpAddress: string;
  protocol: string | null;
  externalPort: number | null;
  internalPort: number | null;
  status: string;
}

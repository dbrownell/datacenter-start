import { Metric } from './Metric';
export interface Node {
  name: string;
  cpu: Metric;
  mem: Metric;
}

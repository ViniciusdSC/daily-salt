export interface HeadCell<Data> {
  id: keyof Data;
  disablePadding: boolean;
  label: string;
  numeric: boolean;
}

export interface DataCell {
  [key: string]: string;
}

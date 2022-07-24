export interface SpentInterface {
  id: string;
  spentTypeId: string;
  mode: 'daily' | 'weekly' | 'monthly' | 'repeatable';
  name: string;
  value: number;
  createdAt: Date;
}

export type SpentTableTabType = 'daily' | 'weekly' | 'monthly' | 'repeatable' | 'total';

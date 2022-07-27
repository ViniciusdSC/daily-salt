export interface SpentInterface {
  id: string;
  spentTypeId: string;
  mode: 'daily' | 'weekly' | 'monthly' | 'repeatable';
  name: string;
  value: number;
  createdAt: Date;
}

export interface AccumulatedBalance {
  daily: number;
  weekly: number;
  monthly: number;
}

export type SpentTableTabType = 'daily' | 'weekly' | 'monthly' | 'repeatable' | 'total';

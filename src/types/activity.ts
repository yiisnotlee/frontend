export interface Activity {
  id: number;
  startDate: string;
  endDate: string | null;
  ongoing: boolean;
  description: string;
}

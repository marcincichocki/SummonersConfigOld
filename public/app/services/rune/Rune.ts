export interface Rune {
  name: string;
  description: string;
  tier: number;
  image: string;
  primary: string;
  type: string;
  available: boolean;
  ip: number;
  tags: string[];
  stats: Object;
  position?: number;
}
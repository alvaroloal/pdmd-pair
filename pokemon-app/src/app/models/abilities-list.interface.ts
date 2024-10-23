export interface Ability {
    name: string;
    url: string;
    imageUrl: string;
  }
  
  export interface AbilityResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Ability[];
  }
  
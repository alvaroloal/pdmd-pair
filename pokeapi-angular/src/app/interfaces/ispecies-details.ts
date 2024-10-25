export interface Species {
  id: number;
  name: string;
  color: { name: string };
  habitat: { name: string };
  flavor_text_entries: Array<{
    flavor_text: string;
    language: { name: string };
    version: { name: string };
  }>;
}

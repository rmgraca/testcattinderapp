export interface profileType {
  id: string;
  name: string;
  country: string;
  url: string;
  rank: string;
  breeds: Array<breedType>;
}

interface breedType{
  name: string;
  origin: string;
  dog_friendly: number;
}


export interface ICharacterProps {
  name: string;
  species: string;
  image: string;
  status: string;
  origin: LocationObject;
  location: LocationObject;
  gender: string;
  episode: Array<any>;
}

export interface ICharacterModalProps {
  episodes: Array<EpisodeResponse>;
  closeModal: (e:any)=>void;
}

export enum GenderOptions {
  MALE = "Male",
  FEMALE = "Female"
}

export enum Status {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown"
}

interface LocationObject {
  name: string;
  url: string;
  created: string | null
  dimension: string | null
  id: string | null
  residents: string[] | null
  type: string | null
}


export interface RickMortyResponse {
  created: string;
  episode: string[];
  gender: GenderOptions;
  id: number;
  image: string;
  location: LocationObject
  name: string
  origin: LocationObject
  species: string;
  status: Status
  type: string
  url: string
}


export interface EpisodeData {
  air_date: string;
  characters: string;
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}

export interface EpisodeResponse {
  data: EpisodeData;
  [key: string]: any;
}
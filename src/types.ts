interface IVideo {
  id: number;
  title: string;
  image: string;
  season: string;
  series: number;
  description: string;
}

interface ICurrentVideo {
  id?: number;
  title?: string;
  image?: string;
  season?: string;
  series?: number;
  description?: string;
}

interface IFilteredVideo {
  id?: number;
  title?: string;
  image?: string;
  season?: string;
  series?: number;
  description?: string;
}

export interface IInitialStateVideoData {
  video: IVideo[];
  currentSeason: IVideo[];
  currentVideo: ICurrentVideo;
}

export interface IIinitialStateVideo {
  isActive: boolean;
  filteredVideo: IFilteredVideo[];
  data: IInitialStateVideoData;
}

interface ICharacter {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  age: number | string;
  placeOfOrigin: string;
  description: string;
}

interface ICurrentCharacter {
  id?: number;
  name?: string;
  image?: string;
  species?: string;
  status?: string;
  gender?: string;
  age?: number | string;
  placeOfOrigin?: string;
  description?: string;
}

interface IFilteredCharacter {
  id?: number;
  name?: string;
  image?: string;
  species?: string;
  status?: string;
  gender?: string;
  age?: number | string;
  placeOfOrigin?: string;
  description?: string;
}

export interface IInitialStateCharacterData {
  characters: ICharacter[];
  currentCharacter: ICurrentCharacter;
}

export interface IInitialStateCharacter {
  isActive: boolean;
  filteredCharacters: IFilteredCharacter[];
  data: IInitialStateCharacterData;
}

interface ILocation {
  id: number;
  name: string;
  image: string;
  dimension?: string;
  type: string;
  description: string;
}

interface ICurrentLocation {
  id?: number;
  name?: string;
  image?: string;
  dimension?: string;
  type?: string;
  description?: string;
}

interface IFilteredLocation {
  id?: number;
  name?: string;
  image?: string;
  dimension?: string;
  type?: string;
  description?: string;
}

export interface IInitialStateLocationData {
  locations: ILocation[];
  currentLocation: ICurrentLocation;
}

export interface IInitialStateLocation {
  isActive: boolean;
  filteredLocations: IFilteredLocation[];
  data: IInitialStateLocationData;
}

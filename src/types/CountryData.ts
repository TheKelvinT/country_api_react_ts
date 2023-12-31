export interface CountryData {
    name: {
      common: string;
      official: string;
      nativeName: {
        [key: string]: {
          official: string;
          common: string;
        };
      };
    };
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: {
      [code: string]: {
        name: string;
        symbol: string;
      };
    };
    borders: string[],
    idd: {
      root: string;
      suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: {
      [code: string]: string;
    };
    translations: {
      [code: string]: {
        official: string;
        common: string;
      };
    };
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: {
      [code: string]: {
        f: string;
        m: string;
      };
    };
    flag: string;
    maps: {
      googleMaps: string;
      openStreetMaps: string;
    };
    population: number;
    fifa: string;
    car: {
      signs: string[];
      side: string;
    };
    timezones: string[];
    continents: string[];
    flags: {
      png: string;
      svg: string;
    };
    coatOfArms: any; 
    startOfWeek: string;
    capitalInfo: {
      latlng: number[];
    };
  }
  
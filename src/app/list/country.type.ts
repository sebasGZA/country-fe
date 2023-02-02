export type Country = {
  name: CountryName;
  region: String;
  population: Number;
  languages: String[];
  flags: Flags;
};

type CountryName = {
  common: string;
  official: string;
};

type Flags = {
  png: string;
  svg: string;
};

declare type Life = 0 | 1;

declare type LifePattern = {
  title: string;
  life: Life[][];
};

declare module '*.json';

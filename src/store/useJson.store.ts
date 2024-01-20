import {create} from 'zustand';

interface IJsonStore {
  json: any;
  setJsonData: (json:any) => void;
}

export const useJsonStore = create<IJsonStore>((set) => ({
  json: {},
  setJsonData: (json) => set({json}),
}));
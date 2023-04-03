import {IPageBlockData} from './interface';

export const state = {
  pageBlocks: [],
  rootDir: '',
};

export const setPageBlocks = (value: IPageBlockData[]) => {
  state.pageBlocks = value || [];
};

export const getPageBlocks = () => {
  return state.pageBlocks || [];
};

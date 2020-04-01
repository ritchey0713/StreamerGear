import { createSelector } from "reselect"

const selectDirectory = state => state.directory

export const selectDirectorySections = createSelector(
  // what set of state to grab from 
  [selectDirectory],

  //what data you want it to return
  directory => directory.sections
)
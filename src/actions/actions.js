//

//--The plan--//
//Add the add to total items
//Remove items from the total
//Display what is added in added features.
//update the amount in x2 totals

export const ADD_TO_TOTAL = "ADD_TO_TOTAL";
export const REMOVE_FROM_TOTAL = "REMOVE_FROM_TOTAL";

const addToTotal = (totalId) => {
  return { type: ADD_TO_TOTAL, payload: totalId };
};

const removeItem = (removeTotal) => {
  return { type: REMOVE_FROM_TOTAL, payload: removeTotal };
};

const actions = {
  addToTotal,
  removeItem,
};
export default actions;

export const selectSpot = ({ spots, reviews }, id) => {
   const spot = spots[id] || {};
   return spot
}

export const asArray = ({ spots }) => Object.keys(spots).map(key => spots[key]);

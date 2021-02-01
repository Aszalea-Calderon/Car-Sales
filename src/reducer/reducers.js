import { ADD_TO_TOTAL, REMOVE_FROM_TOTAL } from "../actions/actions";

export const intialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

//*this sets state for the first time thanks to initialState default.
//*no action is passed so the switch statement handles using default:

const reducer = (state = intialState, action) => {
  console.log("red", state, action);
  switch (
    action.type //The type coming in from the actions folder, this is the value coming in from the variable
  ) {
    case ADD_TO_TOTAL:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
      };

    case REMOVE_FROM_TOTAL:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: [
            ...state.car.features.filter(
              (item) => item.id !== action.payload.id
            ),
          ],
        },
      };

    default:
      return { ...state };
  }
};

export default reducer;

import {Component, Types} from "/web_modules/ecsy.js";
export class Colliding extends Component {
}
Colliding.schema = {
  collidingWith: {
    default: [],
    type: Types.Array
  },
  collidingFrame: {
    default: 0,
    type: Types.Number
  }
};

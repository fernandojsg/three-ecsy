import {Component, Types} from "/web_modules/ecsy.js";
export class Geometry extends Component {
}
Geometry.schema = {
  primitive: {
    default: "box",
    type: Types.String
  },
  width: {
    default: 0,
    type: Types.Number
  },
  height: {
    default: 0,
    type: Types.Number
  },
  depth: {
    default: 0,
    type: Types.Number
  }
};

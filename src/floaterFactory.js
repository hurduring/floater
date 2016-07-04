import stateUtils from "./states"
import {sizeUtils, updateUtils} from "./utils"
import {mainHandler} from './handlers'

let proto = {
  ...sizeUtils,
  ...updateUtils,
  ...stateUtils,
  init: function () {
    $(window).bind("scroll", this.__handler);
    return this;
  },
  destroy: function () {
    $(window).unbind("scroll", this.__handler);
    return this;
  }
};

let floaterFactory = function (el, container) {
  let obj = Object.assign(Object.create(proto), {
    el: el,
    container: container
  });

  proto.__handler = mainHandler.bind(obj);

  return obj;
};

export default floaterFactory;

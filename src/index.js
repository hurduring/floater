import createInstance from "./floaterFactory"

(function (window) {
  window.floater = createInstance;
}(window))

export default createInstance;

export let mainHandler = function () {
  if (this.isFit()) {
    this.updateData();
    this.checkState()
  } else {
    this.changeTo('default')
  }
};

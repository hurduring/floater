export const sizeUtils = {
  elHeight: function () {
    return this.el.outerHeight()
  },
  elWidth: function (){
    return this.el.outerWidth()
  },
  containerHeight: function(){
    return this.container.outerHeight()
  },
  elOffset: function(){
    return this.el.offset()
  },
  containerOffset: function () {
    return this.container.offset()
  },
  isFit: function () {
    return this.elHeight() < this.containerHeight() - 10;
  }
};

export const updateUtils = {
  updateData: function () {
    this.updateScroll();
    this.updateBottomThreshold();
  },
  updateScroll: function () {
    this.currentScroll = $(window).scrollTop();
  },
  updateBottomThreshold: function () {
    this.bottomThreshold = this.containerOffset().top + this.containerHeight() - this.elHeight() - 30;
  }
};

const states = {
  fixed: function () {
    this.left = this.elOffset().left;
    this.width = this.elWidth();
    this.el.css({
      position: 'fixed',
      top: 20,
      left: this.left,
      width: this.width,
      bottom: "auto"
    })
  },
  docked: function () {
    this.left = this.elOffset().left - this.containerOffset().left;
    this.el.css({
      position: 'absolute',
      width: this.width,
      left: this.left,
      bottom: "0",
      top: "auto"
    })
  },
  default: function () {
    this.el.css({
      position: 'static',
      width: this.width
    })
  }
};

const checkers = {
  inFixed: function () {
    return this.currentScroll > this.containerOffset().top && this.currentScroll < this.bottomThreshold;
  },
  inDefault: function () {
    return this.currentScroll <= this.containerOffset().top;
  },
  inDocked: function () {
    return this.currentScroll >= this.bottomThreshold;
  }
};

const actions = {
  changeTo: function (state) {
    states[state].call(this);
  },
  checkState: function () {
    if (this.inFixed()) {
      this.changeTo('fixed')
    } else if (this.inDefault()) {
      this.changeTo('default')
    } else if (this.inDocked()) {
      this.changeTo('docked')
    }
  }
};

export default {
  ...checkers,
  ...actions
}

Array.prototype.forEachRight = function (callback) {
  for (var i = this.length - 1; i >= 0; i--) {
    callback(this[i], i, this);
  }
}
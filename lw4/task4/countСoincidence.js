String.prototype.countCoincidence = function(str) {
  var regexp = new RegExp(str, 'g');
  var regexpObj;
  var count = 0;
  while((regexpObj = regexp.exec(this.toLowerCase())) !== null) {
    if (regexpObj.index === regexp.lastIndex) {
      regexp.lastIndex++;
    }
    count++;
  }
  return count;
}
const treeMaker = function (value) {
  this.value = value;
  this.children = [];
};

treeMaker.prototype.addChild = function (value) {
  if (!this.value) {
    this.value = value;
  }
  this.children.push(new treeMaker(value));
};

treeMaker.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(value)) {
        return true;
      }
    }
  }
  return false;

  // for (var i = 0; i < this.children.length; i++) {
  //   if (this.children[i].contains(target)) {
  //     return true;
  //   }
  // }
  // return false;
};

var tree = new treeMaker();
tree.addChild(1);
tree.addChild(2);
console.log(tree);
console.log(tree.contains(2));
console.log(tree.contains(9)); // yields 'true'

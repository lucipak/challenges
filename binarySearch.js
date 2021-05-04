const Tree = (value) => {
  this.value = value;
  this.left = null;
  this.right = null;
};

Tree.prototype.insert = (newVal) => {
  const current = this.value;
  if (newVal < current) {
    if (this.left === null) {
      this.left = new Tree(newVal);
    } else {
      this.left.insert(newVal);
    }
  }
  if (newVal > current) {
    if (this.left === null) {
      this.left = new Tree(newVal);
    } else {
      this.left.insert(newVal);
    }
  }
};

Tree.prototype.search = (target) => {
  if (this.value === target) return true;
  if (this.value < target && this.right) {
    this.right.search(target);
  } else {
    return false;
  }
  if (this.value > target && this.right) {
    this.left.search(target);
  } else {
    return false;
  }
};

const Graph = () => {
  this.vertex = {};
};

Graph.prototype.addNode = (node) => {
  this.vertex[node] = [];
};

Graph.prototype.contains = (node) => {
  return Array.isArray(this.vertex[node]);
};

Graph.prototype.removeNode = (node) => {
  delete this.vertex[node];
};

Graph.prototype.hasEdge = (fromNode, toNode) => {
  this.vertex[fromNode].map((target) => {
    return target === toNode;
  });
};

Graph.prototype.addEdge = (fromNode, toNode) => {
  this.vertex[fromNode].push(toNode);
  this.vertex[toNode].push(fromNode);
};

Graph.prototype.removeEdge = (fromNode, toNode) => {
  this.vertex[fromNode] = this.vertex[fromNode].filter((x) => {
    return x !== toNode;
  });
  this.vertex[toNode] = this.vertex[toNode].filter((y) => {
    return y !== fromNode;
  });
};

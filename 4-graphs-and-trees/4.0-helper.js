var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(value) {
  if (this.nodes[value] !== undefined) {
    return "-- Node already exists --";
  }

  this.nodes[value] = {};
};

Graph.prototype.removeNode = function(node) {
  if (this.nodes[node] === undefined) {
    return "-- Node doesn't exist --";
  }
  // delete node itself
  delete this.nodes[node];

  // delete edges to it
  for (let each in this.nodes) {
    if (this.nodes[each][node] !== undefined) {
      delete this.nodes[each][node];
    }
  }
};

Graph.prototype.addEdge = function(from, to) {
  if (this.nodes[from] === undefined) {
    return "-- Node doesn't exist --";
  }
  if (this.nodes[from][to]) {
    return "-- Edge already exists --";
  }

  this.nodes[from][to] = true;
};

Graph.prototype.removeEdge = function(from, to) {
  if (this.nodes[from] === undefined || this.nodes[from][to] === undefined) {
    return "-- Edge doesn't exist --";
  }

  delete this.nodes[from][to];
};

module.exports = Graph;

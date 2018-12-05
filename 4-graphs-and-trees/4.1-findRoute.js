const Graph = require("./4.0-helper");
const Queue = require("../3-stacks-and-queues/3.0-helper");

const isRouteBetween = (node1, node2, graph) => {
  // n2 can be outside of graph and there can be an edge from n1 to get there I guess
  //   if (!g.nodes[node1] || !g.nodes[node2]) {
  //     return false;
  //   }

  const fillQ = (node, q) => {
    for (let edge in graph.nodes[node]) {
      q.add(edge);
    }
  };

  const searchQfor = (q, searched) => {
    while (!q.isEmpty()) {
      const nextNode = q.remove();
      // helper to see actual position of search
      //   console.log(nextNode + " vs " + searched);

      if (nextNode === searched) {
        return true;
      }

      if (visited[nextNode] === undefined) {
        visited[nextNode] = true;

        if (graph.nodes[nextNode] !== undefined) {
          for (let edge in graph.nodes[nextNode]) {
            q.add(edge);
          }
        }
      }
    }
  };

  const visited = {};
  const q1 = new Queue.Queue();
  const q2 = new Queue.Queue();

  fillQ(node1, q1);
  fillQ(node2, q2);

  if (searchQfor(q1, node2) || searchQfor(q2, node1)) {
    return true;
  }

  return false;
};

const g = new Graph();

g.addNode("a");
g.addNode("b");
g.addNode("c");
g.addNode("d");
g.addNode("e");
g.addNode("f");

g.addEdge("a", "e");
g.addEdge("a", "d");
g.addEdge("a", "f");
g.addEdge("c", "b");
g.addEdge("d", "a");
g.addEdge("d", "e");
g.addEdge("e", "x");
g.addEdge("f", "b");

console.log(g);

console.log(isRouteBetween("a", "x", g) + " true");
console.log(isRouteBetween("d", "b", g) + " true");
console.log(isRouteBetween("c", "a", g) + " false");
console.log(isRouteBetween("f", "x", g) + " false");
console.log(isRouteBetween("x", "b", g) + " false");

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];
//graph is a collection on points with lines between them. The graph
// will be the world that our robot moves through

/**
 * given an array of edges, buildGraph creates a map object
 * that , for each node, stores an array of connected nodes.
 * @param {*} edges
 * @returns
 */
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (from in graph) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  }
  //bidreictional graph
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);

//building the village's state down to minimal set of values that define it.
// robot's current location and the collection of undelivered parcels, each of which
// has a current location and a destination address.

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  //checks whether there is a road going from the current place to the destination, and if not, it returns
  // the old state since this is not a valid move.
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState("Post Office", [
  { place: "Post Office", address: "Alice's House" },
]);

let next = first.move("Alice's House");

console.log(next.place);
console.log(next.parcels);
console.log(first.place);

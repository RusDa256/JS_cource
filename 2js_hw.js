class Graph {
  constructor() {
    this.edges = []
    this.vertex = []
  }

  addEdge(ver1, ver2, w) {
    let edge = {   
      ver1: ver1, 
      ver2: ver2,
      w: w        
    };
    this.edges.push(edge)
    if(!this.vertex.includes(ver1)) {
      this.vertex.push(ver1)
    }
    if(!this.vertex.includes(ver2)) {
      this.vertex.push(ver2)
    }
  }

  delEdge(ver1, ver2=null) {
    let index
    for(index = 0; index < this.edges.length; ++index) {
      if(this.edges[index].ver1 == ver1) {
        if(ver2 && this.edges[index].ver2 == ver2) {
          this.edges.splice(index, 1)
          return true
        } else if(!ver2) {
          this.edges.splice(index, 1)
          --index
        }
      } else if(this.edges[index].ver1 == ver2) {
        if(this.edges[index].ver2 == ver1) {
          this.edges.splice(index, 1)
          return true
        }
      }
    }
    return false
  }

  replaceEdge(ver1, ver2, w) {
    let index
    for(index = 0; index < this.edges.length; ++index) {
      if(this.edges[index].ver1 == ver1) {
        if(this.edges[index].ver2 == ver2) {
          this.edges[index]['w'] = w
          return true
        }
      } else if(this.edges[index].ver1 == ver2) {
        if(this.edges[index].ver2 == ver1) {
          this.edges[index]['w'] = w
          return true
        }
      }
    }
    return false
  }

  getVertexCount() {
    return this.vertex.length
  }

  delVertex(ver) {
    let index
    for(index = 0; index < this.vertex.length; ++index) {
      if(this.vertex[index] == ver) {
        this.vertex.splice(index, 1)
        break
      }
    }
    this.delEdge(ver)
  }

  print() {
    for(let index = 0; index < this.edges.length; ++index) {
      console.log(this.edges[index].ver1 + "-" + this.edges[index].ver2 + ": " + this.edges[index].w)
    }
  }
}

g = new Graph()

g.addEdge(1,2, 10)
g.addEdge(1,3, 12)
g.addEdge(1,5, 52)
g.addEdge(3,5, 13)
g.addEdge(5,4, 14)
g.addEdge(1,4, 114)
g.addEdge(2,5, 4)
console.log("Количество вершин = " + g.getVertexCount())

g.print()
console.log("---------------")

g.delEdge(1,3)
g.delEdge(5,3)

g.print()
console.log("---------------")

g.replaceEdge(1,2,14)
g.replaceEdge(4,5,100)

g.print()
console.log("---------------")

g.delVertex(1)
console.log("Количество вершин = " + g.getVertexCount())

g.print()
console.log("---------------")
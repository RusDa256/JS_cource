'use strict'
type Edge = {
  ver1: number,
  ver2: number,
  w: number
};


class Graph {
  private _edges: Edge[];
  private _vertex: number[];

  constructor() {
    this._edges = []
    this._vertex = []
  }

  addEdge(ver1: number, ver2: number, w: number): void {
    let edge: Edge = {   
      ver1: ver1, 
      ver2: ver2,
      w: w        
    };
    this._edges.push(edge)
    if(!this._vertex.includes(ver1)) {
      this._vertex.push(ver1)
    }
    if(!this._vertex.includes(ver2)) {
      this._vertex.push(ver2)
    }
  }

  delEdge(ver1: number, ver2?: number): boolean {
    let index: number
    for(index = 0; index < this._edges.length; ++index) {
      if(this._edges[index].ver1 == ver1) {
        if(ver2 == undefined && this._edges[index].ver2 == ver2) {
          this._edges.splice(index, 1)
          return true
        } else if(!ver2) {
          this._edges.splice(index, 1)
          --index
        }
      } else if(this._edges[index].ver1 == ver2) {
        if(this._edges[index].ver2 == ver1) {
          this._edges.splice(index, 1)
          return true
        }
      }
    }
    return false
  }

  replaceEdge(ver1: number, ver2: number, w: number): boolean {
    let index: number
    for(index = 0; index < this._edges.length; ++index) {
      if(this._edges[index].ver1 == ver1) {
        if(this._edges[index].ver2 == ver2) {
          this._edges[index]['w'] = w
          return true
        }
      } else if(this._edges[index].ver1 == ver2) {
        if(this._edges[index].ver2 == ver1) {
          this._edges[index]['w'] = w
          return true
        }
      }
    }
    return false
  }

  getVertexCount(): number {
    return this._vertex.length
  }

  delVertex(ver: number): void {
    let index: number
    for(index = 0; index < this._vertex.length; ++index) {
      if(this._vertex[index] == ver) {
        this._vertex.splice(index, 1)
        break
      }
    }
    this.delEdge(ver)
  }

  print(): void {
    for(let index = 0; index < this._edges.length; ++index) {
      console.log(this._edges[index].ver1 + "-" + this._edges[index].ver2 + ": " + this._edges[index].w)
    }
  }
}

const g = new Graph()

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
  
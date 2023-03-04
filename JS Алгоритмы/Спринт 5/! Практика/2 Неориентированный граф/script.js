class Graph {
    constructor() {
        this.data = {};
    }
		
		// ��������� �������.
		// ���� ������� ��� ����������, ������ �� ������.
    addVertex(vertex) {
        ...
   }
		
		// ������� �������.
    removeVertex(vertex) {
        ...
   }
		
		// ��������� ����� ����� ����� ���������.
    addEdge(vertex1, vertex2) {
        ...
    }
		
		// ������� ����� ����� ����� ���������.
    removeEdge(vertex1, vertex2) {
        ...
    }
}

// ������ ��������������
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');

console.log(graph.data);
/*
{
  A: ['B', 'C'],
  B: ['A'],
  C: ['A'],
  D: []
}
 */
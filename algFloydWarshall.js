
function FloydWarshall(W) {
	let n = W.length;

	
  let dist = []; // -> [][]
  let i, j, k;

  dist = W;

	for (k = 0; k < n; k++) {
		for (j = 0; j < n; j++) {
			for (i = 0; i < n; i++) {
				if (dist[i][k] + dist[k][j] < dist[i][j]) {
					dist[i][j] = dist[i][k] + dist[k][j];
				}
			}
		}
	}

	printMatrix(dist)
}


function printMatrix(dist) {
	let i, j;
	let n = dist.length;
	
	console.log("Итоговая матрица: ");
	for (i = 0; i < n; ++i) {
		for (j = 0; j < n; ++j) {
			if (dist[i][j] == I)
				rocess.stdout.write("I   ");
			else
				process.stdout.write(dist[i][j] + "  ");
		}
		console.log();
	}
}	

var I = 99999999;

let graph2 = [ 
	[0, 3, 8, I, -4],
	[I, 0, I, 1, 7], 
	[I, 4, 0, I, I ], 
	[2, I, -5, 0, I ],
	[I, I, I, 6, 0]];

FloydWarshall(graph2);
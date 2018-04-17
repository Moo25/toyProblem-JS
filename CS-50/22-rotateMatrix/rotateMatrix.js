/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Important note:
 *   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
 *   the number of *rows* and n is the number of *columns*. So an [i][j] address in a matrix
 *   will be i places down, and j places over. This usually matches the way arrays are
 *   addressed in code, but keep in mind that it differs from use in geometry and computer
 *   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */
// rectangular matrices,
const rotateMatrix = (matrix, direction = 1) => {
    let
        M = matrix.length,
        N = matrix[0].length,
        result = []

    const clockWise = (M, N, result) => {
        for (let i = 0; i < N; i++) {
            result.push([])
            for (let j = M; j > 0; j--) {
                result[i].push(matrix[j - 1][i])
            }
        }
        return result
    }

    const counterClockWise = (M, N, result) => {
        for (let i = 0; i < N; i++) {
            result.push([])
            for (let j = 0; j < M; j++) {
                let yAxis = N - i - 1
                result[i].push(matrix[j][yAxis])
            }
        }
        return result
    }

    if (direction === 1) return clockWise(M, N, result)
    else if (direction === -1) return counterClockWise(M, N, result)
    else throw new Error('wrong direction')
}

var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    ['A', 'B', 'C', 'D']
]

console.log(rotateMatrix(matrix))
console.log(rotateMatrix(matrix, -1))
console.log(rotateMatrix(matrix, 2))
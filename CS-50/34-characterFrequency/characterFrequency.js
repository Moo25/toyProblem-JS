/*
 *  Write a function that takes as its input a string and returns an array of arrays
 *  as shown below sorted in descending order by frequency and then by ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


const characterFrequency = (string) => {
  let result = []
  for (var i = 0; i < string.length; i++) {
    var check = result.findIndex((element) => {
      return element[0] === string[i]
    })

    check === -1 ?
      result.push([string[i], 1]) :
      result[check][1]++
  }

  return result.sort((a, b) => {
    if (a[1] > b[1]) return -1
    if (a[1] < b[1]) return 1
    if (a[1] === b[1]) {
      if (a[0].charCodeAt(0) < b[0].charCodeAt(0)) return -1
      else if (a[0].charCodeAt(0) > b[0].charCodeAt(0)) return 1
    }
  })
}

let a = characterFrequency('mississippi')
// *  [
//   *    ['i', 4],
//   *    ['s', 4],
//   *    ['p', 2],
//   *    ['m', 1]
//   *  ]
let b = characterFrequency('miaaiaaippi')
// *  [
//   *    ['a', 4],
//   *    ['i', 4],
//   *    ['p', 2],
//   *    ['m', 1]
//   *  ]
let c = characterFrequency('mmmaaaiiibbb')
// *  [
//   *    ['a', 3],
//   *    ['b', 3],
//   *    ['i', 3],
//   *    ['m', 3]
//   *  ]
console.log(a)
console.log(b)
console.log(c)
function getBit(){}

// it turns the given bitPosition to 1 (if it isn't),
// without affecting any other bits
function setBit(number, bitPosition){
  return number | (1 << bitPosition)
}
// Process example:
// setBit(12, 1){
//  0001 << 1 = 0010
//  12 | 0010
//  1100 | 0010 = 1110
//}
// example:
// console.log(setBit(12,2))
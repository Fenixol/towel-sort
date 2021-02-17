
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let matrix_new = [];

  if(!matrix) return matrix_new;
  if(matrix.length == 0) return matrix_new;
  if(Array.isArray(matrix) == false) return matrix_new;

    matrix.forEach(function(item, index) {
      if((index+1) %2 !== 0){
        item.sort((a, b) => a > b ? 1 : -1)
        item.forEach(function(elem1){
          matrix_new.push(elem1)
        })  
      }else{
        item.sort((a, b) => a < b ? 1 : -1)
        item.forEach(function(elem2){
          matrix_new.push(elem2)
        })
      }
    });
  return matrix_new
}

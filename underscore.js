var _ = {
  average: function(array){
    var total=0;
    for(var i=0;i<array.length;i++)
      total+=array[i];
    return total/array.length;
  }
  ,
  contains: function(array, num){
    var contains=false;
    for(var i=0;i<array.length;i++)
      if(array[i]===num)
        contains=true;
    return contains;
  }
  ,
  first: function(array){
    return array[0];
  }
  ,
  last: function(array){
    return array[array.length-1];
  }
  ,
  max: function(array){
    var max=array[0];
    for(var i=1;i<array.length;i++)
      if(array[i]>max)
        max=array[i];
    return max;
  }
  ,
  min: function(array){
    var min = array[0];
    for(var i=1;i<array.length;i++)
      if(array[i]<min)
        min=array[i];
    return min;
  }
  ,
  shuffle: function(array){
    var arrayCopy=array.slice();
    var newArray=[];
    while(arrayCopy.length>0){
      var index = Math.floor(Math.random()*arrayCopy.length);
      newArray.push(arrayCopy.splice(index,1)[0]);
    }
    return newArray;
  }
  ,
  sample: function(array, num){
    var arrayCopy = array.slice();
    if(num===undefined) {
      num = 1;
    }
    var randArray = [];
    for(var i=0;i<num;i++){
      var index = Math.floor(Math.random()*arrayCopy.length);
      randArray.push(arrayCopy.splice(index,1)[0]);
    }
    return randArray;
  }
  ,
  difference: function(array1, array2){
    var newArray = [];
    for (var i=0; i<array1.length; i++){
      if(!_.contains(array2,array1[i])){
        newArray.push(array1[i]);
      }
    }
    for (var i=0; i<array2.length; i++){
      if(!_.contains(array1,array2[i])&&!_.contains(newArray,array2[i])){
        newArray.push(array2[i]);
      }
    }
    return newArray;
  }
  ,
  indexOf: function(array, num){
    var index = -1;
    for(var i=0;i<array.length;i++){
      if(array[i]===num){
        index = i;
        break;
      }
    }
    return index;
  }
  ,
  pluck: function(objectArray, property){
    var array = [];
    for (var i=0;i<objectArray.length;i++){
      for (var prop in objectArray[i]){
        var currentObject = objectArray[i];
        if(prop===property){
          array.push(currentObject[prop]);
        }
      }
    }
    return array;
  }
  ,
  each: function(array, func){
    for (var name in array){
      func(name);
    }
  }
  ,
  compact: function(array){
    var temp = array.slice();
    for(var i=0;i<temp.length;i++){
      if(temp[i]===undefined){
        temp.splice(i,1);
        i--;
      }
    }
    return temp;
  }
  ,
  map: function(array, func){
    var newArray = [];
    for (var i=0;i<array.length;i++){
      newArray.push(func(array[i]));
    }
    return newArray;
  }
  ,
  filter: function(array, func){
    var newArray = [];
    for (var i=0; i<array.length; i++){
      if(func(array[i])){
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
}


//TESTING
var myArray = [1,2,3,4,5,6,7,8];
console.log(_.contains(myArray, 4));
console.log(_.contains(myArray,100));
console.log(_.shuffle(myArray));
console.log(myArray);
console.log(_.sample(myArray));
console.log(_.sample(myArray,4));
console.log(_.difference(myArray,[1,2,3]));
console.log(_.indexOf(myArray,8));
console.log(_.indexOf(myArray,100));
// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// console.log(_.pluck(stooges, 'name'));
// _.each(myArray,alert);
myArray[100] = 100;
console.log(myArray);
console.log(_.compact(myArray));
myArray = _.compact(myArray);
console.log(_.map(myArray, function(num){ return num * 3; }));
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:



var getElementsByClassName = function(className) {

  var resultElements = [];
  var docBody = document.body;

  var findElements = function (aNode) {

    var listOfClasses = aNode.classList

    if (listOfClasses) {
      for (var j=0; j<listOfClasses.length; j++) {
        if (listOfClasses[j] === className) {
          resultElements.push(aNode);
        }
      }
    }

    var childNodes = aNode.childNodes;
    for (var i=0; i<childNodes.length; i++) {
      var singleNode = childNodes[i];
      findElements(singleNode);
    }
  };





  findElements(docBody);

  return resultElements;

};

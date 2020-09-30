import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as transactionsJSON from './../assets/transactions.json';



export class InMemoryDataService implements InMemoryDbService {

  constructor() {}

  /*Flotten JSON Transactions*/
  traverseAndFlatten(currentNode, target, flattenedKey?) {
    for (var key in currentNode) {
        if (currentNode.hasOwnProperty(key)) {
            var newKey;
            if (flattenedKey === undefined) {
                newKey = key;
            } else {
                newKey = flattenedKey + '.' + key;
            }

            var value = currentNode[key];
            if (typeof value === "object") {
               this.traverseAndFlatten(value, target, newKey);
            } else {
                target[newKey] = value;
            }
        }
    }
  }

  flatten(obj) {
    var flattenedObject = {};
    this.traverseAndFlatten(obj, flattenedObject);
    return flattenedObject;
  }
  
  createDb() {
    var transFlatten = [];
    var imageMock=[];
    transactionsJSON['default'].data.forEach((element,index) => {
      element.id = index;
      element.logo = element['merchant'].name.toLocaleLowerCase().replace(/ /g,'-') + '.png';
      transFlatten.push(this.flatten(element))
     });    
    const transactions = transFlatten;
    return {transactions};
  }
}

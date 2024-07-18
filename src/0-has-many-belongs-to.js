const { getId } = require('./utils');

class ToDoItem { 
  constructor(description, priorityLevel, isDone = false, isOkay = true) {
    this.id = getId();
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.isDone = isDone;
    //extra property
    this.isOkay = isOkay;
  }
   exampleMethod() {
    return `this is an example method, Are you okay ${isOkay}`;
   }
}


class ToDoList {
  static #allItems = [];
  #items = [];

  constructor(name, isOkay = true) {
    this.id = getId();
    this.name = name;
    this.isOkay = isOkay;
    ToDoList.#allItems.push(this);
  }

  createItem(itemName) {
    const newItem = new ToDoItem(itemName, this.id);
    this.#items.push(newItem);
    return newItem;
  }

  getItems() {
    return [...this.#items];
  }

  getCompletedCount() {
    return this.#items.filter(item => item.isCompleted).length;
  }

  static list() {
    return [...ToDoList.#allItems];
  }

  static findBy(id) {
    return ToDoList.#allItems.find(item => item.id === id);
  }

  extraMethod() {
    return `This will display if you are okay or not: ${this.isOkay}`;
  }
}
module.exports = {
  ToDoItem,
  ToDoList
};
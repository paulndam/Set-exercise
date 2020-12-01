/** @format */

// Modify the Set class so that it uses a linked list to store its elements rather than an array. Write a program to test your implementation.

class Set {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class linkedList {
	constructor() {
		this.head = null;
	}

	add(data) {
		var set = new Set(data);
		if (!this.head) {
			this.head = set;
		} else {
			var currSet = this.head;
			while (currSet.next) {
				currSet = currSet.next;
			}
			currSet.next = set;
		}
	}

	find(item) {
		var currSet = this.head;
		while (currSet.data != item) {
			currSet = currSet.next;
		}
		return currSet;
	}
}

var cars = new linkedList();

cars.add("benz");
cars.add("bmw");
cars.add("ford");
cars.add("audi");
cars.find("audi");

console.log(cars);

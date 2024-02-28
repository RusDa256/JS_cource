class ListNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  // toString(callback) {
  //   return callback ? callback(this.value) : `${this.value}`;
  // }
}


class MyList {

  static length

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  add(value) {
    this.length++
    let newNode = new ListNode(value)
    
    if (this.tail) {
      this.tail.next = newNode;
    }
    newNode.prev = this.tail
    this.tail = newNode

    if (!this.head) {
      this.head = newNode;
    }
  }

  getLength() {
    return this.length;
  }

  findValue(value) {
    let current = this.head;
    while(current.next) {
      if (current.value == value) {
        console.log("Yes!!!")
        return true;
      }
      current = current.next
    }
    if (current.value == value) {
      console.log("Yes!!!")
      return true;
    }
    console.log("NO!!!")
    return false;
  }

  removeByValue(value) {

    if(!this.head) {
      return 0
    }

    let current = this.head;
    while(current.next) {
      if (current.value == value) {
        if(current.prev) {
          current.prev.next = current.next
          current.next.prev = current.prev
        } else {
          this.head = current.next
          current.next.prev = null
        }
        this.length--
        return true;
      }
      current = current.next
    }
    if (current.value == value) {
      current.prev.next = null
      this.tail = current.prev
      this.length--
      return true
    }
    console.log("NO!!!")
    return false
  }

  replaceValue(value, new_value) {
    let current = this.head
    while(current.next) {
      if(current.value == value) {
        current.value = new_value
        return true
      }
      current = current.next
    }
    if(current.value == value) {
      current.value = new_value
      return true
    }
    return false
  }

  toString() {
    let current = this.head
    while(current.next) {
      process.stdout.write(current.value + ' - ')
      current = current.next
    }
    process.stdout.write(current.value + '\n')
  }
}

testList = new MyList()

testList.add(5)
testList.add(15)
testList.add(61)
testList.add(3)
testList.add(13)
testList.add(-6)

testList.findValue(15) // демонтрация поиска
console.log('Длина списка - ', testList.length) // демонстрация наличия длины списка
testList.toString()

testList.removeByValue(61) // демонстрация удаления элемента
console.log('Длина списка - ', testList.length)
testList.toString()

testList.replaceValue(15, 777) // демонстрация замены элемента на другой
console.log('Длина списка - ', testList.length)
testList.toString()

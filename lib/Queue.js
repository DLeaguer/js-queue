/**
 * Queue Class
 * -----------------------------
 * A Queue data structure implemented as an ES6 class
 *
 * A queue is a data structure in which the first element is inserted from one end called
 * REAR (also called tail), and the deletion of existing element takes place from the other
 * end called as FRONT (also called head).  This makes queue a FIFO (first in first out), or
 * the element that is inserted first will always be the first to be removed.
 * You will be using an Object as an internal datastore.  Do not use an Array!
 *
 * There should be a constructor method with no arguments.
 *
 * Note that the _storage Object is OPTIONAL as there is a way to implement this exercise
 * without the _storage Object.
 *
 * @private {object} _storage              Default value should be an empty object. (Optional)
 * @private {number} _front                Default value should be set null.
 * @private {number} _back                 Default value should be set null.
 *
 */

function Queue () {
    // constructor() {
        let storage = {};
        let front = null;
        let back = null;
    // }
    function size() {
        if (front === null) {
            front = 0;
            back = 0;
            return back;
        }
        else {
            return back;
        }
        
    }
    function enqueue(item){
        console.log('e size', size());
        console.log('e back before', back);
        console.log('e item', item);
        storage[size()] = item;
        console.log('e stor[size()]', storage[size()]);
        // console.log('ts[tb]', storage[back]);
        console.log('e stor', storage);
        back++;
        console.log('e back after', back);
        console.log('');
        
    }
    function dequeue() {
        if (back > 0) {
            let first = storage[front];
            console.log('d size', size());
            console.log('d front before', front);
            console.log('d back before', back);
            console.log('d stor before', storage);
            delete storage[front];
            console.log('d stor after', storage);
            front++;
            back--;
            console.log('d front after', front);
            console.log('d back after', back);
            console.log('');
            console.log('first', first);
            console.log('');
            return first;
        }
        else {
            console.log('back is null', back);
            return front;
        }
        
    }
    function peek() {
        if (back > 0) {
            console.log('peek front', front);
            console.log('peek stor[front]', storage[front]);
            console.log('peek stor', storage);
            console.log('');
            return storage[front];
        }
        else /* if (front === null) */ {
            console.log('peek front', front);
            console.log('peek stor[front]', storage[front]);
            console.log('peek stor', storage);
            console.log('');
            // return null;
            return front;
        }
    }
    return {
        size,
        enqueue,
        dequeue,
        peek
    }
}

// class Queue {
//     constructor() {
//         this._storage = {};
//         this._front = null;
//         this._back = null;
//     }
//     size() {
//         if (this._front === null) {
//             this._front = 0;
//             this._back = 0;
//             return this._back;
//         }
//         else {
//             return this._back;
//         }
        
//     }
//     enqueue(item){
//         console.log('e size', this.size());
//         console.log('e back before', this._back);
//         console.log('e item', item);
//         this._storage[this.size()] = item;
//         console.log('e stor[size()]', this._storage[this.size()]);
//         // console.log('ts[tb]', this._storage[this._back]);
//         console.log('e stor', this._storage);
//         this._back++;
//         console.log('e back after', this._back);
//         console.log('');
        
//     }
//     dequeue() {
//         if (this._back > 0) {
//             let first = this._storage[this._front];
//             console.log('d size', this.size());
//             console.log('d front before', this._front);
//             console.log('d back before', this._back);
//             console.log('d stor before', this._storage);
//             delete this._storage[this._front];
//             console.log('d stor after', this._storage);
//             this._front++;
//             this._back--;
//             console.log('d front after', this._front);
//             console.log('d back after', this._back);
//             console.log('');
//             console.log('first', first);
//             console.log('');
//             return first;
//         }
//         else {
//             console.log('this._back is null', this._back);
//             return this._front;
//         }
        
//     }
//     peek() {
//         if (this._back > 0) {
//             console.log('peek front', this._front);
//             console.log('peek stor[front]', this._storage[this._front]);
//             console.log('peek stor', this._storage);
//             console.log('');
//             return this._storage[this._front];
//         }
//         else /* if (this._front === null) */ {
//             console.log('peek front', this._front);
//             console.log('peek stor[front]', this._storage[this._front]);
//             console.log('peek stor', this._storage);
//             console.log('');
//             // return null;
//             return this._front;
//         }
//     }
// }

  /**
   * Queue Class Method => size()
   * -----------------------------
   * Returns the size of the queue.
   *
   * @name size
   * @return {Number}
   */

  /**
   * Queue Class Method => enqueue(item)
   * -----------------------------
   * Puts an item in the queue.
   *
   * @name enqueue
   * @param item
   * @return {Number} returns the new size
   */

  /**
   * Queue Class Method => dequeue()
   * -----------------------------
   * Takes an item off the queue and returns it.
   *
   * @name dequeue
   * @return {Object}   Note that everything in javascript is an Object.
   */

   /**
   * Queue Class Method => peek()
   * -----------------------------
   * Returns the value of the first element without dequeueing.
   *
   * @name peek
   * @return {Object}   Note that everything in javascript is an Object.
   */

module.exports = Queue;
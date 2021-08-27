/*
 * @Date: 2021-08-27 14:57:17
 * @LastEditors: haibo.tang
 * @LastEditTime: 2021-08-27 15:01:03
 */

class Queue {
    private data = [];
    push = item => this.data.push(item);
    pop = () => this.data.shift();
}

const queue = new Queue();

queue.push(0);
queue.push('1'); // Oops，一个错误

// 一个使用者，走入了误区
console.log(queue.pop().toPrecision(1)); // RUNTIME ERROR


// 使用泛型的方式来规避这样的错误

// 创建一个泛型类
class QueueT<T> {
    private data: T[] = [];
    push = (item: T) => this.data.push(item);
    pop = (): T | undefined => this.data.shift();
}

// 简单的使用
const queueT = new QueueT<number>();
queue.push(0);
queue.push('1'); // Error：不能推入一个 `string`，只有 number 类型被允许
/*
 * @Date: 2021-08-27 14:51:06
 * @LastEditors: haibo.tang
 * @LastEditTime: 2021-08-27 14:56:49
 */

// origin types
let num: number;
let str: string;
let bool: boolean;

// array type
let boolArray: boolean[];
let numberArray: Array<number>;

// interface
let yourname: Name;
yourname = {
    first: 'John',
    second: 'Doe'
};

yourname = {
    // Error: 'Second is missing'
    first: 'John'
};

yourname = {
    // Error: 'Second is the wrong type'
    first: 'John',
    second: 1337
};

// internal type
let hisname: {
    first: string;
    second: string;
};
hisname = {
    first: 'John',
    second: 'Doe'
};
hisname = {
    // Error: 'Second is missing'
    first: 'John'
};
hisname = {
    // Error: 'Second is the wrong type'
    first: 'John',
    second: 1337
};

// alia type

type Textd = string | { text: string };
type Coordinates = [number, number];
type Callback = (data: string) => void;

// 联合 type

function formatCommandline(command: string[] | string) {
    let line = '';
    if (typeof command === 'string') {
        line = command.trim();
    } else {
        line = command.join(' ').trim();
    }

    // Do stuff with line: string
}

// inter type

function extend<T extends object, U extends object>(first: T, second: U): T & U {
    const result = <T & U>{};
    for (let id in first) {
        (<T>result)[id] = first[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<U>result)[id] = second[id];
        }
    }

    return result;
}

const x = extend({ a: 'hello' }, { b: 42 });

// 现在 x 拥有了 a 属性与 b 属性
const a = x.a;
const b = x.b;


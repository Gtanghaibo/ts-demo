/*
 * @Date: 2021-08-27 15:04:07
 * @LastEditors: haibo.tang
 * @LastEditTime: 2021-08-27 15:05:29
 */
// test.ts # 接口的测试使用阶段
import {getUser} from './api'
interface User {
    name: string;
    age: number;
  }

  async function test() {
    const user = await getUser<User>();
    // user 被推断出为
    // {
    //  code: number,
    //  result: { name: string, age: number },
    //  message: string
    // }
  }
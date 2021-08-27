/*
 * @Date: 2021-08-27 15:02:49
 * @LastEditors: haibo.tang
 * @LastEditTime: 2021-08-27 15:02:49
 */
// res.ts #response interface  用于存放后端返回的数据的文件
// 请求接口数据
export interface ResponseData<T = any> {
    code: number;
    result: T;
    message: string;
}
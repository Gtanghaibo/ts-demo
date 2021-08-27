/*
 * @Date: 2021-08-27 15:06:30
 * @LastEditors: haibo.tang
 * @LastEditTime: 2021-08-27 15:08:50
 */
const octodrill = {} as any
const url = 'https://octodrill-test-apiserver.bj.tusimple.ai'
// 自定义的metaData信息
const defaultMetadata = {} as any

interface IGrpcClient  {
  new(url: string, defaultMetadata: any, ...rest: any): any;
}
const OctodrillClient: IGrpcClient = octodrill.SimcraftClient
export const OCTODRILL = new OctodrillClient(url, defaultMetadata, {
  withCredentials: true,
  // 缓存时间
  'Cache-Control': 'max-age=86400',
})

interface IRESWrapper<T> {
  status: string;
  msg?: string;
  data?: T;
}

const API = function<T=any> ( method:string, reqType:any, reqData:any[] = [], metadata:any = {}): Promise<IRESWrapper<T>> {
  const tMetadata = {
    ...defaultMetadata,
    ...metadata,
  }
  const request = new reqType(reqData)
  return new Promise<IRESWrapper<T>>((resolve, reject) => {
    OCTODRILL[method](request, tMetadata, (err:any, res:any) => {
        if (err) {
        reject(err)
      } else {
        const resData = res.toObject()
        resolve({
          status: 'success',
          data: resData,
        })
      }
    })
  }).catch(err => {
    console.error('[OCTODRILL error]', err)
    return {
      status: 'error',
      msg: err.message || 'unknown error',
    }
  })
}

export default API
import vhttp from './modle/vueRequest';
/* API接口 */
/**
 * vhttp(url,params,httpType,method)
 * @url APIurl的地址。
 * @params 请求的参数。
 * @httpType 请求的类型 GET POST。
 * @method 请求方法 ajax（jsonp) 或者 axios 默认axios。
 * @return Promise;
 * 规范：命名前缀需要 type_*  getBaidu  postBaidu。接口地址需要添加注释.
 */
// 请求百度接口获取数据
export const get_tablelist = params => vhttp("/table/list", params, "GET");

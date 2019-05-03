/**
 * 根据手动设置VUE_APP_CURRENTMODE环境值，来配置不同环境下需要的变量
 * URLWEBHTTP 是调用后台接口域名
 */
let URLWEBHTTP = '';
let timeout = 5000;
switch (process.env.VUE_APP_CURRENTMODE) {
    case 'development':
        // 本地开发
        URLWEBHTTP = 'https://www.easy-mock.com/mock/5b8c9810c0b06d42b3bb5552/mockapi'
        break;
    case 'alpha':
        // 生产环境
        URLWEBHTTP = ''
        break;
    case 'production':
        // 测试环境
        URLWEBHTTP = ''
        break;
}
export default {
    URLWEBHTTP,
    timeout
}

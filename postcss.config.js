module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-pxtorem': {
            rootValue: 32,
            selectorBlackList: ['weui', 'mu', 'cube-'], // 忽略转换正则匹配项
            propList: ['*'],
        }
    }
}

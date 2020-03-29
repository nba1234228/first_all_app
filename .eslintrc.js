module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint' // 先转换，再检测
    },
    env: {
        browser: true,
    },
    extends: ['plugin:vue/essential', 'standard'],
    plugins: ['vue'],
    rules: {
        'generator-star-spacing': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ['error', 4, {
            'SwitchCase': 1
        }],
        "keyword-spacing": [2, {"overrides": {
            "if": {"after": false}, // if后面空格
            "for": {"after": false},
            "while": {"after": false}
        }}],
        'semi': ['error', 'always'], // 关闭语句 强制 分号结尾
        'object-curly-spacing': ["error", "never"], // 对象前后空格
        "space-before-function-paren": ["error", "never"], // 方法名后面空格
        'prefer-template': 'error',
        'one-var': ['error', {'const': 'never'}],
        'no-tabs': 'off'
    }
};

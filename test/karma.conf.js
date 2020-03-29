module.exports = function(config) {
    config.set({
        basePath: '',
        browsers: ['Chrome'],
        // 下面的测试框架是用来测试js
        frameworks: ['mocha'],
        // 下面指的是index.js文件在browsers里面运行
        files: ['spec/index.js'],
        exclude: [],
        plugins: ['karma-webpack', 'karma-coverage', 'karma-mocha', 'karma-chrome-launcher'],
        // 下面是为文件制定预处理器，也就是说测试index.js之前用webpack和sourcemap处理一下
        preprocessors: {
            'spec/*.js': ['webpack'],
            'src/**/*.js': ['webpack']
        },
        // 下面是覆盖报告
        coverageReporter: {
            type: 'html',
            dir: './coverage'
        },
        // 下面的是用来出报告的
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        concurrency: Infinity,
        webpack: {
            mode: 'production',
            module: {
                rules: [{
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [{
                        loader: 'babel-loader'
                    }]
                }]
            }
        }
    });
};

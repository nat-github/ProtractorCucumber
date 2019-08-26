exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'firefox'  
    },
    specs:['Features/*.feature'],
    baseURL:'http://localhost:8080',
    //Cucumber options
    cucumberOpts:{
        require:'Features/stepDefinitions/Steps.js',
        tags:false,
        profile:false
    }
}
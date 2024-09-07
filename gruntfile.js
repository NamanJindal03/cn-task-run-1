
// const eslint = require('eslint-json')


module.exports = function(grunt){
    //defining and configuring what to do in the task 
    grunt.initConfig({
        eslint: {
            options: {
                overrideConfigFile: "./.eslintrc.js"
            },
            target: ['src/js/index.js']
        },
        
    })
    //load the plugin 
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-eslint');

    //start the task 
    grunt.registerTask('default', ['eslint'])
}
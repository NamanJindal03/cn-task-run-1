
module.exports = function(grunt){
    //defining and configuring what to do in the task 
    grunt.initConfig({
        eslint: {
            target: ['src/js/index.js']
        },
        uglify:{
            target: {
                files: {
                    "dest/js/index.min.js": ["src/js/*.js"]
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                expand: true,
                cwd: 'src/css',
                src: ['*.css', '!*.min.css'],
                dest: 'dest/css',
                ext: '.min.css'
                }]
            }
        }
    })
    //load the plugin 
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //start the task 
    grunt.registerTask('default', ['uglify', 'cssmin'])
}


// // const eslint = require('eslint-json')


// module.exports = function(grunt){
//     //defining and configuring what to do in the task 
//     grunt.initConfig({
//         eslint: {
//             options: {
//                 configFile: ".eslintrc.json"
//             },
//             target: ['src/js/index.js']
//         },
        
//     })
//     //load the plugin 
//     // grunt.loadNpmTasks('grunt-contrib-uglify');
//     // grunt.loadNpmTasks('grunt-contrib-cssmin');
//     grunt.loadNpmTasks('grunt-eslint');

//     //start the task 
//     grunt.registerTask('default', ['eslint'])
// }
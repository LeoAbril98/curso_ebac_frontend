module.exports = function (grunt) {
    // Configuração do Grunt
    grunt.initConfig({
      // Configuração para o compilador LESS
        less: {
        development: {
            options: {
            paths: ['assets/css']
        },
        files: {
            'dist/css/style.css': 'src/less/style.less'
        }
        }
    },
      // Configuração para a compressão de código JavaScript
    uglify: {
        my_target: {
            files: {
            'dist/js/script.min.js': ['src/js/*.js']
            }
        }
    }
    });

    // Carregamento de plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Tarefas do Grunt
    grunt.registerTask('default', ['less', 'uglify']);


};

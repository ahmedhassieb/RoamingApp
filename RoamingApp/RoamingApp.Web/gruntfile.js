
/// <binding AfterBuild='default' />
/// <binding BeforeBuild='watch' AfterBuild='default' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['app/main/**/*.ts', 'app/main/**/*.css'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            }
        },
        copy: {
            fonts: {
                files: [
                   {
                       expand: true,
                       cwd: 'bower_components/font-awesome/fonts/',
                       src: '**/*',
                       dest: 'wwwroot/fonts/',
                       flatten: true,
                       filter: 'isFile'
                   },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/fonts/',
                        src: '**/*',
                        dest: 'wwwroot/fonts/',
                        flatten: true,
                        filter: 'isFile'
                    }
                ]

            },

            images: {
                files: [
                {
                    expand: true,
                    cwd: 'Content/flags/',
                    src: '**/*.{jpg,png,jpeg}',
                    dest: 'wwwroot/css/',
                    flatten: true,
                    filter: 'isFile'
                }, {
                    expand: true,
                    cwd: 'Content/Images/',
                    src: '**/*',
                    dest: 'wwwroot/images/',
                    flatten: true,
                    filter: 'isFile'
                }

                ]

            },
            pagination:
                {
                    expand: true,
                    cwd: 'bower_components/angularUtils-pagination/',
                    src: 'dirPagination.tpl.html',
                    dest: 'wwwroot/lib/',
                    flatten: true,
                    filter: 'isFile'
                }

        },
        concat: {
            options: {
                separator: grunt.util.linefeed + ';' + grunt.util.linefeed,
            },
            vendors: {
                src: [
                    "bower_components/josn2/json2.js",
                    "bower_components/modernizr/modernizr.js",
                    "bower_components/jquery/dist/jquery.min.js",
                    "bower_components/jquery-ui/jquery-ui.min.js",
                    "bower_components/bootstrap/dist/js/bootstrap.min.js",
                    "bower_components/moment/min/moment-with-locales.min.js",
                    "bower_components/blockui/jquery.blockUI.js",
                    "bower_components/toastr/toastr.min.js",
                    "bower_components/sweetalert/dist/sweetalert.min.js",
                    "bower_components/spin.js/spin.min.js",
                    "bower_components/spin.js/jquery.spin.js",
                    "bower_components/angular/angular.js",
                    "bower_components/angular-animate/angular-animate.js",
                    "bower_components/angular-sanitize/angular-sanitize.js",
                  //  "bower_components/angular-aria/angular-aria.js",
                    "bower_components/angular-ui-router/release/angular-ui-router.min.js",
                    "bower_components/angular-bootstrap/ui-bootstrap.min.js",
                    "bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
                    "bower_components/angular-ui-load/angular-ui-load.js",
                   "bower_components/angular-ui-jq/angular-ui-jq.js",
                  //  "bower_components/angular-ui-utils/ui-utils.min.js",
                    "bower_components/angular-messages/angular-messages.min.js",
                    "bower_components/angular-moment/angular-moment.min.js",
                    //"bower_components/fullcalendar/dist/fullcalendar.min.js",
                    //"bower_components/fullcalendar/dist/gcal.js",
                    //"bower_components/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.min.js",
                   // "bower_components/lodash/dist/lodash.min.js",
                   // "bower_components/angularjs-dropdown-multiselect/dist/angularjs-dropdown-multiselect.min.js",
                    "bower_components/angular-dialog-service/dist/dialogs-default-translations.min.js",
                    "bower_components/angular-dialog-service/dist/dialogs.min.js",
                    "bower_components/html5shiv/dist/html5shiv.min.js",
                    "bower_components/html5shiv/dist/html5shiv-printshiv.min.js",
                    "bower_components/signalr/jquery.signalR.min.js"
                   // "Common/Scripts/helpers.js"
                ],
                dest: 'wwwroot/lib/vendors.min.js'
            },
            app:
                {
                    src: ['app/main/**/*.js'],
                    dest: 'wwwroot/lib/app.min.js'
                },

            otherMaster: {
                src: [
                            "bower_components/abp-web-resources/Abp/Framework/scripts/utils/ie10fix.js",
                            "bower_components/abp-web-resources/Abp/Framework/scripts/abp.js",
                            "bower_components/abp-web-resources/Abp/Framework/scripts/libs/abp.jquery.js",
                            "bower_components/abp-web-resources/Abp/Framework/scripts/libs/abp.toastr.js",
                            "bower_components/abp-web-resources/Abp/Framework/scripts/libs/abp.blockUI.js",
                            "bower_components/abp-web-resources/Abp/Framework/scripts/libs/abp.spin.js",
                            "bower_components/abp-web-resources/Abp/Framework/scripts/libs/angularjs/abp.ng.js",
                            "bower_components/abp-web-resources/Abp/Framework/scripts/libs/abp.sweet-alert.js",
                           // "Common/Scripts/helpers.js"


                ],
                dest: 'wwwroot/lib/other.min.js'
            }
        },
        uglify: {
            options: {
                beautify: true
            },
            abp: {
                files: {
                    'wwwroot/lib/abp.min.js':
                        [
                            "bower_components/abp-web-resources/Abp/Framework/scripts/utils/ie10fix.js",
                            "bower_components/abp-web-resources/Abp/Framework/scripts/abp.js",
                            "bower_components/abp-web-resources/Abp/Framework/scripts/libs/abp.jquery.js",
                            "bower_components/abp-web-resources/Abp/Framework/scripts/libs/abp.toastr.js",
                            "bower_components/abp-web-resources/Abp/Framework/scripts/libs/abp.blockUI.js",
                            "bower_components/abp-web-resources/Abp/Framework/scripts/libs/abp.spin.js",
                            "bower_components/abp-web-resources/Abp/Framework/scripts/libs/angularjs/abp.ng.js",
                            "bower_components/abp-web-resources/Abp/Framework/scripts/libs/abp.sweet-alert.js"
                        ]
                }
            }


        },
        less: {
            development: {

                files: {
                    "wwwroot/css/compile.css": ["app/main/*.less", "app/main/**/*.less"]
                }
            }
        },
        cssmin: {
            options: {},
            vendors: {
                files: {
                    'wwwroot/css/vendors.min.css':
                    [
                        "bower_components/jquery-ui/themes/base/all.css",
                        "bower_components/bootstrap/dist/css/bootstrap.css",
                        "bower_components/angular-dialog-service/dist/dialogs.min.css",
                        "bower_components/toastr/toastr.min.css",
                        "bower_components/sweetalert/dist/sweetalert.css",
                        "Content/flags/famfamfam-flags.css",
                        "bower_components/font-awesome/css/font-awesome.min.css",
                        //"bower_components/fullcalendar/dist/fullcalendar.min.css",
                        //"bower_components/fullcalendar/dist/fullcalendar.print.css",
                        //"bower_components/angular-bootstrap-calendar/dist/css/angular-bootstrap-calendar.min.css",
                        //"bower_components/angular-wizard/dist/angular-wizard.min.css",
                        "bower_components/abp-web-resources/Abp/Framework/styles/utils/ie10fix.css",
                        "bower_components/abp-web-resources/Abp/Framework/styles/abp.min.css"
                    ]
                }
            },
            app: {
                files: {
                    "wwwroot/css/app.min.css":
                    ['app/main/*.css', '!app/main/*.min.css', 'app/main/**/*.css', '!app/main/**/*.min.css', "Content/css/CustomCss.css"]
                }
            }
        },

        clean: [
                "wwwroot/css/**",
                "wwwroot/lib/**",
                "wwwroot/fonts/**"
        ],
        http: {
            ServicesTypeScript: {
                options: {
                    url: 'http://localhost:2020/api/TypeScript/Get'
                },
                dest: 'typings/services/apiservices.d.ts'
            }
        }
    });

    grunt.registerTask('alldone', function () {
        grunt.log.writeln('All tasks Completed"');
    });


    grunt.registerTask("default", ["clean", "copy", "concat", "less", "cssmin", "uglify", "alldone"]);


    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    // grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http');
    grunt.loadNpmTasks('grunt-contrib-less');
    //grunt.loadNpmTasks("grunt-bower-task");
};
var gulp = require("gulp");
var less = require("gulp-less");
var server = require("gulp-webserver");
var sequence = require("gulp-sequence");

gulp.task("less",function(){
    gulp.src("src/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("src/css"))
})

gulp.task("watch",function(){
    gulp.watch("./src/less/*.less",["less"])
})

gulp.task("server",function(){
    gulp.src("src")
        .pipe(server({
            port:8000,
            livereload:true,
            middleware:function(req,res,next){
                next();
            }
        }))
})

gulp.task("default",function(cb){
    sequence("less","watch","server",cb);
});
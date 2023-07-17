"use strict";

import gulp from "gulp";
import sftp from "gulp-sftp";
 
gulp.task("deploy", function () {
  return gulp.src("dist/**")
    .pipe(sftp({
      host: "*****",
      user: "******",
      pass: "*****",
      port: 11111,
      remotePath: "*****"
    }));
});

[] In node_modules find gulp-sftp folder and there index.js
[] Go to the line 280 (code with comment <// start upload>) and replace it with:

// start upload
                if ( file.isStream() ) {
                  file.contents.pipe( stream );
                } else if ( file.isBuffer() ) {
                  stream.end( file.contents );
                }
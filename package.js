Package.describe({
    name: 'BringIt',
    version: '0.0.1',
    summary: 'Real-time multi-user shopping list',
    git: 'https://github.com/NPE-Developers/bringit'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.1.1');
    api.use([
        'jquery',
        'ecmascript',
        'underscore',
        'templating',
        'session',
        'less',
        'random',
        'rocketchat:lib',
        'rocketchat:ui-message',
    ]);
	
		api.addFiles('bringit.js');
	
		// Get all the project files
		var clientFiles=getFilesFromFolder("bringit","client");
		// Add all the .js project files
		api.add_files(clientFiles[0],"client");
		// Add all the .html, .css project files
		api.addAssets(clientFiles[1],"client");

});

Package.onTest(function(api) {
    api.use([
    	'coffeescript',
      'jquery',
      'ecmascript',
      'practicalmeteor:mocha',
      'practicalmeteor:chai',
      'practicalmeteor:sinon',
    ]);

	api.use('templating', 'client');
});

function getFilesFromFolder(packageName,folder){
    // local imports
    var _=Npm.require("underscore");
    var fs=Npm.require("fs");
    var path=Npm.require("path");
    // helper function, walks recursively inside nested folders and return absolute filenames
    function walk(folder){
				var assets=[];
        var filenames=[];
        // get relative filenames from folder
        var folderContent=fs.readdirSync(folder);
        // iterate over the folder content to handle nested folders
        _.each(folderContent,function(filename){
            // build absolute filename
            var absoluteFilename=folder+path.sep+filename;
            // get file stats
            var stat=fs.statSync(absoluteFilename);
            if(stat.isDirectory()){
                // directory case => add filenames fetched from recursive call
                filenames=filenames.concat(walk(absoluteFilename)[0]);
								assets=assets.concat(walk(absoluteFilename)[1]);
            }
            else{
                // file case => simply add it
                var extension = path.extname(absoluteFilename);
								if (extension == '.html'){
									// Add static asset
									assets.push(absoluteFilename);
								} else {
									// Add other type of file
									filenames.push(absoluteFilename);
								}
            }
        });
        return [filenames, assets];
    }
    // save current working directory (something like "/home/user/projects/my-project")
    var cwd=process.cwd();
    // chdir to our package directory
    process.chdir(cwd + path.sep + '..' + path.sep + packageName);
    // launch initial walk
    var result=walk(folder);
    // restore previous cwd
    process.chdir(cwd);
    return result;
}
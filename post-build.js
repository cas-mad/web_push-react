const fs = require('fs');
const rimraf = require('rimraf');

rimraf('www', function(e) {
	if (e) console.log(e);
	else console.log('Cleaned www.');

	fs.rename('build', 'www', function(e) {
		if (e) console.log(e);
		else console.log('Renamed build to www.');
	});
});

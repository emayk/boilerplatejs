({
	appDir : "../../",
	baseUrl : "src",
	dir : "../../../boilderplateJS-initideploy-build",
	modules : [ {
		name : "main",
	} ],
	paths : {
		domReady : '../libs/require/domReady',
		_boiler_ : './core/_boiler_',
		text : "../libs/require/text",
		i18n : "../libs/require/i18n"
	},
	fileExclusionRegExp: /^dummyServer$/
})
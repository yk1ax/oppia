basePath = '../../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'third_party/static/angularjs-1.2.0-rc.2/angular.js',
  'third_party/static/angularjs-1.2.0-rc.2/angular-resource.min.js',
  'third_party/static/angularjs-1.2.0-rc.2/angular-sanitize.min.js',
  'third_party/static/angularjs-1.2.0-rc.2/angular-mocks.js',
  'third_party/static/ui-bootstrap-0.6.0/ui-bootstrap-tpls-0.6.0.js',
  'core/templates/dev/head/**/*.js',
  'core/templates/dev/head/**/*.html'
];

preprocessors = {
  'core/templates/dev/head/**/*.html': 'html2js'
};

autoWatch = true;

browsers = ['Firefox'];

// Kill the browser if it does not capture in the given timeout [ms].
captureTimeout = 60000;

junitReporter = {
  outputFile: '../test_out/unit.xml',
  suite: 'unit'
};

reporters = ['progress'];

// Exit after running tests.
singleRun = true;

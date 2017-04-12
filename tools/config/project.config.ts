import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');



  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxcore.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxbuttons.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxscrollbar.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxdata.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxdate.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxscheduler.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxscheduler.api.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxdatetimeinput.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxmenu.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxcalendar.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxtooltip.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxwindow.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxcheckbox.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxlistbox.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxdropdownlist.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxnumberinput.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxradiobutton.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/jqxinput.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/globalization/globalize.js', inject: 'libs'},
    {src: 'jqwidgets-framework/jqwidgets/globalization/globalize.culture.de-DE.js', inject: 'libs'}

    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];


    // this is how it is defined in tools/config/seed.config.ts but leaving
    // this here to indicate how to change it to false
    this.SYSTEM_CONFIG.defaultJSExtensions = true;

    // Add packages (e.g. ng2-translate)
    let additionalPackages: ExtendPackages[] = [{
      name: 'jqxscheduler',
      // Path to the package's bundle
      path: `${this.APP_SRC}/lib/jqwidgets-ts-dist/angular_jqxscheduler.js`
    }];

    this.addPackagesBundles(additionalPackages);

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}

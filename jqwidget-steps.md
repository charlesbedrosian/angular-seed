# Steps for integrating JQWidgets into an Angular Seed project

Setup the base angular seed project

```bash
git clone --depth 1 https://github.com/mgechev/angular-seed.git
mv angular-seed angular-seed-scheduler
cd angular-seed-scheduler
npm install
# test it
npm start
```



Start integrating JQWidgets. Basing this process on the code defined in [the guide](http://www.jqwidgets.com/angular-components-documentation/) (section titled _"Ahead Of Time" Compilation using Webpack_)

```bash
npm install --save jqwidgets-framework

```
create `src/client/app/typings.d.ts`

```typescript
/// <reference path="../../../node_modules/jqwidgets-framework/jqwidgets-ts/jqwidgets.d.ts" />
```

pull the required js files
(temporarily hard code them in index.html)

```
...
<!-- these really should get injected but for now keep it simple -->
    <script src="node_modules/jqwidgets-framework/jqwidgets/jqxcore.js"></script>
    <script src="node_modules/jqwidgets-framework/jqwidgets/jqxdraw.js"></script>
    <script src="node_modules/jqwidgets-framework/jqwidgets/jqxbargauge.js"></script>

  <!-- libs:js -->
  <!-- endinject -->
...  
```

update `app/src/client/home.component.html` -- replace its contents with:

```
<jqxBarGauge #barGaugeReference></jqxBarGauge>
```

update imports and class in `app/src/client/home.component.ts`

```
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { jqxBarGaugeComponent } from './jqwidgets-ts/angular_jqxbargauge';
...
export class HomeComponent implements AfterViewInit {
    @ViewChild('barGaugeReference') myBarGauge: jqxBarGaugeComponent;

    ngAfterViewInit(): void
    {
        this.myBarGauge.createWidget(this.barGaugeSettings);
    }

    barGaugeSettings: jqwidgets.BarGaugeOptions =
    {
        colorScheme: "scheme02",
        width: 600,
        height: 600,
        max: 150,
        values: [102, 115, 130, 137],
        tooltip: {
            visible: true,
            formatFunction: (value: string) =>
            {
                let realVal = parseInt(value);
                return ('Year: 2016<br />Price Index:' + realVal);
            }
        }
    }
}

```

update `app/src/client/home/home.module.ts`


``` 
import { jqxSchedulerComponent } from 'angular_jqxscheduler';
 
 @NgModule({
 imports: [HomeRoutingModule, SharedModule, jqxSchedulerComponent],
```

## Issues

1) duplicate definitions:

```
/Users/charles/code/angular-seed/node_modules/jqwidgets-framework/jqwidgets-ts/jqwidgets.d.ts(1979,9): error TS2300: Duplicate identifier 'localization'.
/Users/charles/code/angular-seed/node_modules/jqwidgets-framework/jqwidgets-ts/jqwidgets.d.ts(2004,9): error TS2300: Duplicate identifier 'localization'.
/Users/charles/code/angular-seed/node_modules/jqwidgets-framework/jqwidgets-ts/jqwidgets.d.ts(2004,9): error TS2403: Subsequent variable declarations must have the same type.  Variable 'localization' must be of type 'any', but here has type 'Object'.
src/client/app/home/home.component.ts(2,38): error TS2307: Cannot find module './jqwidgets-ts/angular_jqxbargauge'.
```

2) in js console shows 404s for javascript files

```

Failed to load resource: the server responded with a status of 404 (Not Found)
localhost/:66 (SystemJS) XHR error (404 Not Found) loading http://localhost:5556/app/home/jqwidgets-ts/angular_jqxbargauge.js
	Error: XHR error (404 Not Found) loading http://localhost:5556/app/home/jqwidgets-ts/angular_jqxbargauge.js
	    at XMLHttpRequest.wrapFn [as __zone_symbol___onreadystatechange] (http://localhost:5556/node_modules/zone.js/dist/zone.js?1491952822971:1199:29) [<root>]
	    at Zone.runTask (http://localhost:5556/node_modules/zone.js/dist/zone.js?1491952822971:165:47) [<root> => <root>]
	    at XMLHttpRequest.ZoneTask.invoke (http://localhost:5556/node_modules/zone.js/dist/zone.js?1491952822971:460:38) [<root>]
	Error loading http://localhost:5556/app/home/jqwidgets-ts/angular_jqxbargauge.js as "./jqwidgets-ts/angular_jqxbargauge" from http://localhost:5556/app/home/home.component.js Not expecting this error? Report it at https://github.com/mgechev/angular-seed/issues
(anonymous) @ localhost/:66

```

-----
### Things I tried that did not have an effect

References:

- [Using 3rd party JavaScript libraries such as moment.js](https://github.com/mgechev/angular-seed/issues/393)
- [Add external scripts and styles](https://github.com/mgechev/angular-seed/wiki/Add-external-scripts-and-styles)




```
# install tsd if you do not have it
npm install tsd -g

tsd install --save jqwidgets-framework
```

---
Also tried to explicitly put path like ../../../../node_modules/... for the module import but it was still trying to download the .js file of the module.  I believe the systemjs.config is putting "default extension" as js

[SystemJS issue - An option to load modules from node_module](https://github.com/systemjs/systemjs/issues/767)


---
Running demos on server
Uploaded the contents of demos to web server and can run.  Interestingly without the `jqwidgets-ts` folder it complained it could not find `angular_jqxscheduler.ts` whereas when I was running inside of angular seed it would not find `angular_jqxscheduler.js`

[Scheduler demo](http://scheduler.bedrosian.com/angular-scheduler/angular-scheduler-defaultfunctionality.htm)
# Steps for integrating JQWidgets into an Angular Seed project

### Setup the base angular seed project

```bash
git clone --depth 1 https://github.com/mgechev/angular-seed.git
mv angular-seed angular-seed-scheduler
cd angular-seed-scheduler
npm install
# test it
npm start
```


### manually transpile the jqwidgets-ts
- download and expand the source of jqwidgets
- create `tsconfig.json` in the expanded folder

```json
{
    "compilerOptions": {
        "emitDecoratorMetadata": true,
        "module": "commonjs",
        "target": "ES5",
        "outDir": "jqwidgets-ts-dist",
        "rootDir": "jqwidgets-ts"
    }
}
```

- ensure tsc is installed

```
npm install -g typescript
```

- transpile

```
cd jqwidgets-ts
tsc
```
- copy transpiled files

```
cd ..
cp -r jqwidgets-ts-dist/* /path/to/angular-seed/src/client/lib/
```


### update project.config.ts

```
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
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
    
...
    let additionalPackages: ExtendPackages[] = [{
      name: 'jqxscheduler',
      // Path to the package's bundle
      path: `${this.APP_SRC}/lib/jqwidgets-ts-dist/angular_jqxscheduler.js`
    }];

    this.addPackagesBundles(additionalPackages);
    

```



create `src/client/app/typings.d.ts`. (not sure if this is necessary)

```typescript
/// <reference path="../../../node_modules/jqwidgets-framework/jqwidgets-ts/jqwidgets.d.ts" />
```

update home/home.module.ts

```
...
import { jqxSchedulerComponent } from 'jqxscheduler';x

@NgModule({
...
  declarations: [..., jqxSchedulerComponent],
...
})

```

update home/home.component.ts

```
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { jqxSchedulerComponent } from 'jqxscheduler';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements AfterViewInit {

    @ViewChild('schedulerReference') scheduler: jqxSchedulerComponent;

    ngAfterViewInit(): void
    {
        setTimeout(() =>
        {
            this.scheduler.ensureAppointmentVisible('id1');
        });
    }

    generateAppointments(): any
    {
        let appointments = new Array();

        let appointment1 = {
            id: "id1",
            description: "George brings projector for presentations.",
            location: "",
            subject: "Quarterly Project Review Meeting",
            calendar: "Room 1",
            start: new Date(2016, 10, 23, 9, 0, 0),
            end: new Date(2016, 10, 23, 16, 0, 0)
        };
        let appointment2 = {
            id: "id2",
            description: "",
            location: "",
            subject: "IT Group Mtg.",
            calendar: "Room 2",
            start: new Date(2016, 10, 24, 10, 0, 0),
            end: new Date(2016, 10, 24, 15, 0, 0)
        };
        let appointment3 = {
            id: "id3",
            description: "",
            location: "",
            subject: "Course Social Media",
            calendar: "Room 3",
            start: new Date(2016, 10, 27, 11, 0, 0),
            end: new Date(2016, 10, 27, 13, 0, 0)
        };
        let appointment4 = {
            id: "id4",
            description: "",
            location: "",
            subject: "New Projects Planning",
            calendar: "Room 2",
            start: new Date(2016, 10, 23, 16, 0, 0),
            end: new Date(2016, 10, 23, 18, 0, 0)
        };
        let appointment5 = {
            id: "id5",
            description: "",
            location: "",
            subject: "Interview with James",
            calendar: "Room 1",
            start: new Date(2016, 10, 25, 15, 0, 0),
            end: new Date(2016, 10, 25, 17, 0, 0)
        };
        let appointment6 = {
            id: "id6",
            description: "",
            location: "",
            subject: "Interview with Nancy",
            calendar: "Room 4",
            start: new Date(2016, 10, 26, 14, 0, 0),
            end: new Date(2016, 10, 26, 16, 0, 0)
        };

        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);

        return appointments;
    }

    source: any =
    {
        dataType: "array",
        dataFields: [
            { name: 'id', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'subject', type: 'string' },
            { name: 'calendar', type: 'string' },
            { name: 'start', type: 'date' },
            { name: 'end', type: 'date' }
        ],
        id: 'id',
        localData: this.generateAppointments()
    }

    dataAdapter: any = new $.jqx.dataAdapter(this.source);

    date: any = new $.jqx.date(2016, 11, 23);

    appointmentDataFields: any =
    {
        from: "start",
        to: "end",
        id: "id",
        description: "description",
        location: "location",
        subject: "subject",
        resourceId: "calendar"
    };

    resources: any =
    {
        colorScheme: "scheme05",
        dataField: "calendar",
        source: new $.jqx.dataAdapter(this.source)
    };

    views: string[] =
    [
        'dayView',
        'weekView',
        'monthView'
    ];

}

```



---
Running demos on server
Uploaded the contents of demos to web server and can run.  Interestingly without the `jqwidgets-ts` folder it complained it could not find `angular_jqxscheduler.ts` whereas when I was running inside of angular seed it would not find `angular_jqxscheduler.js`

[Scheduler demo](http://scheduler.bedrosian.com/angular-scheduler/angular-scheduler-defaultfunctionality.htm)
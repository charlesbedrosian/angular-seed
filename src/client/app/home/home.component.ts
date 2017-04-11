import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { jqxBarGaugeComponent } from './jqwidgets-ts/angular_jqxbargauge';

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

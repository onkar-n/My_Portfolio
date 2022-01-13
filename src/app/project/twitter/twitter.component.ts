import {
  Component,
  OnInit,
  Pipe,
  ViewChild,
  QueryList,
  ElementRef,
  AfterViewInit,
  ViewChildren,
} from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import data from './data.json';
import sentimentjson from './sentiment.json';
import senti from './senti.json';
import { ChartType, ChartOptions, Chart } from 'chart.js';

interface tdata {
  name: string;
  volume: any;
  url: string;
}

interface sentidata {
  name: string;
  sentiment: any;
}

interface xyz {
  pos: any;
  neg: any;
}

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css'],
})
export class TwitterComponent implements OnInit, AfterViewInit {
  @ViewChild('chart') box: ElementRef;
  @ViewChildren(BaseChartDirective) chart: QueryList<BaseChartDirective>;

  mydata: tdata[] = data;
  sentmentDatajson: sentidata[] = sentimentjson;
  tweets: xyz = senti;

  tweetsData: any[] = [];

  public sentimentData: any = [
    { data: [], backgroundColor: ['lightgreen', 'red'] },
  ];
  public sentimentDataLabels = ['Positive', 'Negtive'];
  public sentimentChartType: ChartType = 'bar';

  public barChartLabels: string[] = [];
  public barChartType: ChartType = 'doughnut';
  public barChartLegend = true;
  public barChartData: any = [{ data: [], label: 'Series A' }];
  public barChartOptions: ChartOptions = {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },

    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  constructor() {
    this.tweetsData.push(this.tweets.neg);

    for (let x in this.mydata) {
      this.barChartData[0].data.push(this.mydata[x].volume);
      this.barChartLabels.push(this.mydata[x].name);
    }

    this.sentimentData[0].data.push(this.sentmentDatajson[0].sentiment.pos);
    this.sentimentData[0].data.push(this.sentmentDatajson[0].sentiment.neg);
  }

  chartClicked(event: any) {
    let index = event.active[0].index;
    this.sentimentData[0].data[0] = this.sentmentDatajson[index].sentiment.pos;
    this.sentimentData[0].data[1] = this.sentmentDatajson[index].sentiment.neg;
    this.chart.last.update();
    this.tweetsData = [];
    if (event.active[0].index == '1') {
      this.tweetsData.push(this.tweets.neg);
    }
  }

  clickchild(event: any) {
    let index = event.active[0].index;
    this.tweetsData = [];
    if (event.active[0].index == '1') {
      this.tweetsData.push(this.tweets.neg);
    } else {
      this.tweetsData.push(this.tweets.pos);
    }
    console.log(index);
    console.log(this.tweetsData);
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
}

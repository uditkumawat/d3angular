import { Component, OnInit } from '@angular/core';
import { GraphsService } from '../graphs.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  graphData:any=[];

  constructor(private gs:GraphsService) { }

  ngOnInit() {

	this.gs.getGraphData().subscribe(data =>{
		this.graphData = data;
    console.log(this.graphData);
	});
  }

}

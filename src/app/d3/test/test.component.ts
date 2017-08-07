import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {D3, D3Service,Selection} from "d3-ng2-service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;
  private d3Svg: Selection<SVGSVGElement, any, null, undefined>;
  @ViewChild('d3') private node;


  constructor(element: ElementRef, d3Service: D3Service) { // <-- pass the D3 Service into the constructor
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
    let d3 = this.d3; // <-- for convenience use a block scope variable
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let d3Svg: Selection<SVGSVGElement, any, null, undefined>;
// ...

    var w = 500;
    var h = 50;
    //Data
    var dataset = [ 5, 10, 15, 20, 25 ];
    //Create SVG element
    console.log(this.node.nativeElement);
    console.log('body1');
    console.log(this.d3.select('body'))

    var svg = d3.select(this.node.nativeElement)
      .append("svg")
      .attr("width", w)
      .attr("height", h);
    var circles = svg.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle");
    circles.attr("cx", function(d, i) {
      return (i * 50) + 25;
    })
      .attr("cy", h/2)
      .attr("r", function(d) {
        return d;
      })
      .attr("fill", "yellow")
      .attr("stroke", "orange")
      .attr("stroke-width", function(d) {
        return d/2;
      });

  }

}

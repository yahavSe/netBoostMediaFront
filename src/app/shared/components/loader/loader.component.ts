import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Destroyable} from "@net-boost-media/components/destroyable/destroyable";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Loader extends Destroyable implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
  }
}

import {Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from "@angular/core";
import {Destroyable} from "@net-boost-media/components/destroyable/destroyable";

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent extends Destroyable implements OnInit, OnChanges {

  constructor(
  ) {
    super();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}

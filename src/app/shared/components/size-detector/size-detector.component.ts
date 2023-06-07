import {AfterViewInit, Component, EventEmitter, HostListener, Output} from '@angular/core';
import {ScreenSize} from "@net-boost-media/types/ui/ui.types";


@Component({
  selector: 'o-tall-json-size-detector',
  templateUrl: './size-detector.component.html',
  styleUrls: ['./size-detector.component.scss']
})

export class SizeDetectorComponent implements AfterViewInit {

  @Output('onSizeChanged') onSizeChanged = new EventEmitter<ScreenSize>();
  sizes = [
    {
      id: ScreenSize.Mobile, media: '(max-width: 767px)'
    },
    {
      id: ScreenSize.Tablet, media: '(min-width: 768px) and (max-width: 1024px)'
    },
    {
      id: ScreenSize.Desktop, media: '(min-width: 1025px)'
    },
  ];

  constructor() {
  }

  ngAfterViewInit() {
    this.detectScreenSize();
  }

  @HostListener('window:resize', [])
  private onResize() {
    this.detectScreenSize();
  }

  private detectScreenSize() {
    this.sizes?.forEach(size => {
      if (window.matchMedia(size.media)?.matches) {
        this.onSizeChanged.emit(size.id);
      }
    })
  }
}

import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
import {ConnectedPosition, Overlay, OverlayRef} from "@angular/cdk/overlay";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {TemplatePortal} from "@angular/cdk/portal";
import {PopoverService} from "./popover.service";
import {Store} from "@ngrx/store";
import {selectLanguage} from "@net-boost-media/store/selectors/locale.selectors";

@Directive({
  selector: "[popoverTrigger]",
  exportAs: 'popover',
})
export class PopoverDirective implements OnDestroy, OnInit {

  @Input()
  popoverTrigger!: TemplateRef<object>;

  @Input()
  popoverContext: object;

  @Input()
  closeOnClickOutside: boolean = false;

  @Input()
  disableOpenOnClick: boolean = false;

  @Input()
  position: ConnectedPosition[] = [{
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'bottom'
  }];

  // callbacks
  @Output() onOpen = new EventEmitter<any>();
  @Output() onClose = new EventEmitter<any>();

  // destroy
  destroy$: Subject<boolean> = new Subject<boolean>();

  // overlay ref
  private overlayRef!: OverlayRef;
  lang$ = this.store.select(selectLanguage);


  constructor(
    private elementRef: ElementRef,
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    private popoverService: PopoverService,
    private store: Store,
  ) {
    this.listenToDocWrapperWidthChange();
  }

  get isOpen() {
    return !!this.overlayRef?.hasAttached();
  }

  ngOnInit(): void {
    this.createOverlay();
    this.popoverService.getState().subscribe(resp => {
      if (resp) {
        this.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.close();
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  @HostListener("click") onClick() {
    if (!this.disableOpenOnClick) {
      this.open();
    }
  }

  open(): void {
    if (!this.overlayRef.hasAttached()) {
      const periodSelectorPortal = new TemplatePortal(
        this.popoverTrigger,
        this.vcr,
        this.popoverContext
      );

      this.overlayRef.attach(periodSelectorPortal);
      this.onOpen.emit(null);
    }
  }

  close(): void {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
      this.onClose.emit(null);
    }
  }

  // width size listener
  listenToDocWrapperWidthChange() {
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const width = Math.abs(entry.target?.getBoundingClientRect().left - entry.target?.getBoundingClientRect().right);
        this.overlayRef?.updateSize({width: width});
      }
    });

    resizeObserver.observe(this.elementRef.nativeElement);
  }

  private createOverlay(): void {
    const scrollStrategy = this.overlay.scrollStrategies.block();
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions(this.position);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy,
      hasBackdrop: true,
      backdropClass: "",
      panelClass: 'custom-popover-lang'
    });

    this.overlayRef
      .backdropClick()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.closeOnClickOutside) {
          this.close();
        }
      });
  }

}

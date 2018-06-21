import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[dropZone]'
})
export class DropZoneDirective {

	@Output() dropped = new EventEmitter<FileList>();
	@Output() hovered = new EventEmitter<boolean>();

  constructor() { }

}

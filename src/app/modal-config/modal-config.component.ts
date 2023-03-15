import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal, NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-modal-config",
  templateUrl: "./modal-config.component.html",
  styleUrls: ["./modal-config.component.scss"],
})

export class NgbdModalContent {
	@Input() name: any;

	constructor(public activeModal: NgbActiveModal) {}
}

export class ModalConfigComponent {
  constructor(private modalService: NgbModal) {}

	open() {
		const modalRef = this.modalService.open(NgbdModalContent);
		modalRef.componentInstance.name = 'World';
	}
}

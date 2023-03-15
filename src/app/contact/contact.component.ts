import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  public contactInfo = {
    title: "Fale Comigo ☎️",
    subtitle:
      "DISCUTIR UM PROJETO OU SÓ QUER DIZER OI? MINHA INBOX ESTÁ ABERTA PARA TODOS.",
    email_address: "ana.nicole02@gmail.com",
  };
}

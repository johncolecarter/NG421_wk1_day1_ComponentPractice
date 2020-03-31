import { Component, OnInit } from "@angular/core";
import orders from "../orders";
import { getCurrencySymbol } from "@angular/common";

@Component({
  selector: "app-transactions-panel",
  templateUrl: "./transactions-panel.component.html",
  styleUrls: ["./transactions-panel.component.css"]
})
export class TransactionsPanelComponent implements OnInit {
  public orders: any[] = [];
  constructor() {}

  ngOnInit() {
    this.orders = orders;
  }
}

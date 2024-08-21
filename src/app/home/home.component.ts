import {Component, OnInit, ViewChild} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  @ViewChild('maVideo') maVideo: any;

  constructor() {
  }

  ngOnInit(): void {
  }
  startVideo() {
    this.maVideo.nativeElement.play();
  }
  imgUrl=[
    "boe",
    "cin",
    "goo",
    "bri",
    "3m",
    "mic",
    "atr",
    "emb",
    "bom",
    "hon",
    "ams",
    "sat",
    "air",
  ]
  services = [
    {
      icon: "bi bi-bar-chart",
      header: "OUTRIGHT SALE",
      text: "SINE AEROSPACE component is truly Nose-to-Tail solutions, covering everything " +
        "from Consumables to Rotables, Landing Gear to Engines, and all available immediately from our " +
        "expert expert AOG team our partners for outright sales to help to provide...",
      imgUrl: "assets/imgs/sale.png",
      more:"ourService#sale-section"
    },
    {
      icon: "bi bi-arrow-repeat",
      header: "LOANS AND REPAIR MANAGEMENT ",
      text: "When an aircraft part breaks down, allow our team to get you off the ground and flying confidently" +
        " with our loans and repair management services. If you’re not ready to exchange a part or invest in a new one," +
        " SINE AEROSPACE can assis...",
      imgUrl: "assets/imgs/load.png",
      more:"ourService#repair-section"
    },
    {
      icon: "bi bi-people",
      header: "AOG SERVICE",
      text: "Our AOG team is available 24/7/365" +
        "We stock thousands of line items of airworthy material that can always be dispatched within an hour." +
        " Please reach out anytime via phone or email for your urgent AOG requirements...",
      imgUrl: "assets/imgs/aog.png",
      more:"ourService#aog-section"
    },
    {
      icon: "bi bi-people",
      header: "EXCHANGE",
      text: "Through our Exchange there is no need for airlines to maintain high cost components in their inventories." +
        " All the exchange units are provided with full certification, traceability and warranty. The exchange units " +
        "...",
      imgUrl: "assets/imgs/exchange.png",
      more:"ourService#exchange-section"
    },
    {
      icon: "bi bi-people",
      header: "CONSUMABLES AND EXPENDABLES",
      text: "SINE AEROSPACE has a large and growing inventory of expendables and consumables." +
        "Our management program is designed to lower cost and increase efficiency. We are actively looking for " +
        "opportunities...",
      imgUrl: "assets/imgs/consume.png",
      more:"ourService#consume-section"
    },
    {
      icon: "bi bi-house-gear",
      header: "LEASING",
      text: "SINE AEROSPACE is a company that offers long-term leasing options for planes." +
        " This allows individuals and businesses to have access to an aircraft for an" +
        "extended period, without the need to purchase a plane outright...",
      imgUrl: "assets/imgs/leasing.png",
      more:"ourService#leasing-section"
    }
  ]
}

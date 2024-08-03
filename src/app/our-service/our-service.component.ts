import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-our-service',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.css',
})
export class OurServiceComponent {


  services = [
    {
      header: "EXCHANGE",
      icon: "bi bi-bar-chart",
      url: "/ourService#exchange-section"
    }, {
      header: "LOANS AND REPAIR MANAGEMENT",
      icon: "bi bi-gear",
      url: "/ourService#repair-section"
    }, {
      header: "OUTRIGHT SALE",
      icon: "bi bi-people",
      url: "/ourService#sale-section"
    }, {
      header: "24/7 AOG SERVICE",
      icon: "bi bi-people",
      url: "/ourService#aog-section"
    }, {
      header: "CONSUMABLES AND EXPENDABLES",
      icon: "bi bi-house-gear",
      url: "/ourService#consume-section"
    }, {
      header: "LEASING",
      icon: "bi bi-house-gear",
      url: "/ourService#leasing-section"
    },
  ]
}

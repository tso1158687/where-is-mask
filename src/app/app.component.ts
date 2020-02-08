import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "roadmap-drawer";
  lat = 25.0470782;
  lng = 121.5139071;
  locationData;
  breakpoint: number;
  iconUrl = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
  // green,yellow,red
  zoomValue = 15;
  isOpen = false;
  constructor(private appService: AppService) { }
  ngOnInit() {
    this.breakpoint = window.innerWidth <= 768 ? 1 : 3;
    this.appService.getPosition().then(e => {
      this.lat = e.lat;
      this.lng = e.lng;
    });
  }
  changeLocation(data) {
    const getCenter = data.getCenter().toJSON();
    const getNE = data.getNorthEast().toJSON();
    const getSW = data.getSouthWest().toJSON();
    const max = 30;
    this.appService
      .getMaskInformation(getCenter, getNE, getSW, max)
      .pipe(
        debounceTime(3000)
      )
      .subscribe(e => {
        this.locationData = e;
        console.log(this.locationData)
      });
  }

  markerClick(e) {
    console.log("maker click");
    e.open();
    this.isOpen = true;
  }
  onResize(event) {
    console.log("resize");
    this.breakpoint = event.target.innerWidth <= 768 ? 1 : 3;
  }
  getAddress(address) {
    let url = `https://www.google.com.tw/maps/place/${address}`;
    return url;
  }
}

import {Component, OnInit} from '@angular/core';
import {InfoService} from '../service/info.service';
import {FormControl, Validators} from '@angular/forms';
import {Doctor} from '../service/doctor';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  clicked: boolean;
  zoom = 12;
  message: string;
  docs: Doctor[];
  domains: string[];
  doc: string;
  dom: string;
  selected: boolean;
  temp: number;

  docSelected: boolean;
  domSelected: boolean;


  // initial center position for the map
  lat = -16.50613237613465;
  lng = -151.7340431269531;
  markers: Marker[] = [
    {
      lat: -16.480079570553826,
      lng: -151.74417114819335,
      label: 'Spitalul CFR',
      draggable: true
    },
    {
      lat: -16.535380375596628,
      lng: -151.74039459790038,
      label: 'Oncologie',
      draggable: false
    },
    {
      lat: -16.502135954392894,
      lng: -151.72357178295897,
      label: 'Psihiatrie',
      draggable: true
    }
  ];
  private selectFormControl: FormControl;
  flag: boolean;

  constructor(private info: InfoService) {
  }

  ngOnInit() {
    this.selected = false;
    this.temp = 0;
    this.docs = this.info.filteredDocs;
    this.domains = this.info.domain;
    this.selectFormControl = new FormControl('', Validators.required);
    this.docSelected = false;
    this.domSelected = false;
    this.flag = false;
  }

  chooseDoc(event: any) {
    this.doc = event.target.value;
    this.temp += 1;
    this.docSelected = true;
  }

  chooseDom(event: any) {
    this.dom = event.target.value;
    this.temp += 1;
    this.info.performfilter(this.dom);
    this.docs = this.info.filteredDocs;
    this.domSelected = true;
  }

  search() {
    console.log(this.docSelected + ' doc ' +  this.domSelected + ' dom');
    if (this.docSelected === true  && this.domSelected === true) {
      this.selected = true;
    } else {
      this.selected = false;
      this.flag = true;
      this.temp = 0;
      this.markers.push({
        lat: -16.49794913827828,
        lng: -151.75292587841795,
        draggable: true,
        label: this.doc.substring(1, this.doc.length) + ' works here'
      });
    }
  }

  /*FOR GGL MAPS*/
  clickedMarker(label: string, index: number, m: Marker) {
    console.log(`clicked the marker: ${label || index}`);
    this.message = label + ' is a hospital specialized in ' + this.info.domain[this.markers.indexOf(m)];
    // alert(label);
  }

  mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
    this.clicked = true;
    alert($event.coords.lat + ' ' + $event.coords.lng);
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }


  reloadPage() {
    window.location.reload();
  }
}

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;

}

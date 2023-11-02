import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent {
  @ViewChild('charsName') charsName: ElementRef | undefined;
  @ViewChild('charslst') charslst: ElementRef | undefined;
  @ViewChild('charDate') charDate: ElementRef | undefined;
  @ViewChild('charAge01') charAge01: ElementRef | undefined;
  @ViewChild('charAge02') charAge02: ElementRef | undefined;

  constructor(
    charsName: ElementRef,
    charslst: ElementRef,
    charDate: ElementRef,
    charAge01: ElementRef,
    charAge02: ElementRef
  ) {
    this.charsName = charsName;
    this.charslst = charslst;
    this.charDate = charDate;
    this.charAge01 = charAge01;
    this.charAge02 = charAge02;
  }

  namesConstraint(nombre: string) {
    if (nombre.length > 49) {
      this.charsName!.nativeElement.style.visibility = 'visible';
    } else {
      this.charsName!.nativeElement.style.visibility = 'hidden';
    }
  }

  lastNConstraint(ln: string) {
    if (ln.length > 49) {
      this.charslst!.nativeElement.style.visibility = 'visible';
    } else {
      this.charslst!.nativeElement.style.visibility = 'hidden';
    }
  }

  dateConstraint(date: string) {
    if (date.length > 0) {
      this.charDate!.nativeElement.style.visibility = 'hidden';
    } else {
      this.charDate!.nativeElement.style.visibility = 'visible';
    }
  }

  ageConstraint(age: string) {
    if (Math.trunc(parseFloat(age)) !== parseFloat(age)) {
      this.charAge01!.nativeElement.style.visibility = 'visible';
    } else if (parseFloat(age) > 9) {
      this.charAge02!.nativeElement.style.visibility = 'visible';
    } else {
      this.charAge01!.nativeElement.style.visibility = 'hidden';
      this.charAge02!.nativeElement.style.visibility = 'hidden';
    }
  }
}


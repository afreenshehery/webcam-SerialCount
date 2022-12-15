import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css'],
})
export class ShowImageComponent implements OnInit {
  constructor(private router: Router) { }
  public webcamImage: any;
  name: any;
  email: any;

  // handleImage(webcamImage: WebcamImage)
  //   this.webcamImage = webcamImage;
  // }

  ngOnInit(): void {
    this.webcamImage = localStorage.getItem('image');
    this.email = localStorage.getItem('email');
    this.name = localStorage.getItem('name');

    // location.reload();
    console.log(this.name);

    //   let stote:any
    //   for (let index = 0; index < this.webcamImage.length; index++) {
    //     stote = this.webcamImage[index];
    //     stote.forEach((element:any)=> {
    //       console.log(element);

    //   }

    // )}
  }
  hello() {
    console.log('gjhgjh');
  }
  i = 1;
  downgload() {
    console.log('23333');
    this.showPdf();
    let i = this.i++
    console.log(this.i++);

  }



  showPdf() {
    let imageName = localStorage.getItem('imageName')
    const linkSource =
      this.webcamImage;
    const downloadLink = document.createElement('a');
    const fileName = imageName + '.' + 'png';

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click()
    let data = this.i++
    console.log(data);

    this.i = data
    
    this.router.navigate(['/camra'])
  }
  reTake() {
    let i = 1
    var getImageName = localStorage.getItem('imageName')
    console.log(Number(getImageName));
    let number = Number(getImageName) - 1

    localStorage.setItem('imageName', number.toString());
    this.router.navigate(['/camra'])
    // this.router.navigate
  }

}

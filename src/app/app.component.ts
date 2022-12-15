import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webcamApp';
  //  // latest snapshot
  //  public webcamImage:any= WebcamImage ;

  //  handleImage(webcamImage: WebcamImage) {
  //    this.webcamImage = webcamImage;
  ngOnInit(): void {

    var number = 0;
    localStorage.setItem('imageName', number.toString());
  }

}
// }

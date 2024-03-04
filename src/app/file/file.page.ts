import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {

  data: any = [];
  data_books: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/v3/b/65e52a5f1f5677401f37f717'

  loading: any;

  max: number = 0;
  min: number = 100;

  constructor(public loadingController: LoadingController) { }
  
  async load() {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Loading...'
    });
    await this.loading.present();

    fetch(this.dataUrl).then(res => res.json())
      .then(json => {
        this.data_books = [];
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        console.log(this.data[1]);
        while (this.data[i] != undefined) {
          this.data_books.push(this.data[i][0]);
          i++;
        }
        this.loading.dismiss();
    })
  }

  toggleDetails(i: number) {
    if (this.showDetails[i]) {
      this.showDetails[i] = false;
    }
    else {
      this.showDetails[i] = true;
    }
  }

  getColor(name: string, data: any) {
    let data_name: string = <string>data;
    return name == data_name ? 'green' : '';
  }

  ngOnInit() {
  }

}

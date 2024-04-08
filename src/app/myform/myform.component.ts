import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Newspaper } from './Class/Newspaper';
import { dateValidator } from './validatorDate/dateValidator';
import { ValidatorToCurrentDateService } from './validatorDate/validator-to-current-date.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent  implements OnInit {

  newspaperForm!: FormGroup;
  newspaper!: Newspaper;
  //перервірка дати???
  constructor(private fb: FormBuilder, private alertController: AlertController) {
    this.newspaperForm = this.fb.group({
      npName: ['', [Validators.required]],
      npNum: ['', [Validators.required, Validators.minLength(1), Validators.minLength(20)]],
      npDate: ['', [dateValidator()]], //перервірка дати???
      npPages: ['', [Validators.min(1), Validators.max(100)]],
      npList: new FormArray([new FormControl()]), //список статтей
    });
  }
  
  addArticle() {
    (this.newspaperForm.controls['npList'] as FormArray).push( new FormControl() )
  }

  deleteArticle(i: any) {
    (this.newspaperForm.controls['npList'] as FormArray).removeAt(i);
  }

  getControls() {
    return (this.newspaperForm.get('npList') as FormArray).controls;
  }

  onSubmit() {
    let name = this.newspaperForm.value.npName;
    let num = this.newspaperForm.value.npNum;
    let date = this.newspaperForm.value.npDate;
    let pages = this.newspaperForm.value.npPages;
    let articles = this.newspaperForm.value.npList;
    let valid = new ValidatorToCurrentDateService();
    if (valid.isDateBeforeToday(date)) {
      this.newspaper = new Newspaper(name, num, date, pages, articles);
      console.log("Submit");
      console.log(this.newspaper);
      this.newspaperForm.reset();
    }
    else
      this.presentAlert("Дата публікації має бути раніше, за сьогоднішній день");

  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Помилка',
      subHeader: '',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {}

}

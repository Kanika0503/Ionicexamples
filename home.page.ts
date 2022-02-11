import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  
  public name:any='';
  
  users = [
        { Name: 'Mahir', im:'assets/demo.jfif',marks:'95',course: 'CAP915', Regno: '11980565'},
        { Name: 'ibrahim',im:'assets/fruits.jfif',marks:'61', course: 'CAP280', Regno: '11908568' },
        { Name: 'ayush', im:'assets/OIP.jfif',marks:'36',course: 'CAP392', Regno: '11917896' },
        { Name: 'mehak', im:'assets/demo.jfif',marks:'47',course: 'CAP486', Regno: '11912630' },
        { Name: 'Joy', im:'assets/demo.jfif',marks:'78',course: 'CAP615', Regno: '11914523' }
    ];

OpenUrl() {
    window.open("https://ums.lpu.in/lpuums/");
      }
      Open2(){
        if(this.name=="student")
        {
window.open("/newpage1");
}
else
{
window.open("https://ums.lpu.in/lpuums/");
    }
      }

student=[
{name:'joydeeb',rollno:'105',course:'cap915'},
{name:'Bivek',rollno:'561',course:'cap914'},
{name:'namrata',rollno:'283',course:'cap916'}
];


}




import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  template: `
  <div align="center">
  <img width="100" src="https://5018.jpg" alt='logo' >
    
 <h2> LOGIN</h2><br>
   <table border=0 height="200" width="400" >
   
<div align="center" top-margin ="100">          
<input type="text" [(ngModel)]="id" align="center"  placeholder="Enter Username" #id1><br>
<input type= "password" [(ngModel)]="user" align="center"   placeholder="Enter Password" #use1><br>
<br><button (click)="goToMenu(id1.value,use1.value)"  type="submit"  >SUBMIT</button>
</div>
</table>
</div>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  public id;
  public user;
  constructor(private route: Router) { }

  ngOnInit() {
  }
  goToMenu(user, pass) {
    console.log(user);
    console.log(pass);
    if (user == pass && user != '' && pass != '') {

      this.route.navigate(['/web/dashboard']);
    }
    else if (user == '' && pass == '') {
      window.alert("Please Fill The Username And Password");
    }
    else if (user == '') {
      window.alert("Please Fill The Username");
    }
    else if (pass == '') {
      window.alert("Please Fill The Password");
    }

    else {
      window.alert("Invalid Credentials");
    }
  }
}




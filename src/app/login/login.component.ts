import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }
  private userName = '';
  private password = '';
  private name: any
  ngOnInit(): void {
  }

  doLogin() {
    const requestParams = new FormData();
    requestParams.append('username', 'testing');
    requestParams.append('password', 'Test@Test');
console.log('req params', requestParams)
    this.loginService.doLogin(requestParams).subscribe(
      (result) => {
        console.log('Response of API', result);
      },
      (error) => {
        console.log('Response of API', error)
      }
    )
  }
}

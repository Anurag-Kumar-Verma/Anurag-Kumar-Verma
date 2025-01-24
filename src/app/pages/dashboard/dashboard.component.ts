import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  auth = inject(AuthService);
  private location = inject(PlatformLocation);

  constructor(){
    const tokenVal = this.auth.currentToken();
    const {token, userId, observeToken} = tokenVal();
    console.log(tokenVal().userId, tokenVal().userId);
    observeToken.subscribe({
      next: (value) => {
        console.info("token value: ", value);
      },
    });
  }
}

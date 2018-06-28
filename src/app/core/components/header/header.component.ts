import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	navbarCollapsed = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
  	this.authService.logout();
  }

}

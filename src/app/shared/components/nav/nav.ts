import { Component } from '@angular/core';
import { MatSidenavModule, MatDrawerContainer } from '@angular/material/sidenav';
import { MatDrawer, MatDrawerContent } from "../../../../../node_modules/@angular/material/sidenav/index";

@Component({
  selector: 'app-nav',
  imports: [MatDrawerContainer, MatDrawer, MatDrawerContent],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {

}

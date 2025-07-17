import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './components/login/login';
import { Nav } from './shared/components/nav/nav';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}

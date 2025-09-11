import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainNavComponent } from "./main-nav/main-nav.component";




@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'shubhamWorkspace';


}

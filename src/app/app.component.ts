import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,UserComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'   
})
export class AppComponent {
 userOcuppation : string ="Developer";

 childMessage:string= "";
 
 reciveEmision($event : string) :void{
  this.childMessage =$event;
 }

}

import { OperatingSystemsService } from './../../core/operating-systems.service';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { OperatingSystem } from '../../intercaces/operating-system';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-Component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  operatingSystemsService:OperatingSystemsService = inject(OperatingSystemsService)
  operatingSystems:OperatingSystem[] = this.operatingSystemsService.getOperatingSystems();

  username : string = "Pedro";
  doesUserExist: boolean = true;

  @Output() greets:EventEmitter<string> = new EventEmitter<string>();


  @Input() occupation:string = "";

  // operatingSystems :OperatingSystem[]= [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];

  isEditable:Boolean =true;

  onMouseOver(osName : string):void{
    console.log(osName)
  }

  greet(){
    console.log('Helllo, there')
  }

  emitToParent():void{
    this.greets.emit("Hi'! I'm your child")
  }

}

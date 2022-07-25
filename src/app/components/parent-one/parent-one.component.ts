import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ChildOneComponent } from '../child-one/child-one.component';
@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements OnInit,AfterViewInit {

  msgFromParent = "Hi from daddy";
  message:string='';

  @ViewChild(ChildOneComponent) child:any;

  constructor(private cdref:ChangeDetectorRef) { }
  ngAfterViewInit(): void {

    this.message=this.child.childprop;
    this.cdref.detectChanges();

    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}

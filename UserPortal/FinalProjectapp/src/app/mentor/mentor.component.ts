import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { MentorService } from './mentor.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styles: []
})
export class MentorComponent implements OnInit {
   editField:ConstantSourceNode;
   private act:string = null;
  mentors: Mentor[];
  mentor: Mentor = new Mentor();

  constructor(private router: Router, private mentorService: MentorService) {

  }
  // updateList(mentorId: number, property: string, event: any) {
  //    this.editField = event.target.textContent;
  //   this.mentors[mentorId][property] = this.editField;
  // }

  updateUser(mentor):void{
    this.mentorService.updateUser(mentor).subscribe(data => {
      alert(mentor.active);
    })
  }

  changeValue(mentorId: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
  ngOnInit() {
    this.mentorService.activeData()
      .subscribe( data => {

        this.mentors = data;
      });
  };

  deleteUser(mentor: Mentor): void {
    this.mentorService.deleteUser(mentor)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== mentor);
      })
  };

}



import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css', ]
})
export class UserDetailsComponent implements OnInit {
  constructor() { }

  @Output() toggleShowEditForm = new EventEmitter<boolean>();
  @Input() propList!: {};

  showForm: boolean = false;

  ngOnInit(): void {
  }

  onClickToggleShowEditForm() {
    this.showForm = !this.showForm;
    this.toggleShowEditForm.emit(this.showForm);
  }

}

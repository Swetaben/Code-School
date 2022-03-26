import { Component, OnInit } from '@angular/core';
import { Timesheetitems } from '../models/timesheet.model';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  timesheetitems: Array<Timesheetitems> = [{ department: 1, wp: 'hi', total: 2, monday: 8, tuesday: 8, wednesday: 8, thursday: 8, friday: 8, saturday: 8, sunday: 8, notes: 'nn' },
  { department: 2, wp: 'yes', total: 2, monday: 8, tuesday: 8, wednesday: 8, thursday: 8, friday: 8, saturday: 8, sunday: 8, notes: 'tbd' },
  { department: 3, wp: 'no', total: 2, monday: 8, tuesday: 8, wednesday: 8, thursday: 8, friday: 8, saturday: 8, sunday: 8, notes: 'done' },
  { department: 4, wp: 'no', total: 2, monday: 8, tuesday: 8, wednesday: 8, thursday: 8, friday: 8, saturday: 8, sunday: 8, notes: 'done' },
  { department: 5, wp: 'no', total: 2, monday: 8, tuesday: 8, wednesday: 8, thursday: 8, friday: 8, saturday: 8, sunday: 8, notes: 'success' },
  { department: 6, wp: 'no', total: 2, monday: 8, tuesday: 8, wednesday: 8, thursday: 8, friday: 8, saturday: 8, sunday: 8, notes: '222' },
  { department: 7, wp: 'yes', total: 2, monday: 8, tuesday: 8, wednesday: 8, thursday: 8, friday: 8, saturday: 8, sunday: 8, notes: 'pending' },
  { department: 7, wp: 'no', total: 2, monday: 8, tuesday: 8, wednesday: 8, thursday: 8, friday: 8, saturday: 8, sunday: 8, notes: 'tbd' },
  { department: 8, wp: 'yes', total: 2, monday: 8, tuesday: 8, wednesday: 8, thursday: 8, friday: 8, saturday: 8, sunday: 8, notes: 'done' },
  { department: 9, wp: 'no', total: 2, monday: 8, tuesday: 8, wednesday: 8, thursday: 8, friday: 8, saturday: 8, sunday: 8, notes: 'done' },
  { department: 2, wp: 'yes', total: 2, monday: 8, tuesday: 8, wednesday: 8, thursday: 8, friday: 8, saturday: 8, sunday: 8, notes: 'tbd' }];

  btnClass: string = "btn btn-secondary";
  btnSaveClass: string = "btn btn-success";
  addBtnValue: string = "Add";
  saveBtnValue: string = "Save";
  // firstString: string = " TRUck";
  // todayDate: Date = new Date();
  // myCurrency: number = 2243;
  constructor() { }

  ngOnInit(): void {
  }

  addTimeSheetItem() {
    this.timesheetitems.push({ department: 5, wp: 'hi', total: 2, monday: 8, tuesday: 8, wednesday: 8, thursday: 8, friday: 8, saturday: 8, sunday: 8, notes: 'test - add' })
  }

  deleteTimeSheetItem() {
    this.timesheetitems.pop();
  }
}

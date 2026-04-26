import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ChildService, GroupData } from '../../../core/child/child.service';
@Component({
  selector: 'group',
  imports: [
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule


  ],
  templateUrl: './group.html',
  styleUrl: './group.scss',
})
export class Group implements OnInit {

  private childService = inject(ChildService);


  groups: GroupData[] = [];

  ngOnInit(): void {

    this.childService.getGroups().subscribe({
      next: (groups) => this.groups = groups,
      error: (err) => console.error(err)
    });

  }

}

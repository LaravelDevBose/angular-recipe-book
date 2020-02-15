import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
    id: number;
    editMode = false;
  constructor(
      private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe(
          (params) => {
              this.id = +params.id;
              this.editMode = params.id != null;
              console.log(this.editMode);
          }
      );
  }

}

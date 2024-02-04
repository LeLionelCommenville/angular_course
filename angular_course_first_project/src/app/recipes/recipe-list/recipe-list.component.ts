import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Bouilla', 'this is bouilla', 'https://img.freepik.com/photos-gratuite/steak-boeuf-grille-tranches-servi-salade-verte-aux-oeufs_140725-5065.jpg?w=740&t=st=1707055013~exp=1707055613~hmac=bc6af0c93ac1fd464fe23ac0a18642415223910252386cc19c6e199aa1cc5e6d'),
    new Recipe('Bouilla', 'this is bouilla', 'https://img.freepik.com/photos-gratuite/steak-boeuf-grille-tranches-servi-salade-verte-aux-oeufs_140725-5065.jpg?w=740&t=st=1707055013~exp=1707055613~hmac=bc6af0c93ac1fd464fe23ac0a18642415223910252386cc19c6e199aa1cc5e6d')
  ];
}

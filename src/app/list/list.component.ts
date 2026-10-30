import { Component } from '@angular/core';
import { ComicService } from '../comic.service';
import { Comic } from '../../Models/Comic';
@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor(private comicService: ComicService) {}
  comics: Comic[] = [];
  getComics() {
    this.comicService.getComics().subscribe((comic) => (this.comics = comic));
  }
}

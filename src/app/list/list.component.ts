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
    this.comicService.getComics().subscribe((comics) => (this.comics = comics));
  }
  deleteComic(id: number) {
    this.comicService
      .deleteComic(id)
      .subscribe(() => (this.comics = this.comics.filter()));
  }
}

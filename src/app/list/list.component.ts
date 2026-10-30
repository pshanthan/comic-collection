import { Component, OnInit } from '@angular/core';
import { ComicService } from '../comic.service';
import { Comic } from '../../Models/Comic';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  constructor(private comicService: ComicService) {}
  comics: Comic[] = [];
  comicForm = new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    publisher: new FormControl('', { nonNullable: true }),
    issueNumber: new FormControl('', { nonNullable: true }),
    releaseDate: new FormControl('', { nonNullable: true }),
    value: new FormControl('', { nonNullable: true }),
    graded: new FormControl(false, { nonNullable: true }),
  });
  ngOnInit(): void {
    this.getComics();
  }
  getComics() {
    this.comicService.getComics().subscribe((comics) => (this.comics = comics));
  }
  deleteComic(id: number) {
    this.comicService
      .deleteComic(id)
      .subscribe(() => (this.comics = this.comics.filter((c) => c.id !== id)));
  }
}

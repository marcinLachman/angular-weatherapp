import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Input() error!: boolean;
  @Output() OnSearchCity: EventEmitter<string> = new EventEmitter();
  search: string = '';
  onSubmit() {
    if (!this.search) {
      alert('Pole jest puste');
    }
    const search = this.search;
    this.OnSearchCity.emit(search);
    this.search = '';
  }
}

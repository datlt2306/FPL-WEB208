import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SearchService } from './search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchControl = new FormControl('');
    searchResults: any[] = [];
    isLoading = false;
    noResults = false;

    constructor(private searchService: SearchService) { }

    ngOnInit(): void {
        this.searchControl.valueChanges.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap(term => {
                if (!term || term.length < 2) {
                    this.searchResults = [];
                    this.noResults = false;
                    return [];
                }
                this.isLoading = true;
                return this.searchService.search(term);
            })
        ).subscribe({
            next: (results) => {
                this.searchResults = results;
                this.noResults = results.length === 0;
                this.isLoading = false;
            },
            error: () => {
                this.searchResults = [];
                this.isLoading = false;
            }
        });
    }

    clearSearch(): void {
        this.searchControl.setValue('');
        this.searchResults = [];
        this.noResults = false;
    }
}

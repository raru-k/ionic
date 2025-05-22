import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  readonly _tags = signal<string[]>([
    'Angular',
    'Ionic',
    'React',
    'Vue',
    'Svelte',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Firebase',
    'GraphQL'
  ]);
  get tags(){
    return this._tags();
  }
  
}

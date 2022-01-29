
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface'

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
  this.composers = [
    {
      composerId: 100,
      fullName: 'Kurt Cobain',
      genre: 'Grunge',
    },
    {
      composerId: 101,
      fullName: 'Eddie Vedder',
      genre: 'Grunge',
    },
    {
      composerId: 102,
      fullName: 'Chris Cornell',
      genre: 'Grunge',
    },
    {
      composerId: 103,
      fullName: 'Layne Staley',
      genre: 'Grunge',
    },
    {
      composerId: 104,
      fullName: 'Adam Yauch',
      genre: 'Hip Hop',
    },
  ];
}

getComposers() {
  return this.composers;
}

getComposer(composerId: number) : IComposer {
  for (let composer of this.composers) {
    if (composer.composerId === composerId) {
      return composer;
    }
  }
  return {} as IComposer;
}
}


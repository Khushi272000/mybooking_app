import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  // tslint:disable-next-line:variable-name
  private _places: Place[] = [
    new Place(
      'p1',
      'Barcelona, Spain',
      'A Beautiful City In Spain.',
      'https://www.tripsavvy.com/thmb/Y5PHNy8w8iMtUNqpDFRFc434jjQ=/2121x1414/filters:fill(auto,1)/aerial-view-of-barcelona-skyline-with-sagrat-cor-temple--catalonia--spain-1143273440-c61c8aace05d457c8a8471ae46eee354.jpg',
      249.99
    ),
    new Place(
      'p2',
      "Maldives",
      'gorgeous island for high-end romance',
      'https://cache.marriott.com/marriottassets/marriott/MLEWH/mlewh-wow-oceanhaven-1800-hor-feat.jpg',
      169.99
    ),
    new Place(
      'p3',
      'Switzerland',
      'Heart Of Europe',
      'https://lonelyplanetwpnews.imgix.net/2018/02/Zurich-Switzerland.jpg',
      144.99
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}

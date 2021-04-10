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
      'Taj Mahal',
      'The Symbol Of Eternal Love.',
      'https://miro.medium.com/max/3200/1*jJvbUt3kWjAElnKjy1wHPg.jpeg',
      169.99
    ),
    new Place(
      'p2',
      'Udaipur',
      'City Of Lakes',
      'https://res-1.cloudinary.com/enchanting/f_auto/et-web/2015/05/Enchanting-Travels-India-Tours-Udaipur-Palace.jpg',
      249.49
    ),
    new Place(
      'p3',
      'Kullu-Manali',
      'A Beautiful Hill Station',
      'https://kullumanali.org/wp-content/uploads/2018/11/5-Best-Caf%C3%A9s-Offering-Incredible-Views-of-Manali.jpg',
      174.99
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

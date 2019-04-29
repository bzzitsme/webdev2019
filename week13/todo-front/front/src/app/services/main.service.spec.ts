import { TestBed } from '@angular/core/testing';

import { MainService } from './main.service';

describe('MainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainService = TestBed.get(MainService);
    expect(service).toBeTruthy();
  });
});



// not workin
// import { TestBed, inject } from '@angular/core/testing';

// import { MainService } from './main.service';

// describe('MainService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [MainService]
//     });
//   });

//   it('should be created', inject([MainService], (service: MainService) => {
//     expect(service).toBeTruthy();
//   }));
// });
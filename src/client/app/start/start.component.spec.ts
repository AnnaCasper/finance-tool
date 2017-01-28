import { FormsModule } from '@angular/forms';
import {
  async,
  TestBed
 } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { StartComponent } from './start.component';
import { NameListService } from '../shared/name-list/name-list.service';

export function main() {
  describe('Start component', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [StartComponent],
        providers: [
          { provide: NameListService, useValue: new MockNameListService() }
        ]
      });

    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(StartComponent);
            let startInstance = fixture.debugElement.componentInstance;
            let startDOMEl = fixture.debugElement.nativeElement;
            let mockNameListService = <MockNameListService>fixture.debugElement.injector.get(NameListService);
            let nameListServiceSpy = spyOn(mockNameListService, 'get').and.callThrough();

            mockNameListService.returnValue = ['1', '2', '3'];

            fixture.detectChanges();

            expect(startInstance.nameListService).toEqual(jasmine.any(MockNameListService));
            expect(startDOMEl.querySelectorAll('li').length).toEqual(3);
            expect(nameListServiceSpy.calls.count()).toBe(1);

            startInstance.newName = 'Minko';
            startInstance.addName();

            fixture.detectChanges();

            expect(startDOMEl.querySelectorAll('li').length).toEqual(4);
            expect(startDOMEl.querySelectorAll('li')[3].textContent).toEqual('Minko');
          });

      }));
  });
}

class MockNameListService {

  returnValue: string[];

  get(): Observable<string[]> {
    return Observable.create((observer: any) => {
      observer.next(this.returnValue);
      observer.complete();
    });
  }
}

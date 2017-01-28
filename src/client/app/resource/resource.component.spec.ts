import { FormsModule } from '@angular/forms';
import {
  async,
  TestBed
 } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { ResourceComponent } from './resource.component';
import { NameListService } from '../shared/name-list/name-list.service';

export function main() {
  describe('Resource component', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [ResourceComponent],
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
            let fixture = TestBed.createComponent(ResourceComponent);
            let resourceInstance = fixture.debugElement.componentInstance;
            let resourceDOMEl = fixture.debugElement.nativeElement;
            let mockNameListService = <MockNameListService>fixture.debugElement.injector.get(NameListService);
            let nameListServiceSpy = spyOn(mockNameListService, 'get').and.callThrough();

            mockNameListService.returnValue = ['1', '2', '3'];

            fixture.detectChanges();

            expect(resourceInstance.nameListService).toEqual(jasmine.any(MockNameListService));
            expect(resourceDOMEl.querySelectorAll('li').length).toEqual(3);
            expect(nameListServiceSpy.calls.count()).toBe(1);

            resourceInstance.newName = 'Minko';
            resourceInstance.addName();

            fixture.detectChanges();

            expect(resourceDOMEl.querySelectorAll('li').length).toEqual(4);
            expect(resourceDOMEl.querySelectorAll('li')[3].textContent).toEqual('Minko');
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

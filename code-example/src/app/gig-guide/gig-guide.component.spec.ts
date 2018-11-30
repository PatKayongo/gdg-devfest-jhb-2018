import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GigGuideComponent } from './gig-guide.component';
import { FormInputComponent } from './form-input.component';
import { MockComponent } from 'ng-mocks';
import { GigCreationService } from './gig-creation.service';

describe('Gig Guide', () => {
  let fixture: ComponentFixture<GigGuideComponent>;
  const gigCreationMock = {
    createNewGig: jasmine.createSpy()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GigGuideComponent, MockComponent(FormInputComponent)
      ],
      providers: [ { provide: GigCreationService, useValue: gigCreationMock } ]
    }).compileComponents().then(() => fixture = TestBed.createComponent(GigGuideComponent));
  }));

  it('should send the details submitted on the form to a service', () => {
    fixture.debugElement
      .query(By.css('app-form-input'))
      .triggerEventHandler('change', { value: 'Jack' });

    fixture.debugElement
      .query(By.css('button'))
      .triggerEventHandler('click', {});

    expect(gigCreationMock.createNewGig).toHaveBeenCalledWith({ name: 'Jack' });

  });
});

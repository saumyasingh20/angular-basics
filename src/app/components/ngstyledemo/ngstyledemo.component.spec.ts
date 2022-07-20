import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstylenclassdemoComponent } from './ngstyledemo.component';

describe('NgstylenclassdemoComponent', () => {
  let component: NgstylenclassdemoComponent;
  let fixture: ComponentFixture<NgstylenclassdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgstylenclassdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgstylenclassdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

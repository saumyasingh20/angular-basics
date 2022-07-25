import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttwoComponent } from './parenttwo.component';

describe('ParenttwoComponent', () => {
  let component: ParenttwoComponent;
  let fixture: ComponentFixture<ParenttwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParenttwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParenttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

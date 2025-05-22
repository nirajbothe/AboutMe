import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcedemicsComponent } from './acedemics.component';

describe('AcedemicsComponent', () => {
  let component: AcedemicsComponent;
  let fixture: ComponentFixture<AcedemicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcedemicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcedemicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

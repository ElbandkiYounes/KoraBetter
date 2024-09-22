import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcheDetailsComponent } from './matche-details.component';

describe('MatcheDetailsComponent', () => {
  let component: MatcheDetailsComponent;
  let fixture: ComponentFixture<MatcheDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatcheDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatcheDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

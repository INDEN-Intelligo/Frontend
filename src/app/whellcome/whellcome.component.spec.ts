import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhellcomeComponent } from './whellcome.component';

describe('WhellcomeComponent', () => {
  let component: WhellcomeComponent;
  let fixture: ComponentFixture<WhellcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhellcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhellcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

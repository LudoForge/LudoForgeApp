import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriviUnMessaggioComponentComponent } from './scrivi-un-messaggio-component.component';

describe('ScriviUnMessaggioComponentComponent', () => {
  let component: ScriviUnMessaggioComponentComponent;
  let fixture: ComponentFixture<ScriviUnMessaggioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriviUnMessaggioComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScriviUnMessaggioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

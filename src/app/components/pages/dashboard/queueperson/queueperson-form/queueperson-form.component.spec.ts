import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuepersonFormComponent } from './queueperson-form.component';

describe('QueuepersonFormComponent', () => {
  let component: QueuepersonFormComponent;
  let fixture: ComponentFixture<QueuepersonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueuepersonFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueuepersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

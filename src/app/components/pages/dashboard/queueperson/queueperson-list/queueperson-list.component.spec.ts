import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuepersonListComponent } from './queueperson-list.component';

describe('QueuepersonListComponent', () => {
  let component: QueuepersonListComponent;
  let fixture: ComponentFixture<QueuepersonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueuepersonListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueuepersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

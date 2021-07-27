import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorretorItemComponent } from './corretor-item.component';

describe('CorretorItemComponent', () => {
  let component: CorretorItemComponent;
  let fixture: ComponentFixture<CorretorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorretorItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorretorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

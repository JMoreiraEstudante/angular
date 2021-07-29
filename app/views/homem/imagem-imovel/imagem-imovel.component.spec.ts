import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemImovelComponent } from './imagem-imovel.component';

describe('ImagemImovelComponent', () => {
  let component: ImagemImovelComponent;
  let fixture: ComponentFixture<ImagemImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagemImovelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

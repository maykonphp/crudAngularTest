import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraProdutosComponent } from './cadastra-produtos.component';

describe('CadastraProdutosComponent', () => {
  let component: CadastraProdutosComponent;
  let fixture: ComponentFixture<CadastraProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

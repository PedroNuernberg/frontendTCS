import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdensproducaoComponent } from './ordensproducao.component';

describe('OrdensproducaoComponent', () => {
  let component: OrdensproducaoComponent;
  let fixture: ComponentFixture<OrdensproducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdensproducaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdensproducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

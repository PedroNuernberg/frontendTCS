import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdensproducaoFormComponent } from './ordensproducao-form.component';

describe('OrdensproducaoFormComponent', () => {
  let component: OrdensproducaoFormComponent;
  let fixture: ComponentFixture<OrdensproducaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdensproducaoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdensproducaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

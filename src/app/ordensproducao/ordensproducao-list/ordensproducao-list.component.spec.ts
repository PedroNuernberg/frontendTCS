import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdensproducaoListComponent } from './ordensproducao-list.component';

describe('OrdensproducaoListComponent', () => {
  let component: OrdensproducaoListComponent;
  let fixture: ComponentFixture<OrdensproducaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdensproducaoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdensproducaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

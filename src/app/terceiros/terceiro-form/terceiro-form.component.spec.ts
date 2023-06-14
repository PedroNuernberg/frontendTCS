import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroFormComponent } from './terceiro-form.component';

describe('TerceiroFormComponent', () => {
  let component: TerceiroFormComponent;
  let fixture: ComponentFixture<TerceiroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceiroFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerceiroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

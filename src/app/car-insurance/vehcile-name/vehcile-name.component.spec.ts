import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehcileNameComponent } from './vehcile-name.component';

describe('VehcileNameComponent', () => {
  let component: VehcileNameComponent;
  let fixture: ComponentFixture<VehcileNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehcileNameComponent]
    });
    fixture = TestBed.createComponent(VehcileNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

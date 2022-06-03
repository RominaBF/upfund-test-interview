import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RominaxComponent } from './rominax.component';

describe('RominaxComponent', () => {
  let component: RominaxComponent;
  let fixture: ComponentFixture<RominaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RominaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RominaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

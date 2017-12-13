import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployeComponent } from './deploye.component';

describe('DeployeComponent', () => {
  let component: DeployeComponent;
  let fixture: ComponentFixture<DeployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

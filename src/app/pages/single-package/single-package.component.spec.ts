import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePackageComponent } from './single-package.component';

describe('SinglePackageComponent', () => {
  let component: SinglePackageComponent;
  let fixture: ComponentFixture<SinglePackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

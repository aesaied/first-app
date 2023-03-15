import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBox2Component } from './my-box2.component';

describe('MyBox2Component', () => {
  let component: MyBox2Component;
  let fixture: ComponentFixture<MyBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBox2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

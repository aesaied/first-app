import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStrListComponent } from './my-str-list.component';

describe('MyStrListComponent', () => {
  let component: MyStrListComponent;
  let fixture: ComponentFixture<MyStrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyStrListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyStrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

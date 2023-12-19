import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLuchadorComponent } from './add-luchador.component';

describe('AddLuchadorComponent', () => {
  let component: AddLuchadorComponent;
  let fixture: ComponentFixture<AddLuchadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLuchadorComponent]
    });
    fixture = TestBed.createComponent(AddLuchadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

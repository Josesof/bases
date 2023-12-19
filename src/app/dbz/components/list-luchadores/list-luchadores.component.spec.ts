import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLuchadoresComponent } from './list-luchadores.component';

describe('ListLuchadoresComponent', () => {
  let component: ListLuchadoresComponent;
  let fixture: ComponentFixture<ListLuchadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListLuchadoresComponent]
    });
    fixture = TestBed.createComponent(ListLuchadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

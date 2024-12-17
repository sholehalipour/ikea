import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkeafamilyComponent } from './ikeafamily.component';

describe('IkeafamilyComponent', () => {
  let component: IkeafamilyComponent;
  let fixture: ComponentFixture<IkeafamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IkeafamilyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IkeafamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

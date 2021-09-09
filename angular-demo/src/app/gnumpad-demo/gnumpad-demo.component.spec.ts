import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GNumpadDemoComponent } from './gnumpad-demo.component';

describe('GNumpadDemoComponent', () => {
  let component: GNumpadDemoComponent;
  let fixture: ComponentFixture<GNumpadDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GNumpadDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GNumpadDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

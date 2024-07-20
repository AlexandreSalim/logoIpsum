import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoIpsumComponent } from './logo-ipsum.component';

describe('LogoIpsumComponent', () => {
  let component: LogoIpsumComponent;
  let fixture: ComponentFixture<LogoIpsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoIpsumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoIpsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

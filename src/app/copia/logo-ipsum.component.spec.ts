import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoIpsumCopiaComponent } from './logo-ipsum.component';

describe('LogoIpsumComponent', () => {
  let component: LogoIpsumCopiaComponent;
  let fixture: ComponentFixture<LogoIpsumCopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoIpsumCopiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoIpsumCopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

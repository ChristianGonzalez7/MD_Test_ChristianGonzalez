import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ServiceService } from './service.service';

describe('LoginComponent', () => {
  let component: ServiceService;
  let fixture: ComponentFixture<ServiceService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule ,HttpClientTestingModule],
      declarations: [ ServiceService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fdescribe("test for login function", () => {
    it("should return true", () => {
        localStorage.setItem('a', 'a');
        const resolve = component.login('a', 'a');

        expect(resolve).toEqual(true);
    })
  })
});

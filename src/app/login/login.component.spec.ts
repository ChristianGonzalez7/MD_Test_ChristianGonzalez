import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dataLoading should be set as false', () => {
      expect(component.dataLoading).toEqual(false);
  })

  it('dataLoading should still be false after executing callLogin', fakeAsync(() => {
    component.callLogin();
    tick(1000);
    expect(component.dataLoading).toEqual(false);
    }));

  it('localstorage value of logged should not exist', () => {
    localStorage.clear();
    expect(localStorage.getItem('logged')).toEqual(null);
    })

  it('callLogin should not set localstorage value of logged key', fakeAsync(() => {
    component.username = 'a';
    component.password = 'b';
    localStorage.setItem('a','a');
    component.callLogin();
    tick(1000);
    const result = localStorage.getItem('logged');
    expect(result).toEqual(null);
    }));


});
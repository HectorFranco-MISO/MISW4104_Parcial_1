/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should have a <header> element', () => {
    const header = fixture.nativeElement.querySelectorAll('header');
    expect(header.length).toBe(1);
  });

  it('Should have a <h1> element', () => {
    const h1 = fixture.nativeElement.querySelectorAll('h1');
    expect(h1.length).toBe(1);
  });

  it('Should have an <img> element', () => {
    const img = fixture.nativeElement.querySelectorAll('img');
    expect(img.length).toBe(1);
  });

  it(`should render title <h1> 'El aroma màgico <h1>'`, () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('El aroma mágico');
  });
});

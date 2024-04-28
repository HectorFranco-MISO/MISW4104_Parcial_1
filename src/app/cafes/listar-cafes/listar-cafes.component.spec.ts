/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ListarCafesComponent } from './listar-cafes.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CafeService } from '../service/cafe.service';
import { Cafe } from '../model/Cafe';

describe('ListarCafesComponent', () => {
  let component: ListarCafesComponent;
  let fixture: ComponentFixture<ListarCafesComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCafesComponent],
      imports: [HttpClientTestingModule],
      providers: [CafeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.cafes = [
      new Cafe(
        faker.number.int({ min: 1, max: 100 }),
        faker.word.conjunction(),
        faker.word.conjunction(),
        faker.location.city(),
        faker.word.interjection(),
        faker.number.int({ min: 300, max: 3000 }),
        faker.internet.url()
      )
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Shoukd have a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

  it('should have a <dd> element ', () => {
    const dd = debug.query(By.css('dd'));
    const content: HTMLElement = dd.nativeElement;
    expect(content.textContent).toEqual(component.cafes[0].id.toString())
  });

  it('Should have two paragraphs <p> elements', () => {
    const paragrahs = fixture.nativeElement.querySelectorAll('p');
    expect(paragrahs.length).toBe(2);
    expect(paragrahs[0].textContent).toMatch('origen')
    expect(paragrahs[1].textContent).toMatch('blend')
  });

});

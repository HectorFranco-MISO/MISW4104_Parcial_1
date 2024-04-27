/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarCafesComponent } from './listar-cafes.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CafeService } from '../service/cafe.service';

describe('ListarCafesComponent', () => {
  let component: ListarCafesComponent;
  let fixture: ComponentFixture<ListarCafesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCafesComponent ],
      imports: [HttpClientTestingModule], 
      providers: [CafeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

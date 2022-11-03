import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPeliculasComponent } from './buscar-peliculas.component';

describe('BuscarPeliculasComponent', () => {
  let component: BuscarPeliculasComponent;
  let fixture: ComponentFixture<BuscarPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

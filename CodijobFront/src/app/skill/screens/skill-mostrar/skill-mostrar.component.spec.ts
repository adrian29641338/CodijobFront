import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMostrarComponent } from './skill-mostrar.component';

describe('SkillMostrarComponent', () => {
  let component: SkillMostrarComponent;
  let fixture: ComponentFixture<SkillMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

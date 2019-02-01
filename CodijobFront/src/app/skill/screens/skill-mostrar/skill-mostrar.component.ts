import { Component, OnInit, ViewChild } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { Skill } from '../../Skill';

@Component({
  selector: 'app-skill-mostrar',
  templateUrl: './skill-mostrar.component.html',
  styleUrls: ['./skill-mostrar.component.css']
})
export class SkillMostrarComponent implements OnInit {

  @ViewChild('inputSkillId') inputSkillId;
  @ViewChild('inputSkillNom') inputSkillNom;

  skills:Skill[]=[];
  selectedSkill:Skill;
  constructor(private _skillService:SkillService) { }

  ngOnInit() {
    this.skills = this._skillService.getSkills();
  }
  selectSkill(skill:Skill){
    this.selectedSkill = skill;
  }
  actualizarSkill(){
    let nuevoSkill = new Skill(this.inputSkillId.nativeElement.value,
                          this.inputSkillNom.nativeElement.value);
    this.skills = this._skillService.updateSkillById(nuevoSkill);
  }
}

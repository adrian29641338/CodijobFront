import { Injectable } from '@angular/core';
import { Skill } from '../Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  misSkills:Skill [] = [
    {
      skillId:"1",
      skillNom:"C#",
    }, 
    {
      skillId:"2",
      skillNom:"Angular JS",
    }, 
    {
      skillId:"3",
      skillNom:"React JS",
    }
  ]

  constructor() {
    
    
   }

  getSkills():Promise<any>{
    return fetch("http://codijobservices.azurewebsites.net/api/Skill");
    
  }
  updateSkillById(newSkill:Skill):Skill[]{
    this.misSkills = this.misSkills.filter((skill)=>{
      if(skill.skillId === newSkill.skillId){
        skill.skillNom = newSkill.skillNom;
        return skill;
      }
      return skill;
    });
    return this.misSkills;
  }
}

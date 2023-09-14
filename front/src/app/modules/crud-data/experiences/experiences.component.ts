import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Countries } from 'src/app/core/interfaces/country.interface';
import { Experience } from 'src/app/core/interfaces/experience.interface';
import { ExperienceStatus } from 'src/app/core/interfaces/experienceStatus.interface';
import { ExperienceType } from 'src/app/core/interfaces/experienceType.interface';
import { CountriesService } from 'src/app/core/services/countries.service';
import { ExperiencesStatusService } from 'src/app/core/services/experiences-status.service';
import { ExperiencesTypeService } from 'src/app/core/services/experiences-type.service';
import { ExperiencesService } from 'src/app/core/services/experiences.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
})
export class ExperiencesComponent implements OnInit {

  experienceForm: FormGroup;

  experiences: Experience[] = [];

  experienceId: number = 0;

  constructor(
    private _experienceTypeServices: ExperiencesTypeService,
    private _experienceStatusServices: ExperiencesStatusService,
    private _countriesService: CountriesService,
    private _experiencesService: ExperiencesService,
    private fb: FormBuilder,
    private userData: UserDataService,
    public views: NavBarService
  ) {
    this.experienceForm = this.fb.group({
      description: '',
      company: '',
      position: '',
      typesId: '',
      statusId: '',
      countriesId: '',
      startDate: '',
      endDate: null,
    })
  }

  ngOnInit(): void {

    this.getTypes();

    this.getStatus();

    this.getCountries();

    this.getExperience();

  }

  endDateShow():boolean{
    return this.experienceForm.get('statusId')?.value !== 1;
  }

 
  //Experiences Types
  getTypes() {
    this._experienceTypeServices.getExperienceType().subscribe((typesList: ExperienceType[]) => {
      this.types = typesList;
    });
  }

  types: ExperienceType[] = [];

  //Experiences Status
  getStatus() {
    this._experienceStatusServices.getExperieceStatus().subscribe((statusList: ExperienceStatus[]) => {
      this.status = statusList;
    })
  }

  status: ExperienceStatus[] = [];

  getCountries() {
    this._countriesService.getCountries().subscribe((countriesList: Countries[]) => {
      this.countries = countriesList;
    });
  }

  countries: Countries[] = [];

  addExperience(){
    const newExperience: Experience = {
      description: this.experienceForm.get('description')?.value,
      company: this.experienceForm.get('company')?.value,
      position: this.experienceForm.get('position')?.value,
      typesId: this.experienceForm.get('typesId')?.value,
      statusId: this.experienceForm.get('statusId')?.value,
      countriesId: this.experienceForm.get('countriesId')?.value,
      startDate: this.experienceForm.get('startDate')?.value,
      endDate: this.experienceForm.get('endDate')?.value,
      profileId: this.userData.profileId,
    }

    this._experiencesService.addExperience(newExperience).subscribe((experience) => {
      this.experiences.push(experience);
    });

    this.experienceForm.reset();
  }

  getExperience() {
    this._experiencesService.getExperience(this.userData.userId).subscribe((experieceList: Experience[])=>{
      this.experiences = experieceList;
    });
  }

  selectedExperience(id?:number){
    const index = this.experiences.findIndex(experience => experience.id === id)
    const element = this.experiences[index]  
      
    this.experienceForm.patchValue({
      description: element.description,
      company: element.company,
      position: element.position,
      typesId: element.typesId,
      statusId: element.statusId,
      countriesId: element.countriesId,
      startDate: element.startDate,
      endDate: element.endDate,
      profileId: this.userData.profileId,
    });

    this.experienceId = Number(element.id);

  }

  updateExperience(){

    const newDataExperience: Experience = {
      description: this.experienceForm.get('description')?.value,
      company: this.experienceForm.get('company')?.value,
      position: this.experienceForm.get('position')?.value,
      typesId: this.experienceForm.get('typesId')?.value,
      statusId: this.experienceForm.get('statusId')?.value,
      countriesId: this.experienceForm.get('countriesId')?.value,
      startDate: this.experienceForm.get('startDate')?.value,
      endDate: this.experienceForm.get('endDate')?.value,
    } 

    this._experiencesService.updateExperience(this.experienceId, newDataExperience).subscribe(() => {
      this.getExperience();
    });
    
    console.log(this.userData.companies);

    this.experienceForm.reset();

    this.views.saveButton = false;
    this.views.plusOne = true;
  }

  deleteExperience(id?:number){
    const index = this.experiences.findIndex(experience => experience.id === id)
    const elementId = Number((this.experiences[index]).id)
    this._experiencesService.deleteExperience(elementId).subscribe(() => {
      this.experiences.splice(index, 1);
    });

    this.experienceForm.reset();
  }

}

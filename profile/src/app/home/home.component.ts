import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

toProjects(){
  document.getElementById("projects-section")?.scrollIntoView({behavior:"smooth"});
}
toAbout(){
  document.getElementById("about-section")?.scrollIntoView({behavior:"smooth"});
}
toHome(){
  document.getElementById("home-section")?.scrollIntoView({behavior:"smooth"});
}
toSkills(){
  document.getElementById("skills-section")?.scrollIntoView({behavior:"smooth"});
}
toContact(){
  document.getElementById("contact-section")?.scrollIntoView({behavior:"smooth"});
}
}

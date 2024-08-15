import { Component, signal } from '@angular/core';
import { FooterModule } from '../footer/footer.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = signal("Cleiton");
  //count = signal(0);
  count = 0;
  value = false;
  pacManUrl = "https://upload.wikimedia.org/wikipedia/commons/0/06/Pac_Man.svg";

  lista = ["fernanda", "cleiton", "joao", "maria"];

  // constructor() {
  //   setInterval(() => {
  //     this.count += 1;
  //   }, 1000)
  // }

  teste() {
    //this.count += 1;
    // this.count.update(count => count + 1);
    // this.name.set("Cleiton " + this.count());
    //console.log(this.count);
    //this.count.update(value => value + 1);
    this.count += 1;
  }
}

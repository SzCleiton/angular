import { Component, signal } from '@angular/core';
import { FooterModule } from '../footer/footer.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = signal("Cleiton");
  count = 0;
  pacManUrl = "https://upload.wikimedia.org/wikipedia/commons/0/06/Pac_Man.svg";

  constructor() {
    setInterval(() => {
      this.count += 1;
    }, 1000)
  }

  teste() {
    this.count += 1;
    // this.count.update(count => count + 1);
    // this.name.set("Cleiton " + this.count());
    console.log(this.count);
  }
}

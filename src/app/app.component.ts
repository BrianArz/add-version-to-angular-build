import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { version, commitHash, buildDate } from '../environments/version';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'buildversion';
  versionInfo = { version, commitHash, buildDate };
  constructor() {
    console.log(this.versionInfo);
  }
}

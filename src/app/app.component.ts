import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'To-Do List';
  list: any[] = [];

  addTask(item: string) {
    this.list.push({ id: this.list.length, name: item });
    console.warn(item);
  }

  removeTask(id: number) {
    console.warn(id);
    this.list = this.list.filter((item) => item.id !== id);
  }
}

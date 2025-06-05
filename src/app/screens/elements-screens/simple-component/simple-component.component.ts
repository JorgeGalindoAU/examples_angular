import { Component } from '@angular/core';
import { SimpleDialogComponent } from "../../../components/simple-dialog/simple-dialog.component";
import { GoBackButtonComponent } from "../../../components/go-back-button/go-back-button.component";

@Component({
  selector: 'app-simple-component',
  imports: [SimpleDialogComponent, GoBackButtonComponent],
  templateUrl: './simple-component.component.html',
  styleUrl: './simple-component.component.css',
  standalone: true
})
export class SimpleComponentComponent {
  showDialog: boolean = true;
}

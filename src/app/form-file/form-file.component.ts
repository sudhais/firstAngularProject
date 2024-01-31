import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-file',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-file.component.html',
  styleUrl: './form-file.component.css'
})
export class FormFileComponent {

  firstForm = new FormGroup({
    name : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  //formControl
  //name : new FormControl('', Validators.required)

  //template drive form
  // name = ''

  
  showName(){
    alert(this.firstForm.value.name + ' ' + this.firstForm.value.password)
  }
  reset() {
    this.firstForm.value.name = ''
    this.firstForm.value.password = ''
  }
}

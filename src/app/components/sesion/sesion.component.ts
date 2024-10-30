import { Component } from '@angular/core';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {
  loginModel = {
    email: '',
    password: ''
  };

  registerModel = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  onLogin() {
    // Lógica para iniciar sesión
    console.log('Iniciar sesión con:', this.loginModel);
  }

  onRegister() {
    // Lógica para registrarse
    if (this.registerModel.password === this.registerModel.confirmPassword) {
      console.log('Registrarse con:', this.registerModel);
    } else {
      console.error('Las contraseñas no coinciden');
    }
  }
}

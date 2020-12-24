import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  constructor(private readonly router: Router) {}

  public signIn(): void {
    this.router.navigate(['/app']);
  }
}

import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthEnum } from './enum/auth.enum';

export const routes: Routes = [
      {
            path: AuthEnum.LOGIN,
            component: LoginComponent,
            pathMatch: 'full',
            title: 'Log In'
      }
];

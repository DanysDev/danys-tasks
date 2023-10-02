import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../../pages/auth/core/services/auth.service";
import {inject} from "@angular/core";
import Swal from 'sweetalert2';

export const userLoguinGuard: CanActivateFn = (route, state) => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (!authService.isUserLoguin()) {
    Swal.fire({
      title: 'Necesita iniciar sección para crearse una Tarea',
      showConfirmButton: true,
      showCancelButton: true
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        router.navigate(['/auth/login']).then();
      } else {
        Swal.fire('Ok, tomese su tiempo', '', 'success').then();
      }
    })
  }

  return authService.isUserLoguin();
};

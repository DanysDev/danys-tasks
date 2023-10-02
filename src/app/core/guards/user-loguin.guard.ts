import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../../pages/auth/core/services/auth.service";
import {inject} from "@angular/core";
import Swal from 'sweetalert2';



/**
 * Función que se utiliza como guardia para verificar si el usuario ha iniciado sesión.
 *
 * @return {boolean} Valor booleano que indica si el usuario ha iniciado sesión o no.
 */
export const userLoguinGuard: CanActivateFn = (): boolean => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);


  if (!authService.$isUserLogueIn.value) {
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

  return authService.$isUserLogueIn.value;
};

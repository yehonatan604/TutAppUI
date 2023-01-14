import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../services/users.service';
import { DialogBoxService } from '../services/dialog-box.service';

@Injectable({ providedIn: 'root' })
export class CreatorGuard implements CanActivate {
    constructor(
        private usersService: UsersService,
        private router: Router,
        private dialog: DialogBoxService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let result: boolean = true;

        if (this.usersService.loggedInUser.userType < 3) {
            this.router.navigate(['/'])
                .then(_ => {
                    result = false;
                    this.dialog.fire(
                        `הגישה נדחתה`,
                        'עליך לשדרג את חשבונך לחשבון יוצר על מנת לקבל גישה לאזור זה',
                        'error'
                    );
                });
        }

        return result;
    }
}

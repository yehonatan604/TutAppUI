import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { DialogBoxService } from '../services/dialog-box.service';
import { UsersService } from '../../enterprise/data-services/users.service';

@Injectable({ providedIn: 'root' })
export class CreatorGuard implements CanActivate {
    constructor(
        private usersService: UsersService,
        private router: Router,
        private dialog: DialogBoxService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let result: boolean = true;
        if (this.usersService.loggedInUser.userType < 2) {
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

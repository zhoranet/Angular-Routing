import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { MessageService } from './messages/message.service';

@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {    
    pageTitle: string = 'Acme Product Management';
    loading: boolean;

    constructor(
        private authService: AuthService, 
        private router: Router,
        private messageService: MessageService) { 

        router.events.subscribe((routerEvent: Event) => {
            this.checkedRouterEvent(routerEvent);
        })
    }
    
    displayMessages(): void {
        this.router.navigate([{outlets: { popup: ['messages']}}]);
        this.messageService.isDisplayed = true;
    }

    hideMessages(): void {
        this.router.navigate([{outlets: { popup: null}}]);
        this.messageService.isDisplayed = false;
    }

    logOut(): void {
        this.authService.logout();
        console.log('Log out');
    }

    private checkedRouterEvent(event: Event): any {
        if(event instanceof NavigationStart) {
            this.loading = true;            
        }
        else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
            this.loading = false;            
        }
    }
}

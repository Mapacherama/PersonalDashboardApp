import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition('* => *', [
        style({
          position: 'relative',
          overflow: 'hidden'
        }),
        query(':enter, :leave',[
            style({
              // display: 'block',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            })
        ], { optional: true }),

        // query(':enter', [
        //   style({
        //       opacity: 0
        //   })], { optional: true }),

          group([
            query(':leave',[
              animate('200ms ease-in', style({
                opacity: 0,
                transform: 'translateX(-80px)'
              }))
          ], { optional: true }),
          query(':enter', [
            style({
              transform: 'translateX(80px)',
              opacity: 0
            }),
            animate(250, style({
              opacity: 1,
              transform: 'translateX(0)'
            }))
          ], { optional: true })
          ])
      ])

    ])
  ]
})

export class AppComponent {
  prepareRoute(outlet: RouterOutlet){
    if(outlet.isActivated) return outlet.activatedRoute.snapshot.url;
  }


}



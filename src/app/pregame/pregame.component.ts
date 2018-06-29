import { Component, OnInit } from '@angular/core';
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from '../../../node_modules/gsap/all';
import { ElementRef, ViewChild } from '@angular/core';
import { TweenMax } from 'gsap';
import { UserService } from '../user.service';
@Component({
  selector: 'app-pregame',
  templateUrl: './pregame.component.html',
  styleUrls: ['./pregame.component.scss']
})
export class PregameComponent implements OnInit {
  private tl = new TimelineMax();
  private tl1 = new TimelineMax();
  private tlLoop = new TimelineMax({ repeat: -1 });

  @ViewChild('textLeft') textLeft: ElementRef;
  @ViewChild('textRight') textRight: ElementRef;
  @ViewChild('epic') epic: ElementRef;
  @ViewChild('container') container: ElementRef;
  @ViewChild('header') header: ElementRef;
  @ViewChild('animationBox') animationBox: ElementRef;
  @ViewChild('k') k: ElementRef;
  @ViewChild('wep') wep: ElementRef;
  @ViewChild('blood') blood: ElementRef;
  @ViewChild('play') play: ElementRef;
  @ViewChild('btn1') btn1: ElementRef;
  @ViewChild('btn2') btn2: ElementRef;
  @ViewChild('btn3') btn3: ElementRef;
  @ViewChild('btn4') btn4: ElementRef;
  @ViewChild('loginF') loginF: ElementRef;
  @ViewChild('piece1') piece1: ElementRef;
  @ViewChild('piece2') piece2: ElementRef;
  @ViewChild('piece3') piece3: ElementRef;
  @ViewChild('gitHub') gitHub: ElementRef;
  @ViewChild('lobby') lobby: ElementRef;

  public bloodMark2 = false;
  private bloodMark = false;
  public axe = false;
  private status = false;
  // .
  private userImg;
  private userName;
  private userLogedIn = false;
  // BULIAN VAL FOR HTML ERR MSG.
  // private loginErr = false;
  constructor(private userService: UserService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentChecked() {

  }

  ngOnInit() {
    // landing page animation TimeLine
    this.tl.
      to(this.textRight.nativeElement, 0.5, { scale: 1, yoyo: true, opacity: 1 }).
      to(this.textRight.nativeElement, 0.5, { top: 150, opacity: 1, left: 500 }).
      to(this.textLeft.nativeElement, 0.5, { top: 150, opacity: 1, left: 820 }).
      to(this.epic.nativeElement, 0.3, { yoyo: true, top: -200, left: 250, scale: 0.5 }).
      to(this.epic.nativeElement, 0.5, { yoyo: true, top: -90, left: 250, opacity: 1, scale: 0.5 }).
      to(this.textRight.nativeElement, 0.6, { top: 330, opacity: 1, left: 350, rotation: '90_w' }).
      to(this.textRight.nativeElement, 0.5, { top: 500, opacity: 0 }).
      // to(this.textRight.nativeElement, 0.4, { top: 330, opacity: 1, left: 350, rotation: '20_w' }).
      to(this.animationBox.nativeElement, 1.2, { top: 240, opacity: 1, left: 600 }).
      // to(this.textLeft.nativeElement, 0.5, { left: 450, opacity: 1, top: 50 }).
      // to(this.textRight.nativeElement, 0.5, { left: 450, opacity: 1, top: 200, rotation: '10_W' }).
      to(this.loginF.nativeElement, 1, { left: 550, opacity: 1, top: 300 }).
      to(this.piece1.nativeElement, 0.2, { left: -440, top: 200, opacity: 1 }).
      to(this.piece2.nativeElement, 0.2, { left: -500, top: 200, opacity: 1 }).
      to(this.piece3.nativeElement, 0.2, { left: -550, top: 200, opacity: 1 });
    setTimeout(() => {
      this.animate();
      setTimeout(() => {
        this.bloodMark2 = true;
      }, 5000);
      this.axe = true;
    }, 4000);
    this.tl.to(this.gitHub.nativeElement, 0.3, { right: 550, bottom: 300, opacity: 1 }).
      to(this.btn1.nativeElement, 0.3, { left: 1100, opacity: 1, top: 100 }).
      to(this.btn2.nativeElement, 0.3, { left: 1100, opacity: 1, top: 200 }).
      to(this.btn3.nativeElement, 0.3, { left: 1100, opacity: 1, top: 300 }).
      to(this.btn4.nativeElement, 0.3, { left: 1100, opacity: 1, top: 400 });

  }
  // ANIMATION BOX .
  animate() {
    console.log('jump');
    this.axe = true;
    this.status = !this.status;
    this.tl.to(this.k.nativeElement, 0.2, { bottom: 20 }).to(this.k.nativeElement, 0.2, { top: 20 });
    console.log('attack');
    this.axe = true;
    TweenMax.to(this.wep.nativeElement, 1, { left: 60 });
    TweenMax.to(this.wep.nativeElement, 0.5, { rotationX: '360_w', rotationY: '-60_short' });
    console.log('kill');
    TweenMax.to(this.wep.nativeElement, 0.5, { rotation: '700_w', top: 150 });
    setTimeout(() => {
      TweenMax.to(this.wep.nativeElement, 0.5, { rotation: '60_short' });
      setTimeout(() => {
        this.axe = false;
        setTimeout(() => {
          this.bloodMark = false;
        }, 500);
      }, 500);
      this.bloodMark = true;
    }, 500);
  }
  // SETS THE BULIAN FOR THE DISPALY OF THE START BTN.
  loginTrue(bull) {
    console.log(bull);
    this.userLogedIn = bull;
    this.setUserPreLobby();
  }
  // SET USER GIC AND NAME IN PREGAME.
  setUserPreLobby() {
    const t = this.userService.getUser();
    this.userName = t.userName;
    this.userImg = t.userImg;
  }
}

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
  message: string = '';

  constructor() {
    console.log('Constructor called');
    this.message += 'Constructor called\n';
  }

  ngOnChanges() {
    console.log('OnChanges called');
    this.message += 'OnChanges called\n';
  }

  ngOnInit() {
    console.log('OnInit called');
    this.message += 'OnInit called\n';
  }

  ngDoCheck() {
    console.log('DoCheck called');
    this.message += 'DoCheck called\n';
  }

  ngAfterViewInit() {
    console.log('AfterViewInit called');
    this.message += 'AfterViewInit called\n';
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked called');
    this.message += 'AfterViewChecked called\n';
  }

  ngAfterContentInit() {
    console.log('AfterContentInit called');
    this.message += 'AfterContentInit called\n';
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked called');
    this.message += 'AfterContentChecked called\n';
  }

  ngOnDestroy() {
    console.log('OnDestroy called');
    this.message += 'OnDestroy called\n';
  }

}

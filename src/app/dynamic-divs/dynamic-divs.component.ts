import { AfterViewInit, Component, ComponentFactoryResolver, HostListener, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.scss']
})
export class DynamicDivsComponent implements AfterViewInit {

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }
  @ViewChild('dynamicComponent',{read:ViewContainerRef}) alertHost!:ViewContainerRef;
  private counter:number = 1;

  @HostListener('window:scroll') onScroll(event:Event):void{
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
      this.createDynamicComponent(this.counter++);
  }
  
  ngAfterViewInit(): void {
    while(this.counter<=5){
      this.createDynamicComponent(this.counter);
      this.counter++;
    }
  }

  private createDynamicComponent(counter:number): void{
    const dynamicConentComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicContentComponent);
    const componentRef = this.alertHost.createComponent(dynamicConentComponentFactory);
    componentRef.instance.contentNumber = counter;
  }

}

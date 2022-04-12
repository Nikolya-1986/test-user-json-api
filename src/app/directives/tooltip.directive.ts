import { Input, Renderer2, HostListener,  Directive, ElementRef, TemplateRef, ViewContainerRef,  ContentChild, ComponentRef } from '@angular/core';
    
@Directive({ 
    selector: '[tooltipDirective]'
})
export class TooltipDirective {

    private tooltipId!: string;
        
    constructor(
        private _renderer: Renderer2,
        private _elementRef: ElementRef,
        private _viewContainerRef: ViewContainerRef
    ) { }
        
    @Input() parametroPlantilla!: TemplateRef<any>;
    @ContentChild( "tooltipTemplate" ) private _tooltipTemplateRef!: TemplateRef<Object>;
        
    @HostListener('mouseenter')  onMouseEnter(): void {    
        const view = this._viewContainerRef.createEmbeddedView(this._tooltipTemplateRef);
        view.rootNodes.forEach(node => 
        this._renderer.appendChild(this._elementRef.nativeElement, node));
    }
        
    @HostListener('mouseleave') onMouseLeave(): void {        
        if (this._viewContainerRef) {
            this._viewContainerRef.clear();
        }  
    }  
}
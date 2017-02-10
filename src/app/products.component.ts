
//tells Angular that this class is going to be a component.
import { Component } from '@angular/core'


//The @Component function takes in an object {} with 2 attributes, selector and template both of type string

@Component({
selector: 'products',
template: `
<h2>Products</h2><ul>
<li *ngFor="let product of products">
{{product}}
</li>
</ul>
`
})


//the export keyword makes this class available for other files in our application to import this class
export class ProductsComponent{
    
    products = ["Learning Angular 2","Pro TypeScript","ASP.NET"];
}
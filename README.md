# Angular modules

## What is a NgModule?

The purpose of a NgModule is just to group components and/or services which belong together. Nothing more or less.
So you can compare that to a Java package or a PHP / C# namespace.
The only question is: how do you choose to group things together?
## Types of Angular modules
There are 3 main types of NgModules you can do:
### 1.modules of pages,
### 2.modules of global services,
### 3.modules of reusable components.
You’ll at least do modules of pages (otherwise your app is just empty). The 2 other types of modules are optionals, but they will come soon if you want to reuse and optimize your code.

## Modules of pages

Modules of pages are modules with routing. They are here to separate and organize the different areas of your application. They are loaded only once, either in the AppModule or via lazy-loading.

For example, you could have an AccountModule for the register, login and logout pages; then a HeroesModule for the heroes list and hero details pages; and so on.
These modules contain 3 things:
### /shared: services and interfaces,
### /pages: routed components,
### /components: pure presentation components.

## Shared services for pages

To display a page, you need data first. Here come services.Soon, several pages will need the same service. Thus the shared directory.

But be sure your services for pages are specific to the module, because if you opt for lazy-loading, they will just be available in this particular module (which is good), and not elsewhere in app.

Let’s take back the AccountModule as an example. The account service should just manage communication with the API (which says “yes” or “no” based on user credentials). The user connection status should not be stored here, because it may be not available elsewhere in the app. It will be managed by a module of global services (see below).


## Pages: routed components

A page component just injects the service, and uses it to get the data.

You could display the data directly in the component template but you should not: data should be transferred to another component via an attribute.

````
@Component({
  template: `<app-presentation *ngIf="data" [data]="data"></app-presentation>`
})
export class PageComponent {

  data: SomeData;

  constructor(protected someService: SomeService) {}

  ngOnInit() {
    this.someService.getData().subscribe((data) => {
      this.data = data;
    });
  }

}

````

Each page component is associated to a route.

## Presentation components

A presentation component just retrieves the transferred data with the Input decorator, and displays it in the template.
````

@Component({
  selector: 'app-presentation',
  template: `<h1>{{data.title}}</h1>`
})
export class PresentationComponent {

  @Input() data: SomeData;

}

````

You’ll see this type of components also referred as pure components.

# Is this MVx?

On a theoretical level, no. But if you come from the back-end world and it helps you on a practical level, you can compare to it:

### services would be the Models,
### presentation components would be the Views,
### pages components would be the Controllers / Presenters / ViewModels (pick the one you’re used to).

Even it’s not exactly the same concept, the goal is the same : separation of concerns. And why is this important?
### reusability: 
presentation components can be reused in different pages,
### optimizability: 
change detection of presentation components can be optimized,
### testability: 
unit tests are possible on presentation components (just forget tests if you didn’t separate concerns, it will just be a terrible mess).


## Modules of global services

Modules of global services are modules with services you need through the whole app. As services have generally a global scope, these modules are loaded only once in the AppModule, and then services are accessible everywhere (including in lazy-loaded modules).

You certainly use at least one : the HttpClient module. And you’ll soon need your own. A very common case is an AuthModule to store the user connection status (as this data is needed everywhere in the app) and save the token.

Note: since Angular 6, you don’t need a module anymore for services, as they are auto-providing themselves. But it doesn’t change the architecture described here.

### Reusability

Modules of global services are reusable through different projects if you take care to have no specific dependency in them (no UI or app specific code), and if you separate each features in different modules (do not put every service in just one big global module).

As such a module will be used from outside, you should do an entry point, where you export the NgModule, the services and maybe interfaces and injection tokens.

### Should I do a CoreModule?

Not necessary. The documentation suggests to do a CoreModule for global services. You can surely group them in a /core/ directory, but as mentioned above, be sure to first separate each feature. You should not put all your global services in just one CoreModule, otherwise you won’t be able to reuse just one feature in another project.

## Modules of reusable components

Modules of reusable components are modules of UI components you would like to reuse in different projects. As components have a local scope, these modules are imported in each pages modules where you need them.

You certainly use one, like Material, NgBootstrap or PrimeNg. You can do yours too.

### How to get the data?

UI components are pure presentation components. So they work exactly the same as in modules of pages (see above): data should come from the Input decorator (and sometimes from <ng-content> in advanced cases).
````

@Component({
  selector: 'ui-carousel'
})
export class CarouselComponent {

  @Input() delay = 5000;

}

````

You should not rely on a service, because services are often specific to a particular app. Why? At least because of the API URL. Providing the data will be the role of pages component. The UI component just retrieves data passed by someone else.

### Public and private components
As components are in local scope, do not forget to export them in the NgModule. You just need to export public ones, internal sub components can stay private.

### Directives and pipes
An UI module can also be about directives or pipes. Same as components: they need to be exported if they are public.

### Private services
Services inside UI modules can be relevant for data manipulation if they contain nothing specific. But then, be sure to provide them in the component, so they have a local/private scope, and certainly not in the NgModule.
````

@Component({
  selector: 'some-ui',
  providers: [LocalService]
})
export class SomeUiComponent {}

````


### Public services

But what if your UI module also needs to provide public services, in relation to the component? It should be avoided as much as possible, but it is relevant in some cases.
You will then provide the public services in the NgModule. But as the module will be loaded several times because of the components scope, it will cause a problem for the services.
You then need an extra code for each public service to prevent them to be loaded several times. It would be too long to explain it here, but it’s a best practice (done in Material for example). Just replace SomeService by the name of your class:

````

export function SOME_SERVICE_FACTORY(parentService: SomeService) {
  return parentService || new SomeService();
}

@NgModule({
  providers: [{
    provide: SomeService,
    deps: [[new Optional(), new SkipSelf(), SomeService]],
    useFactory: SOME_SERVICE_FACTORY
  }]
})
export class UiModule {}

````

### Reusability

Modules of UI components are reusable through different projects. As it will be used from outside, you should do an entry point, where you export the NgModule, the public/exported components (and maybe directives, pipes, public services, interfaces and injection tokens).

````

export { SomeUiComponent }  from './some-ui/some-ui.component';
export { UiModule } from './ui.module';

````

### Should I do a SharedModule?

No. The documentation suggests to do a SharedModule, to factorize all modules of components inside one module. But I’ll go against the documentation on this one.

Problem is: each module in which you import the SharedModule becomes specific to your app and then will not be reusable in another project.

It’s normal to have to import dependencies each time you need them. And with current tools like auto-imports in VS Code, it‘s not a burden anymore.

But you can surely group your modules of components inside a /ui/ directory (don’t call it /shared/, it will be confusing with services which are shared also).

#### Summary
Example of a module of reusable UI components:

````
@NgModule({
  imports: [CommonModule],
  declarations: [PublicComponent, PrivateComponent],
  exports: [PublicComponent]
})
export class UiModule {}

````


# Conclusion
If you follow those steps:
* you’ll have a consistent architecture: in small or big apps, with or without lazy-loading,
* your modules of global services and your modules of reusable components are ready to be packaged as libraries, reusable in other projects,
* you’ll be able to do unit tests without crying.

Here is an example of a real world architecture:

````

app/
|- app.module.ts
|- app-routing.module.ts
|- core/
   |- auth/
      |- auth.module.ts (optional since Angular 6)
      |- auth.service.ts
      |- index.ts
   |- othermoduleofglobalservice/
|- ui/
   |- carousel/
      |- carousel.module.ts
      |- index.ts
      |- carousel/
         |- carousel.component.ts
         |- carousel.component.css
    |- othermoduleofreusablecomponents/
|- heroes/
   |- heroes.module.ts
   |- heroes-routing.module.ts
   |- shared/
      |- heroes.service.ts
      |- hero.ts
   |- pages/
      |- heroes/
         |- heroes.component.ts
         |- heroes.component.css
      |- hero/
         |- hero.component.ts
         |- hero.component.css
   |- components/
      |- heroes-list/
         |- heroes-list.component.ts
         |- heroes-list.component.css
      |- hero-details/
         |- hero-details.component.ts
         |- hero-details.component.css
|- othermoduleofpages/

````
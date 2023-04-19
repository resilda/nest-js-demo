Nest js is a simple node js framework to make our life easier.

While creating a project with it, there will be a few things that will come along automatically:
- project-name
- node-modules
- src-directory
- some-boiler-plate files

The logic behind the application hierarchy:

1. MODULES -> which will structure the application. 

Example: AuthModule, UserModule, GalleryModule.

Modules will include: CONTROLLERS and SERVICES (controller and provider), which are the next layers of hierarchy.

All the modules should be included into a single module in order for it to be used and rendered throughout all the application.

** To create a module by cli: nest g module user **

In Nest.js case: 

- main.ts file and the async function `bootstrap`.

In order to create an application instance the `NestFactory` class is used (just a bunch of methods in order to create the application instance).

In this file, the main purpose is to start up the HTTP listener, which lets the application await inbound HTTP requests.


2. CONTROLLERS -> handle HTTP requests from the client and takes the needed information to do a bunch of stuff with it based on the requierments. It will also be responsible to send that data back to the client.

As part of the Controller, the DTO (Data Transfer Object) schema is also included. It will define an object with how the data should be sent over the network.

They can be created by Typescript Interfaces or classes. 

It is recommended to use classes since hey are preserved as real entities in the compiled JavaScript ES6. TypeScript interfaces are removed during the transpilation, therefore Nest cannot refer to them at runtime.

Controllers will also handle the routes of the rest API requests.

Example: 
Controller('auth')
Service('signup')

Route for a POST request, in order to sign up a user -> `/auth/signup`

Since Controllers will only have to take and send data back, there will be functions and methods needed to transform the data requested, which will be handled by Services. 

3. SERVICES -> responsible for the business logic and data transfromation requests we get from the controllers. It might be considered as an intermediate layout, to do the Controllers work regarding the request and response. 

Services also handle database connectivity.

4. DECORATERS -> everything is being accompanied with a decorater, which translates what the class created actually is: 

Module -> @Module
Controller -> @Controller
Service -> @Injectable
Post Request -> @Post

Decorator takes an argument (the function being decorated) and returns the same function with added functionality.

!! Important !!

Nest js will convert the data type based on what is returned to the endpoint

If a string should be returned: 
Content-type: text/html

If an object should be returned: 
Content-type: application/json
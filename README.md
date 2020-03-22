# App

> Web application.

+ [node](http://nodejs.org) 12.13.0
+ [npm](http://npmjs.com) 6.13.0
+ [ng](http://angular.io) 8.2.13

### 1. Packages

> Packages: `app`, `app-commons`, `app-e2e` and `app-ui`.

#### 1.1. `app`  
The default project, the application source code is here.

#### 1.2. `app-commons`  
The common package contains common parts. E.g: sass variables, sass mixins...

#### 1.3. `app-e2e`  
The e2e project includes the scenarios to make sure the `app` application runs correctly.

#### 1.4. `app-ui`
This is the project includes the UI components used in the `app` application.

### 2. Responsive break points

> `@import "responsive"` to use responsive mixins.  

### 3. Browser support

> Chrome, Firefox, Safari.

### 4. Development

#### 4.1. Command line
+ Production deploy: *npm run prod*
+ Start dev server: *npm start*
+ Run lint: *ng lint*
+ Run e2e: *ng e2e*
+ Test: *npm test*
+ Statistic: *npm run stats*

#### 4.2. Conventions

> Besides the other common conventions, the below rule should be followed.

+ Naming:
    - protected and private fields inside the classes must be lead by the `_`, except the readonly fields.
    - exported constant, token must be uppercase.
    - observable fields must end by the `$`.
+ `var` keyword is forbidden to declare a variable.
+ All methods must have the return type, no exception.
+ All fields and methods inside the classes must be led by the access modifier: `public`, `protected` or `private`. No exception, including the default public access modifier.
+ Restrict use of `unknow` or `any`. Try to create the shapes instead.

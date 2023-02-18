# Matrix

## TODO:

* [x] Addapting maatrix to personal needs: sort, and select goal
* [ ] Under each bulletpoint, create a sublit of resources which to process

Goal:

* All junior!
* Gather the resources/links/etc for each bulletpoint with team effort
* Process resources/links/etc into daily notes/playground and add comment during the progress here

## Score evaluation

| Mark | Explanation                                                  |
| ---- | ------------------------------------------------------------ |
| 0    | lack of knowledge at all.                                    |
| 1    | awareness of this skill but are not using it.                |
| 2    | nowledge of this skill and maybe use it from time to time.   |
| 3    | knowledge of this skill and are using it on a regular basis. |
| 4     | perfect knowledge of this skill and the ability to teach or mentor others. |                                                            |


## Matrix implementation plan

### Web / Client path | HTML

* html5 semantic markup                           | 2
    * <https://www.w3schools.com/html/html5_semantic_elements.asp>
    * <https://www.semrush.com/blog/semantic-html5-guide/>
    * <https://www.hongkiat.com/blog/html-5-semantics/>
    * <https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements>
* form & input (text, radio, password, date etc…) | 2
    * TBD
* Microformat <br /> https://microformats.org/    | 2
    * TBD
* Accessibility & HTML, ARIA `#a11y`              | 2
    * TBD
* HTML living standard (aka HTML5)                | 2
    * TBD
* SEO/SMA basics                                  | 1
    * TBD
* SVG                                             | 1
    * TBD

### Web / Client path | CSS

 | CSS                                                               | Junior | Middle | Senior |
 | ----------------------------------------------------------------- | ------ | ------ | ------ |
 | CSS Layout <br /> media query, flex-box, grid, float: left/right… | 2      | 3      | 4      |
 | inline vs block elements                                          | 2      | 3      | 4      |
 | Decorators                                                        |        |        |        |
 | color, border, background…                                        | 2      | 3      | 4      |
 | CSS variables                                                     | 2      | 3      | 4      |
 | Positioning                                                       | 2      | 3      | 4      |
 | Animation                                                         | 2      | 3      | 4      |
 | CSS Design Systems                                                |        |        |        |
 | Bootstrap, Zurb Foundation, Boolma, TailwindCSS etc…              | 2      | 3      | 4      |
 | Accessibility & CSS, #a11y                                        | 2      | 3      | 4      |
 | preprocessors and UI framework customisation                      |        |        |        |
 | SCSS/SASS/Stylus & PostCSS                                        | 2      | 3      | 4      |
 | CSS Methodologies                                                 |        |        |        |
 | BEM, CSS Modules, OOCSS, SMACSS…                                  | 2      | 3      | 4      |

### Web / Client path | HTML \w CSS \w JS  & UI Frameworks

 | HTML \w CSS \w JS  & UI Frameworks             | Junior | Middle | Senior |
 | ---------------------------------------------- | ------ | ------ | ------ |
 | Rendering cycle of HTML/CSS in webkit browsers | 1      | 2      | 3      |
 | Markup and Layout template                     | 2      | 3      | 4      |
 | Building Design Systems                        | 2      | 3      | 4      |
 | Bootstrap/Material/AnyFramework components     | 2      | 3      | 4      |
 | UI Framework customisation pros n cons         | 2      | 3      | 4      |

### general web tools => web knowledge pairs

 | general web tools => web knowledge pairs                                                                                                                      | Junior | Middle | Senior |
 | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------ |
 | Chrome Dev Tools to Debug and Profiling => performance standards  <br /> Memory/Performance tabs, Stack trace scope, Exception breakpoints, remote debugging… | 2      | 3      | 4      |
 | caniuse => browser support awareness and product support requirements (QA part)                                                                               | 2      | 3      | 4      |
 | eslint/prettier => code style standard                                                                                                                        | 1      | 2      | 3      |
 | JSDoc/TSDoc/Docusaurus/etc => "how to build an documentation?"                                                                                                | 1      | 2      | 3      |
 | Storybook => Design System standards                                                                                                                          | 1      | 2      | 3      |
 | Figma/Sketch dev user experience => Designers vocabulary \w UI/UX essential concepts                                                                          | 1      | 2      | 3      |

### Core Concepts | JavaScript

| **JavaScript**                 | **Junior** | **Middle** | **Senior** |
|:---------------------------------- | ---------- | ---------- | ---------- |
| EcmaScript T39 and its stages      | 0          | 1          | 2          |
| CommonJS and ES Modules            | 2          | 3          | 4          |
| Data types & type coercion         | 2          | 3          | 4          |
| Async programming                  | 2          | 3          | 4          |
| RxJs                               | 1          | 2          | 3          |
| utility libraries <br> _lodash, ramda_ | 1          | 2          | 3          |

### Core Concepts | TypeScript

| **TypeScript**                                                       | **Junior** | **Middle** | **Senior** |
|:-------------------------------------------------------------------- | ---------- | ---------- | ---------- |
| TSC configuration                                                    | 1          | 2          | 3          |
| Basic types                                                          | 2          | 3          | 4          |
| OOP                                                                  | 1          | 2          | 3          |
| Generics / Union types / mixins                                      | 2          | 3          | 4          |
| Types functions and operators <br> *satisfies, Partial<>, Exclude<> etc…* | 2          | 3          | 4          |
| `*.d.ts` and defining types to `*.js` files                          | 1          | 2          | 3          |
| libraries types and `@types/*`                                       | 2          | 3          | 4          |

### Web / Client path | Web API

 | Web API                                                                   | Junior | Middle | Senior |
 | ------------------------------------------------------------------------- | ------ | ------ | ------ |
 | DOM API <br /> Event bubbling and capture, createElement, classList.push… | 2      | 3      | 4      |
 | BOM API <br /> history, navigator, location, XMLHttpRequest, screen       | 2      | 3      | 4      |
 | Progressive Web Apps: Web Workers                                         |        |        |        |
 | Notifications API, Cache, Shared workers etc…                             | 1      | 2      | 3      |
 | Progressive Web Apps: Service Workers                                     |        |        |        |
 | API, lifecycle, background synchronisation…                               | 1      | 2      | 3      |
 | Web Animation API <br /> timeline(), getAnimations(), KeyframeEffect…     | 1      | 2      | 3      |
 | Canvas API and libraries… <br /> 2d.js                                    | 1      | 2      | 3      |
 | WebRTC                                                                    | 1      | 2      | 3      |
 | Websockets API <br /> Socket.IO , http2+server sent events (sso)          | 1      | 2      | 3      |
 | CSS API, CSS Object Model, CSS Typed OM                                   | 0      | 1      | 2      |

### Web / Client path | React path

 | React path                                                                                                                                              | Junior | Middle | Senior |
 | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------ |
 | pragma <br /> `.jsx`/`.tsx` and React.createElement                                                                                                     | 2      | 3      | 4      |
 | Component Lifecycle                                                                                                                                     | 2      | 3      | 4      |
 | React hooks & contexts                                                                                                                                  | 2      | 3      | 4      |
 | Virtual DOM <br /> …and challenges with it, for example what is the "key" attribute?                                                                    | 1      | 2      | 3      |
 | How React works and its concepts <br /> React and React Server Components/ReactDOM/ReactNative                                                          | 1      | 2      | 3      |
 | Unidirectional Data flow and Redux and sideefects with thunk/redux-saga <br /> Redux libs such as: redux persist or redux state machine or redux tolls… | 2      | 3      | 4      |
 | css-in-js                                                                                                                                               | 2      | 3      | 4      |
 | Headless UI                                                                                                                                             | 2      | 3      | 4      |
 | React router                                                                                                                                            | 2      | 3      | 4      |
 | React element reference and async Render imports                                                                                                        | 2      | 3      | 4      |
 | GraphQL client:: Apollo / Relay                                                                                                                         | 1      | 2      | 3      |
 | Unit Testing <br /> jest and unit testings or snapshot testing                                                                                          | 1      | 2      | 3      |
 | Integrations testing <br /> cypress, or nightwatch, or cucumber.js etc                                                                                  | 1      | 2      | 3      |
 | MicroFrontend and JSX Components <br /> using webpack module federation, bit.dev or similar                                                             | 0      | 1      | 2      |
 | React Dev Tools                                                                                                                                         | 2      | 3      | 4      |

### Core Concepts | Bundlers and Package managers

| Bundlers and Package managers          | Junior | Middle | Senior |     |
| -------------------------------------- | ------ | ------ | ------ | --- |
| npm/yarn/pnpm                          | 2      | 3      | 4      |     |
| monorepo setup                         | 1      | 2      | 3      |     |
| webpack/rollup/parcel/vite and loaders | 2      | 3      | 4      |     |
| babel.js                               | 2      | 3      | 4      |     |
| bundler extensions & npm script hooks  | 2      | 3      | 4      |     |

### Core Concepts | Data structures & Algorithms

| Data structures & Algorithms                                                  | Junior | Middle | Senior |
| ----------------------------------------------------------------------------- | ------ | ------ | ------ |
| Basic data structures: <br> array, hash-tables, queue, stack, observable      | 2      | 3      | 4      |
| Sorting algorithms: <br /> bubble, merge, quick, heap                         | 2      | 3      | 4      |
| Searching algorithms: <br /> binary, Knuth–Morris–Pratt, Rabin–Karp, Dijkstra | 2      | 3      | 4      |
| Big-O, Big Ω notations and complexity                                         | 1      | 2      | 3      |
| Trees and Graphs                                                              | 1      | 2      | 3      |
| Dynamic Programming <br /> iteration vs Recursion \w or \wo memoization       | 2      | 3      | 4      |

### Core Concepts | Development practices

| Development practices                                       | Junior | Middle | Senior |
| ----------------------------------------------------------- | ------ | ------ | ------ |
| 1. GRASP                                                    | 2      | 3      | 4      |
| 2. SOLID                                                    | 2      | 3      | 4      |
| 3. GoF design patterns                                      | 1      | 2      | 3      |
| 4. Domain Driven Design                                     | 1      | 2      | 3      |
| Multiparadigm and OOLO in JavaScript                        | 2      | 3      | 4      |
| Refactoring techniques                                      | 1      | 2      | 3      |
| TDD/BDD                                                     | 1      | 2      | 3      |
| DRY/YAGNI/KISS principles                                   | 2      | 3      | 4      |
| Separation of Concern vs Single Responsibility (from Solid) | 2      | 3      | 4      |
| Component Driven development in UI Design Systems           | 2      | 3      | 4      |

### Web / Client path | Client Framework agnostic skills

 | Client Framework agnostic skills                                                               | Junior | Middle | Senior |
 | ---------------------------------------------------------------------------------------------- | ------ | ------ | ------ |
 | Framework awareness                                                                            |        |        |        |
 | knowing pros-n-cons of frameworks                                                              | 1      | 2      | 3      |
 | Virtual DOM <br /> Vue.js and React                                                            | 1      | 2      | 3      |
 | Templage engines <br /> for SSG or in UI libraries/frameworks including Angular/Vue/Ember etc… | 1      | 2      | 3      |
 | Web Components and framework integration                                                       | 1      | 2      | 3      |
 | Awareness of code standard influence                                                           |        |        |        |
 | Java style, python PEP8 principles etc…                                                        | 0      | 1      | 2      |
 | Component Lifecycle concepts                                                                   | 1      | 2      | 3      |
 | “Amount of hello worlds/todos apps per individual”                                             |        |        |        |
 | ”The more you fuck around the more you find out”                                               | 2      | 3      | 4      |
 | Github/codesandbox/documentation examples references                                           |        |        |        |
 | …including creating of some                                                                    | 2      | 3      | 4      |
 | Framework Agnostic Toolbox                                                                     |        |        |        |
 | common libraries, UI frameworks, concepts and standards                                        | 1      | 2      | 3      |

### Business Logic and Operations | Network & Security

| Network & Security                                                                                                 | Junior | Middle | Senior |
| ------------------------------------------------------------------------------------------------------------------ | ------ | ------ | ------ |
| Network basics <br /> IP (black/white), DNS, VPN, URL, URI                                                         | 1      | 2      | 3      |
| The Layers of Network                                                                                              | 1      | 2      | 3      |
| Types of network communication <br /> HTTP/HTTPS, AJAX, SSE, WS/WSS, WebRTC, SSL/TLS, TCP/IP, UDP, SMTP, FTP, SMTP | 1      | 2      | 3      |
| REST                                                                                                               | 2      | 3      | 4      |
| UDP Datagram                                                                                                       | 1      | 2      | 3      |
| Firewall                                                                                                           | 1      | 2      | 3      |
| Authentication/authorisation types <br /> basic, JWT, two-factor, OAuth, OIDC                                      | 2      | 3      | 4      |
| Security attacks and prevention <br /> OWASP top 10, & security awareness in daily life…                           | 1      | 2      | 3      |
| Encryption and checksums <br /> md5 and why not safe, SHA                                                          | 1      | 2      | 3      |
| Content Security Policy                                                                                            | 1      | 2      | 3      |


### Business Logic and Operations | Data persistence / Caching / Databases


| Data persistence / Caching / Databases                                                               | Junior | Middle | Senior |
| ---------------------------------------------------------------------------------------------------- | ------ | ------ | ------ |
| CDN                                                                                                  | 2      | 3      | 4      |
| Client storage <br /> In browser, cookies, localStorage, IndexDB; or ports in mobile                 | 2      | 3      | 4      |
| Relational SQL DB essentials                                                                         | 1      | 2      | 3      |
| Document NoSQL DB essentials                                                                         | 1      | 2      | 3      |
|                                                                                                      |        |        |        |
| Relationshipt Database Management core <br /> constraings, DDL, DML, relations, Transactoins, locks… | 1      | 2      | 3      |
| ACID/BASE                                                                                            | 1      | 2      | 3      |
| Data Migration Strategies                                                                            | 0      | 1      | 2      |
| Horizontal and Vertical scaling                                                                      | 1      | 2      | 3      |


### Business Logic and Operations | SDLC

| SDLC                                                                                                             | Junior | Middle | Senior |     |
| ---------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------ | --- |
| AGILE: Lifecycle of ticket in the agile board <br /> backlog => todo => doing => done => release & when blocked | 2      | 3      | 4      |     |
| Status update by agile <br /> Ticket comment on each update, MR link,                                            | 2      | 3      | 4      |     |
| Estimating practices                                                                                             | 2      | 3      | 4      |     |
| Agile principles                                                                                                 | 2      | 3      | 4      |     |
| Technical and Non-Technical requirements                                                                         | 2      | 3      | 4      |     |
| Software organisation roles and responsibilities awareness                                                       | 2      | 3      | 4      |     |
| Sprint iterations and Release cycles, semaver                                                                    | 2      | 3      | 4      |     |

### Business Logic and Operations | DevOps

| DevOps                                                                                                           | Junior | Middle | Senior |
| ---------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------ |
| npm packages and publishing                                                                                      | 2      | 3      | 4      |
| Private NPM setup (Nexus/jFrog etc)                                                                              | 1      | 2      | 3      |
| Git essentials and Merge Request <br /> gitflow, conflict resolution, stash, cherry-picks, repository management | 2      | 3      | 4      |
| Docker                                                                                                           | 2      | 3      | 4      |
| Containerization vs. Virtualization <br /> Docker, Kubernates, LXC                                               | 1      | 2      | 3      |
| Code conventions and Code Review                                                                                 | 2      | 3      | 4      |
| monorepo                                                                                                         | 2      | 3      | 4      |
| Documentations and HowTo's generators <br /> Docusaurus, TSDoc, JSDoc, ngdoc etc                                 | 1      | 2      | 3      |
| Terminal and CLI <br /> Posix basics                                                                             | 1      | 2      | 3      |
| Linux server basics                                                                                              | 1      | 2      | 3      |
| Message brokers <br /> Kafka, RabitMQ                                                                            | 1      | 2      | 3      |


### Node.js path | Core Node.js

| Core Node.js                                                                                                                                             | Junior | Middle | Senior |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------ |
| Nonblocking Input/Output <br /> Environment:: Libuv & Event Loop/Queue/Demultiplexor                                                                     | 1      | 2      | 3      |
| Node globals, injected, modules                                                                                                                          | 2      | 3      | 4      |
| Node Modularity and sandboxing <br /> CommonJS require, ESM imports, import cache                                                                        | 2      | 3      | 4      |
| npm security audit, snyk, Github Security Alert                                                                                                          | 2      | 3      | 4      |
| Thread vs Processes <br /> RPC vs IPC (remote procedural call vs Inter-process comunication)                                                             | 2      | 3      | 4      |
| Error handling & Memory management <br /> Exceptions, type of errors, handling async errors, debugger and stacktrace, node --inspect, carbage collection | 2      | 3      | 4      |
| Work with files, File streams, and Buffers <br /> pwd, fs, path and Open Source packages                                                                 | 2      | 3      | 4      |
| Command Line Applications <br /> input, output, process.args                                                                                             | 1      | 2      | 3      |
| Web API frameworks awareness <br /> nest.js, fastify, express.js, hapi, koa, 11ty, next.js etc                                                           | 1      | 2      | 3      |
| Authentification <br /> pasport.js, jsonwebtoken, NextAuth solution, Auth0 service provider                                                              | 2      | 3      | 4      |
| Application managers <br /> nodemon, pm2, forever, nohup                                                                                                 | 1      | 2      | 3      |
| Tempalte engines <br /> ejs, pug                                                                                                                         | 2      | 3      | 4      |
| Working with Document NoSQL <br /> ORM Mongoose, Prisma ORM and native driver                                                                            | 2      | 3      | 4      |
| Working with Relational DB SQL <br /> TypeORM, Sequelize, Prisma ORM and native driver                                                                   | 2      | 3      | 4      |
| Testing node.js apps <br /> Jest, Mocha, Cypress                                                                                                         | 1      | 2      | 3      |


### Node.js path | General Node.js framework knowledge (based on. Nest.js)

| General Node.js framework knowledge (based on. Nest.js)                                                         | Junior | Middle | Senior |
| --------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------ |
| Framework essentials <br /> Controllers / Providers / Modules / Interceptors / Pipes / Guards / Middleware etc… | 2      | 3      | 4      |
| Application configuration                                                                                       | 2      | 3      | 4      |
| Creating REST and DTO                                                                                           | 2      | 3      | 4      |
| Testing app parts written in framework                                                                          | 2      | 3      | 4      |
| DB integration <br /> Postgresq with driver or Typed ORM etc…                                                   | 2      | 3      | 4      |
| Dependency Injection                                                                                            | 2      | 3      | 4      |
| Framework extensions and Framework plugins                                                                      | 2      | 3      | 4      |

### Node.js path | Node.js for desktop and embedded software 

| Node.js for desktop and embedded software           | Junior | Middle | Senior |
| --------------------------------------------------- | ------ | ------ | ------ |
| Electron, nw.js desktop apps and their architecture | 0      | 1      | 2      |
| Cross platform / Cross device apps frameworks etc…  | 0      | 1      | 2      |
| WebAssembly                                         | 0      | 1      | 2      |
| node modules C++/C/C#/whatever gyp integrations     | 0      | 1      | 2      |

### Core Concepts | Architecture

| Architecture                                                               | Junior | Middle | Senior |
| -------------------------------------------------------------------------- | ------ | ------ | ------ |
| Rendering Web Patterns <br /> SSG, SSR, ISR, Streaming SSR, Islands…       | 2      | 3      | 4      |
| SOA vs Monolith vs Microservices                                           | 1      | 2      | 3      |
| Layered Architecture <br /> Hexagonal, Onion (Clean), Plugin               | 1      | 2      | 3      |
| Serverless                                                                 | 1      | 2      | 3      |
| Solutions services <br /> AWS/Azure/Google services                        | 1      | 2      | 3      |
| Typologies types <br /> Layered, event bus, broker, pipeline, agent, queue | 1      | 2      | 3      |
| 12 factor apps                                                             | 1      | 2      | 3      |
| CRUD and CQRS                                                              | 1      | 2      | 3      |
| Event Sourcing                                                             | 1      | 2      | 3      |

import { Slim } from 'https://cdn.jsdelivr.net/npm/slim-js@5.0.10/+esm';

// Class Approach
class Greeter extends Slim {
    who = 'World'
}

// Pure component
Slim.element(
    'my-greeting',
    `<h1>Hello, {{ this.who }}!</h1>`,
    Greeter
);
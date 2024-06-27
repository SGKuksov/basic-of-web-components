import {Slim} from 'slim-js';
import {tag, template} from 'slim-js/decorators';

@tag('my-counter')
@template('<button @click="this.count++">Click me: {{this.count}}</button>')
class MyCounter extends Slim {
    count = 0;
}
import { instanceOfMainClass } from './mainClass';

export function transform() {
    let categoriesObject = instanceOfMainClass.links.forEach(el => {
        el.important = false;
    })
    return categoriesObject;
}


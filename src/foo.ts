import { deco } from './deco';

export class Foo extends HTMLElement {
    private value = 'foo';

    @deco(function (this: Foo, oldValue: string, newValue: string) {
        this.value = `foo+${newValue}`;
    })
    public accessor tag: string | undefined;
}
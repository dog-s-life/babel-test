import { Foo } from './foo';

export class Bar extends Foo {
    public get bar(): string | undefined {
        return this.tag;
    }
}
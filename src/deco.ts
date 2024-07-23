export type DecoMethod<C extends HTMLElement, V = unknown> = (this: C, oldValue: V, newValue: V) => void;

export function deco<C extends HTMLElement, V = unknown>(method: DecoMethod<C, V>): any {
    return (
        target: ClassAccessorDecoratorTarget<C, V> | ((value: V) => void),
        context: ClassAccessorDecoratorContext<C, V> | ClassSetterDecoratorContext<C, V>
    ): any => {
        const { kind } = context;

        if (kind === 'accessor') {
            return {
                set(this: C, value: V) {
                    const oldValue = (target as ClassAccessorDecoratorTarget<C, V>).get.call(this);

                    (target as ClassAccessorDecoratorTarget<C, V>).set.call(this, value);

                    if (oldValue !== value) {
                        method?.call(this, oldValue, value);
                    }
                }
            } as unknown as ClassAccessorDecoratorResult<C, V>;
        }
    };
}

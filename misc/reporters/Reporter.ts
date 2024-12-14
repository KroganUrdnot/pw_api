import {test} from "@playwright/test";

export function step(stepName?: string) {
    return function decorator<T extends (...args: unknown[]) => unknown>(
        target: T,
        context: ClassMethodDecoratorContext<T>
    ): T {
        return function replacementMethod(this: Record<string, unknown>, ...args: Parameters<T>): ReturnType<T> {
            const argsString = stepName && args.length > 0
                ? ` ${args.map((arg) => JSON.stringify(arg)).join(', ')}`
                : '';
            const name = `${stepName || String(context.name)}${argsString}`;

            return test.step(name, async () => {
                return (await target.apply(this, args)) as ReturnType<T>;
            }) as ReturnType<T>;
        } as T;
    };
}





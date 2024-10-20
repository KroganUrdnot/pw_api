import {test} from "@playwright/test";

export function step(target: any, context: any): any {
    return function replacementMethod(...args: any) {
        const name = this.constructor.name + '.' + (context.name as string);

        return test.step(name, async () => {
            return await target.call(this, ...args)
        })

    }
}
interface A {
    readonly a: number,
    //c: string, // Not allowed because of readonly-keyword rule
    mutableB: string, // Allowed because of ignore-prefix option
}

const obj1: A = { a: 1, mutableB: "foo" };
// obj1.a = 3; // Error because of readonly declaration
obj1.mutableB = "bar";

interface B {
    readonly [key: string]: number
}

const indexer1: B = { "a": 1, "b": 2 };
// indexer1["a"] = 3; // Error

function function1() {
    interface C {
        a: number, // Allowed because of ignore-local option
    }
}

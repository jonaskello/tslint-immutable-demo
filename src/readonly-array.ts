const numbers1: ReadonlyArray<number> = [1, 2, 3];
// numbers1.push(4); // Error cannot mutate a read-only array

// const numbers2: Array<number> = [1, 2, 3]; // Not allowed because of readonly-array rule

const mutableNumbers1: Array<number> = [1, 2, 3]; // Allowed becuase of ignore-prefix option

function function2() {
    const numbers2: Array<number> = [1, 2, 3]; // Allowed because of ignore-local option
}

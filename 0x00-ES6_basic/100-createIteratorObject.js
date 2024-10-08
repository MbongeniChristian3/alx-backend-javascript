export default function createIteratorObject(report) {
    const employees = [];

    for (const department of Object.values(report.allEmployees)) {
        employees.push(...department);
    }

    return {
        [Symbol.iterator]() {
            let index = 0;
            return {
                next: () => {
                    if (index < employees.length) {
                        return { value: employees[index++], done: false };
                    }
                    return { done: true };
                }
            };
        }
    };
}


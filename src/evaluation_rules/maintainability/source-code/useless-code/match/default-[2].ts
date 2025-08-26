function processData() {
    if (true) {
        console.log("This will always run");
    }
    
    console.log("Processing data...");
    
    if (true) {
        const result = calculateSomething();
        return result;
    }
    
    return "completed";
}

function calculateSomething() {
    return 42;
}
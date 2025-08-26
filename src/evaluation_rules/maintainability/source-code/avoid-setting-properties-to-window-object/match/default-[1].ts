declare global {
    interface Window {
        myConfig: { theme: string };
    }
}

function demonstrateWindowPatterns() {
    window.myConfig = { theme: "dark" };
    
    window.onload = function() {
        console.log("Page loaded");
    };
    
    if (window.navigator == undefined) {
        console.log("No navigator");
    }
    
    return "Test completed";
}

const hasNavigator = typeof window !== 'undefined';

export {};
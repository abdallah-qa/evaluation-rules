function processUserData(userData: any) {
    console.log("Hello World"); 
    return {
        id: userData.id,
        name: userData.name
    };
}

export { processUserData };
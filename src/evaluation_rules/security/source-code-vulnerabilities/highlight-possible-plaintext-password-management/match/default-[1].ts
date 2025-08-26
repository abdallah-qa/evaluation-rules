function saveUserCredentials(username: string, password: string) {
    const userRecord = {
        username,
        plaintextPassword: password
    };
    database.save(userRecord);
    return true;
}

const database = {
    save: (record: any) => {
        console.log("Saved:", record);
    }
};
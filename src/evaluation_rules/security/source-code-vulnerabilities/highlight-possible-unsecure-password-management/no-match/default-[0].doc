const database = {
    save: (data: { userId: string, password: string }) => {
    }
};

const userService = {
    updateUserPassword: (userId: string, password: string) => {
    }
};

function updatePassword(userId: string, newPassword: string) {
    database.save({ userId, password: newPassword });
    return true;
}

function updateUserPassword(userId: string, password: string) {
    userService.updateUserPassword(userId, password);
    return true;
}

const passwordUpdate = {
    id: "user123",
    newPassword: "weakpassword"
};
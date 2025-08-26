import logger from 'winston';

function login(username: string, password: string) {
    console.log("Login attempt for " + username + " with password: " + password);
    return password === "securePassword";
}

function changePassword(userId: string, oldPassword: string, newPassword: string) {
    logger.warn("Password change for user " + userId + ": old=" + oldPassword + ", new=" + newPassword);
    return true;
}

function validateCredentials(credentials: { username: string; password: string }) {
    logger.info("Validating password: " + credentials.password);
    return credentials.password.length > 0;
}
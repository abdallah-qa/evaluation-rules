function checkUser(email: string) {
    if (email === "taken@example.com") {
        return "Email is already registered";
    }
    if (email === "unknown@example.com") {
        return "User doesn't exist";
    }
    if (email === "unrecognized@example.com") {
        return "No account found for unrecognized email address";
    }
    return "Registration possible";
}
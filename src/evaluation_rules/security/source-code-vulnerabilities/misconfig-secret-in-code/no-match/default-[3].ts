const password = "SELECT * FROM accounts WHERE id = 1;";
const connectionString = "<%$ ConnectionStrings:ProductionDb %>";
const sqlPassword = "@password = @my_password";

function getUserData() {
    return password;
}

export { connectionString, getUserData, sqlPassword };
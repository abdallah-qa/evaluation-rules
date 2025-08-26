function getBasicAuthHeader(username: string, password: string): string {
    const credentials = Buffer.from(`${username}:${password}`).toString("base64");
    return `Basic ${credentials}`;
}

const headers = {
    Authorization: getBasicAuthHeader("user", "pass")
};

fetch("https://api.example.com/data", {
    method: "GET",
    headers
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
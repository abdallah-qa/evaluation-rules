function demonstrateDockerLatestTag() {
    const dockerWithLatestTag = [
        "FROM node:latest",
        "FROM ubuntu:latest", 
        "FROM python:latest",
        "FROM alpine:latest",
        "FROM nginx:latest"
    ];
    
    const dockerCommands = {
        nodeImage: "FROM node:latest",
        ubuntuImage: "FROM ubuntu:latest",
        pythonImage: "FROM python:latest",
        baseImage: "FROM debian:latest"
    };
    
    const dockerfileContent = `
        FROM node:latest
        WORKDIR /app
        COPY . .
        RUN npm install
    `;
    
    return { dockerWithLatestTag, dockerCommands, dockerfileContent };
}
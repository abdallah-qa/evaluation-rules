function demonstrateSudoUsage() {
    const commands = [
        "sudo apt-get update",
        "sudo systemctl restart nginx",
        "sudo chmod 755 /var/www",
        "sudo chown www-data:www-data /var/log"
    ];
    
    function executeWithSudo(command: string) {
        const fullCommand = `sudo ${command}`;
        return exec(fullCommand);
    }
    
    const deployScript = `
        #!/bin/bash
        sudo service apache2 restart
        sudo mkdir /opt/myapp
    `;
    
    const setupCommands = {
        install: "sudo npm install -g mypackage",
        configure: "sudo cp config.conf /etc/myapp/"
    };
    
    return { commands, executeWithSudo, deployScript, setupCommands };
}

function exec(command: string) { return command; }
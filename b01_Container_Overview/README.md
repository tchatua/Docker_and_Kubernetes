# Install Docker Engine on Ubuntu and necessary tools

## Uninstall old versions
```sh
sudo apt remove $(dpkg --get-selections docker.io docker-compose docker-compose-v2 docker-doc podman-docker containerd runc | cut -f1)
```

## Install using the apt repository

    - Set up Docker's apt repository.

```sh
# Add Docker's official GPG key:

# Update the local package index to ensure we get the latest package information
sudo apt update

# Install required packages:
# - ca-certificates: ensures SSL certificates are trusted
# - curl: used to download files from the internet
sudo apt install ca-certificates curl

# Create the directory where APT keyrings are stored
# -m 0755 sets correct permissions
# -d creates the directory if it does not already exist
sudo install -m 0755 -d /etc/apt/keyrings


# Download Docker’s official GPG key securely
# -f: fail silently on server errors
# -s: silent mode
# -S: show errors
# -L: follow redirects
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc

# Make the GPG key readable by all users
# This is required for APT to verify Docker packages
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
# Add Docker’s official APT repository configuration
# tee is used to write the repository definition with sudo privileges
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu

# Automatically detect the Ubuntu codename (e.g. jammy, focal)
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")

# Use Docker's stable release channel
Components: stable

# Specify the GPG key used to verify Docker packages
Signed-By: /etc/apt/keyrings/docker.asc
EOF

# Refresh the package index again so APT recognizes the new Docker repository
sudo apt update
```

        - Install the Docker packages.

```sh
# Install Docker Engine and related components:
# - docker-ce: Docker Community Edition engine
# - docker-ce-cli: Docker command-line interface
# - containerd.io: Container runtime used by Docker
# - docker-buildx-plugin: Enables extended build capabilities (Buildx)
# - docker-compose-plugin: Allows usage of Docker Compose via `docker compose`
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Check the current status of the Docker service
# This confirms whether Docker is running and enabled
# The Docker service starts automatically after installation. To verify that Docker is running, use:
sudo systemctl status docker

# Some systems may have this behavior disabled and will require a manual start:
# Start the Docker service manually (if it is not already running)
# Some systems do not auto-start Docker after installation
sudo systemctl start docker

# Query APT for all available versions of the docker-ce package
# apt-cache madison shows package versions available from configured repositories
apt-cache madison docker-ce | awk '{ print $3}'
## apt-cache madison docker-ce --> Lists all Docker CE versions available in your APT repositories, including repository origins.
## awk '{ print $3 }' --> Extracts only the version number (3rd column), removing extra output for clarity.

# If you was wanting to install a specific Docker version, you can do:
sudo apt install docker-ce=<VERSION> docker-ce-cli=<VERSION> containerd.io
```

    - Add non-root Docker usage or manage Docker as a non-root user
```sh
# Add the current user to the "docker" group
# This allows running Docker commands without sudo
sudo usermod -aG docker $USER


# Apply the new group membership
# You must log out and log back in for this to take effect
# Alternatively, use the command below to apply it immediately
newgrp docker

# Verify Docker can run without sudo
# Verify that the installation is successful by running the hello-world image:
# Verify that Docker is correctly installed and functional
# This command pulls and runs the official hello-world image
# If successful, Docker will print a confirmation message
# This should work without permission errors
docker run hello-world
docker ps -a
```

## Install Node.js on Ubuntu
```sh
# Refresh my local package index first:
sudo apt update

# Then install Node.js
sudo apt install nodejs

# Check that the install was successful by querying node for its version number:
node -v

# to also install npm, the Node.js package manager
sudo apt install npm
```

## Install Postman on Ubuntu

```
Postman is a powerful API development tool that helps you manage your APIs at every stage—from design and testing to documentation and monitoring. 
Originally launched as a Chrome browser plugin, Postman quickly became one of the most popular API tools used by developers worldwide. 
Today, it is available as a standalone native application (built on Electron) for all major operating systems, including Ubuntu, making it a go-to solution for API development.
```










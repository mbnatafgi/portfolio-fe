DEPLOYMENT_DIR="$(dirname "$(realpath "$0")")"
ROOT_DIR="$(dirname "$DEPLOYMENT_DIR")"
DOCKER_COMPOSE_FILE="docker-compose.yaml"
INSTALL_DOCKER_FILE="install_docker.sh"

"$DEPLOYMENT_DIR/$INSTALL_DOCKER_FILE"

sudo docker volume create portfolio-fe

sudo docker-compose -f "$ROOT_DIR/$DOCKER_COMPOSE_FILE" up -d --build
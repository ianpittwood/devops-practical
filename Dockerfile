FROM keymetrics/pm2:12-alpine
ARG PROJECT="devops-practical"
ARG PROJECT_DIR="/opt/${PROJECT}"

ENV DATABASE_USER="test_user"
ENV DATABASE_PASSWORD="test_password"
ENV DATABASE_HOST="localhost"
ENV DATABASE_PORT="27017"
ENV DATABASE_NAME="database"
ENV NODE_ENV="development"
ENV ENTRYPOINT_PATH="${PROJECT_DIR}/entrypoint.sh"

RUN mkdir -p $PROJECT_DIR/node_modules
WORKDIR $PROJECT_DIR
COPY package*.json ./
RUN npm install -g npm@latest && npm install
COPY . .

EXPOSE 3000
CMD [ "/bin/sh", "entrypoint.sh" ]
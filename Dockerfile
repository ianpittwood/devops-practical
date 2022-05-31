FROM node:12-alpine
ARG PROJECT="devops-practical"
ARG PROJECT_DIR="/opt/${PROJECT}"

ENV MONGODB_URL="mongodb://localhost:27017/database"

RUN mkdir -p $PROJECT_DIR/node_modules
WORKDIR $PROJECT_DIR
COPY package*.json ./
RUN npm install -g npm@latest && npm ci --only=production
COPY . .

EXPOSE 3000
CMD [ "npm", "run", "prod" ]
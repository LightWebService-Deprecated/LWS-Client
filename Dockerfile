FROM node:17-bullseye-slim

# Install Serve
RUN yarn global add serve

# Setup Workspace
RUN mkdir -p /src
WORKDIR /src

# Copy All files to SRC
COPY . .

# Build Published OUTPUT
RUN yarn install
RUN yarn run build

# Cleanup
RUN rm -rf node_modules

# 실행 명령어
ENTRYPOINT ["serve", "-s", "build"]
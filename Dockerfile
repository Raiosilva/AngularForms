FROM node:10.15.3-slim
ENV INSTALL_PATH /formsAngular
RUN npm install -g @angular/cli
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY package.json .
COPY . .
RUN npm install
CMD ["npm", "start"]

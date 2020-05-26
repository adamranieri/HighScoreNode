FROM node
COPY . /workspace
WORKDIR /workspace/HighScoreApp
RUN npm install
EXPOSE 8000
ENTRYPOINT ["node","main.js"]

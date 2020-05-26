FROM node
COPY . /workspace
WORKDIR /workspace
EXPOSE 8000
ENTRYPOINT ["node","main.js"]

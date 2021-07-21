## Dependencies
See ```package.json```

## Getting Started
You need to have a [MongoDB](https://www.mongodb.com/) in your system. I suggest
that you get it as a [Docker](https://www.docker.com/) image. The following
steps are to setup your database:

### Pull MongoDB Image
``` sh
sudo docker pull mongo
```
### Create Directory in you system to have persistent data
``` sh
sudo mkdir -p /mongodata
```
### Start the Docker Container and Enter the Bash Shell
``` sh
sudo docker run -it -v /mongodata:/data/db -p 27017:27017 --name mongodb -d mongo
sudo docker exec -it mongodb bash
```
### Create DataBase and Collection
``` sh
mongo
> use todoapp
> db.todoapp.insert({ name: 'todoapp' })
```

### Project setup
```sh
npm install
```
### For development
```sh
npm run dev:start
```
### For production
```sh
npm run start
```
### Run your unit tests
## Before, get up and running the DataBase! You need it to test the API endpoints
```sh
npm run test:unit
```

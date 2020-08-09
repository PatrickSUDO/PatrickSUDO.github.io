---
title: Deploying Django app on Heroku by Docker
date: 2020-07-30
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - DevOps
  - Docker
categories:
  - DevOps
---

To use docker, the first thing is to install docker on your local from its
[official page](https://docs.docker.com/get-docker/). The detail of how docker works will be introduced in the future.

We can test the docker is successfully installed by creating a "hello-world" image. 
```
docker run hello-world
```

```
Unable to find image 'hello-world:latest' locally
...
latest: Pulling from library/hello-world
1b930d010525: Pull complete 
...

Hello from Docker!
This message shows that your installation appears to be working correctly.
...
```


Also, the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) should be installed.


Login to Docker
```
docker login
```

Login to Heroku
```
heroku login
```

Before we deploy our app on the Heroku, we can simulate the process on the local to make sure everything goes fine. For example, all the dependencies are install successfully. Then we can push on to the Heroku. 

First, the docker image will be created and deployed on the local by the procedure on the [official documentation](https://docs.docker.com/compose/django/). The gist is preparing the dockerfile and the docker-compose.yml file to tell the docker the commend you want to execute, and using docker-compose method to 

But, Heroku does not support docker-compose( [Local Development with Docker Compose](https://devcenter.heroku.com/articles/local-development-with-docker-compose)). The procedure can be slightly different here.

Next, we create a file called dockerfile in the root directory of your project

```txt
#dockerfile
#  Set python 3.7  Linux environment
FROM python:3.7

# set python environment variable
ENV PYTHONUNBUFFERED 1

# create code folder and set as a working dir
RUN mkdir /app
WORKDIR /app
COPY . /app/

# update pip
RUN pip install pip -U

# install dependency
RUN pip install -r requirements.txt

# start the django server and the PORT variable will be given by Heroku
CMD python manage.py runserver 0.0.0.0:$PORT
```

$PORT, will be decided by Heroku server.

On your project directory build the docker image.

```
docker build --tag <image-name> .
```

If it build successfully, we will see the your image by executing the commend.

```
docker images
```

Run the image.
```
docker run -p 8000:8000 -e PORT=8000 <image-name>
```

```
Performing system checks...

Watching for file changes with StatReloader
System check identified no issues (0 silenced).
July 30, 2020 - 09:11:38
Django version 3.0.7, using settings 'dublin_bus_time.settings'
Starting development server at http://0.0.0.0:8000/
Quit the server with CONTROL-C.
```

And we can see our web app run in the browser via above hyperlink.

### Deploying Django To Heroku With Docker

We create an app on the Heroku using Heroku CLI

```
heroku create <YOUR_APP_NAME>
heroku git:remote --app <YOUR_APP_NAME>
```

Then, we can push our docker image onto the Heroku


```
heroku container:login
```
```
heroku container:push web -a <YOUR_APP_NAME>
```

After it runs successfully, we can release the image on our app.

```
heroku container:release web -a <YOUR_APP_NAME>
```

And finally, we can open our app one the browser.
```
heroku open -a <YOUR_APP_NAME>
```

We can see the content if it deploys successfully.

P.S Some commend on Heroku CLI can be found [here](https://devcenter.heroku.com/articles/heroku-cli-commands)
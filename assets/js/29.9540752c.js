(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{514:function(e,s,n){"use strict";n.r(s);var a=n(4),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("To use docker, the first thing is to install docker on your local from its\n"),n("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official page"),n("OutboundLink")],1),e._v(". The detail of how docker works will be introduced in the future.")]),e._v(" "),n("p",[e._v('We can test the docker is successfully installed by creating a "hello-world" image.')]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker run hello-world\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Unable to find image 'hello-world:latest' locally\n...\nlatest: Pulling from library/hello-world\n1b930d010525: Pull complete \n...\n\nHello from Docker!\nThis message shows that your installation appears to be working correctly.\n...\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br")])]),n("p",[e._v("Also, the "),n("a",{attrs:{href:"https://devcenter.heroku.com/articles/heroku-cli#download-and-install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Heroku CLI"),n("OutboundLink")],1),e._v(" should be installed.")]),e._v(" "),n("p",[e._v("Login to Docker")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker login\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Login to Heroku")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("heroku login\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Before we deploy our app on the Heroku, we can simulate the process on the local to make sure everything goes fine. For example, all the dependencies are install successfully. Then we can push on to the Heroku.")]),e._v(" "),n("p",[e._v("First, the docker image will be created and deployed on the local by the procedure on the "),n("a",{attrs:{href:"https://docs.docker.com/compose/django/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation"),n("OutboundLink")],1),e._v(". The gist is preparing the dockerfile and the docker-compose.yml file to tell the docker the commend you want to execute, and using docker-compose method to")]),e._v(" "),n("p",[e._v("But, Heroku does not support docker-compose( "),n("a",{attrs:{href:"https://devcenter.heroku.com/articles/local-development-with-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[e._v("Local Development with Docker Compose"),n("OutboundLink")],1),e._v("). The procedure can be slightly different here.")]),e._v(" "),n("p",[e._v("Next, we create a file called dockerfile in the root directory of your project")]),e._v(" "),n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("#dockerfile\n#  Set python 3.7  Linux environment\nFROM python:3.7\n\n# set python environment variable\nENV PYTHONUNBUFFERED 1\n\n# create code folder and set as a working dir\nRUN mkdir /app\nWORKDIR /app\nCOPY . /app/\n\n# update pip\nRUN pip install pip -U\n\n# install dependency\nRUN pip install -r requirements.txt\n\n# start the django server and the PORT variable will be given by Heroku\nCMD python manage.py runserver 0.0.0.0:$PORT\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br")])]),n("p",[e._v("$PORT, will be decided by Heroku server.")]),e._v(" "),n("p",[e._v("On your project directory build the docker image.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker build --tag <image-name> .\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("If it build successfully, we will see the your image by executing the commend.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker images\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Run the image.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker run -p 8000:8000 -e PORT=8000 <image-name>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Performing system checks...\n\nWatching for file changes with StatReloader\nSystem check identified no issues (0 silenced).\nJuly 30, 2020 - 09:11:38\nDjango version 3.0.7, using settings 'dublin_bus_time.settings'\nStarting development server at http://0.0.0.0:8000/\nQuit the server with CONTROL-C.\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[e._v("And we can see our web app run in the browser via above hyperlink.")]),e._v(" "),n("h3",{attrs:{id:"deploying-django-to-heroku-with-docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploying-django-to-heroku-with-docker"}},[e._v("#")]),e._v(" Deploying Django To Heroku With Docker")]),e._v(" "),n("p",[e._v("We create an app on the Heroku using Heroku CLI")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("heroku create <YOUR_APP_NAME>\nheroku git:remote --app <YOUR_APP_NAME>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("Then, we can push our docker image onto the Heroku")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("heroku container:login\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("heroku container:push web -a <YOUR_APP_NAME>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("After it runs successfully, we can release the image on our app.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("heroku container:release web -a <YOUR_APP_NAME>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("And finally, we can open our app one the browser.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("heroku open -a <YOUR_APP_NAME>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("We can see the content if it deploys successfully.")]),e._v(" "),n("p",[e._v("P.S Some commend on Heroku CLI can be found "),n("a",{attrs:{href:"https://devcenter.heroku.com/articles/heroku-cli-commands",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=t.exports}}]);
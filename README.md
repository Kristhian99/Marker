# MARKET APP 
 
 This project pretends to give an application that shows information to the users about the disponibility of some kind of fruits in different cities of France. Also, this application provides some functionalities to the administrator of the store which are protected by a login interface. The project makes use of React-Native for the development of the application, Spring-Boot, and Java for the Back-end and to store the information MongoDB 

 To get the compile application ->
 To get the code ->  
 
## Starting 🚀

The project is divided into two parts, the Back-End with the database and the Application (Market),those parts are localized into FruitApi and FruitApp respectively.




### Pre-requisitos 📋

The tools that you need to install this app:
--Node js  with expo-cli (to start the application)
--Docker (To run the database into a container )
--Java jdk 16+ (To run the back end)
--The aplication "Expo Go" to run the aplication in your mobile 
   

#### Node Js
To install NodeJs -> https://nodejs.org/es/

After installing Node Js, from the command prompt execute this command to install expo cli 

```
npm install -g expo-cli
```
#### Java
--To install java you can go to this page https://www.oracle.com/java/technologies/downloads/#jdk17-linux 
The only requirement is to use a version 16+ of the jdk, even if the project doesn't use the new functionalities to avoid problems with the execution of the program that is the best option 

#### Docker 
-To install docker you can go to this page https://www.docker.com/get-started

#### Expo Go 
Expo Go provide us a simulator in real-time to execute the app without the necessity to install a package on our device   
    -Android->https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es_MX&gl=US
    -IOS -> https://apps.apple.com/app/expo-go/id982107779


### Installation  🔧

#### Initialize the database

The first thing to do is start the container that provides us tho the MongoDB interface and functionality. To initialize the container since the command prompt you have to move to the ubication of the yaml file, so you have to move (  ...../Marker/FruitApi/marker_api )
When you already be there you have to execute the next command 

```
docker-compose -f docker-compose.yaml up
```

After that, the container had to be initialized, and since your browser, you can have access to the database if you type the next url:

```
http://localhost:8081/
```

#### Initialize the rest-api (Back-End)
To start the Rest-API you can launch the project with an IDE that supports the Spring Boot framework (Intellij,Eclipse, VSC, etc), to make
that you have to run the DemoApplication.java which one you can find in this direction:

```
...Marker\FruitApi\marker_api\src\main\java\com\example\demo\DemoApplication.java
```

But if you don't have the IDE or you don't want it, you can execute the rest service from the command prompt (If you already have installed JDK).
To make that you have to execute the jar file, so from the command prompt move to the ubication of the file:

```
....../Marker/FruitApi/marker_api/target
```

When you already are in the ubication execute the next command:

```
java -jar demo-0.0.1-SNAPSHOT.jar
```
If the execution works correctly you can go to the next URL since your browser to get information about the service

```
http://localhost:8080/swagger-ui.html
```
#### Initialize the Application

To initialize the app you only have to make two things, configure the IP address to can access the rest-service, and execute the run command.
So first to configure the Ip address of your device you can type the command ipconfig in the command prompt and get that data from the variable  IPv4 Address of the Wireless LAN adapter Wi-Fi information.

So now you have to modify the api.js file, so you can find this file in this route:


```
.../Marker/FruitApp/api.js
```

The first line of the file in which you have to edit:

```
const Api='http://IPv4Address:8080/api/vi/'

```
The  IPv4 Address is where you have to type your IP address, save the file.

Finally, to start the application, since your command prompt you have to move to the directory of the Application:
```
...Marker/FruitApp

```
From there you only need to execute the command

```
npm install yet
```
and 
```
 npm start 
 
```

After that, the console shows you a QR-code that you have to scan since the Expo-Go and the app will initialize in your device 


To know about the functionalities of the app you can read the Marker App document 




## Build with 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Spring-Boot]
* [React-Native]
* [Java,Maven,NodeJS]




* **Cristhian Cocoletzi** - *Developer* - [Kristhian99](https://github.com/Kristhian99)

Para ejecutar en ambiente local la aplicacion debera:

1.Descargar el repositorio https://github.com/JhonatanD09/Prueba-Kuepa.git donde se encuentran los proyectos tanto de backend como de frontend

2.Dentro de cada proyecto abrir una terminal y ejecutar el comando: npm i , para instalar las dependencias necesarias

3.Antes de ejecutar el servidor backend debera tener una base de datos MySql, en donde debera ejecutar los siguientes comandos uno a uno

	1.CREATE SCHEMA `kuepa` ;

	2.CREATE USER 'kuepa'@'localhost' IDENTIFIED BY '1234';

	3.GRANT ALL PRIVILEGES ON * . * TO 'kuepa'@'localhost';

	4.FLUSH PRIVILEGES;

	5.USE kuepa;

	6.CREATE TABLE `users` (
  		`iduser` int NOT NULL AUTO_INCREMENT,
  		`userName` varchar(45) NOT NULL,
  		`name` varchar(45) NOT NULL,
  		`rol` varchar(45) NOT NULL,
  		`password` varchar(45) NOT NULL,
  		PRIMARY KEY (`iduser`)
		) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

	7.CREATE TABLE `messages` (
  		`idmessage` int NOT NULL AUTO_INCREMENT,
  		`text` varchar(1000) NOT NULL,
  		`iduser` int DEFAULT NULL,
  		PRIMARY KEY (`idmessage`),
  		KEY `user_fk_idx` (`iduser`),
  		CONSTRAINT `user_fk` FOREIGN KEY (`iduser`) REFERENCES `users` (`iduser`)
		) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
4. Una vez ejecutadas estas sentencias SQL ya existe el usuario y la base de datos con las tablas que necesita el servidor para
   la persistencia
5.Ejecute el proyecto del backend usando el comando npm start
6.Ejecute el proyecto del frontend usando el comando npm start
7. Ingrese al aplicativo mediate la url  http://localhost:4200/
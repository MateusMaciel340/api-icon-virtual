-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: icone_virtual
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_categoria`
--

DROP TABLE IF EXISTS `tb_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_categoria` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `titulo_categoria` varchar(50) NOT NULL,
  `descricao_categoria` longtext,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_categoria`
--

LOCK TABLES `tb_categoria` WRITE;
/*!40000 ALTER TABLE `tb_categoria` DISABLE KEYS */;
INSERT INTO `tb_categoria` VALUES (5,'Camisa','Descrição geral sobre camisa'),(6,'Chinelo','Descrição geral sobre chinelo'),(9,'Categoria nova','categoria nova...');
/*!40000 ALTER TABLE `tb_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_cliente`
--

DROP TABLE IF EXISTS `tb_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_cliente` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nome_cliente` varchar(100) NOT NULL,
  `email_cliente` varchar(70) NOT NULL,
  `senha_cliente` varchar(60) DEFAULT NULL,
  `tipo_cliente` int DEFAULT '1',
  `cpf_cliente` varchar(15) NOT NULL,
  `telefone_cliente` varchar(20) NOT NULL,
  `endereco_cliente` varchar(50) NOT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `email_cliente` (`email_cliente`),
  UNIQUE KEY `cpf_cliente` (`cpf_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cliente`
--

LOCK TABLES `tb_cliente` WRITE;
/*!40000 ALTER TABLE `tb_cliente` DISABLE KEYS */;
INSERT INTO `tb_cliente` VALUES (4,'Mateus de Sousa Maciel','mateus@gmail.com','$2a$10$ZYPszI.3hp/fIkvxTwQJDeny39bJ1Ke47UCau6PeQh6LykhbS5/j.',1,'098.890.678-90','(85) 99278 - 8900','Rua José de Emanuel Oliveira, 68'),(8,'João da Silva Fernando1','joao1@gmail.com','$2a$10$hhQ33ADkq5k6prlH80IMFemLHVJNkVvWdHoN4GFgQe4Ne15x51HhK',1,'091.890.678-91','(85) 99278 - 8900','Rua José de Emanuel Oliveira, 681'),(13,'Marcos','marcos@gmail.com','$2a$10$sza0FHKIPOKqgL5e8kPrj.syKeJolRgWW9hBJfn42FkSNovmRB8ui',1,'987.908.987-90','(88) 8790 - 7656','Rua Seila');
/*!40000 ALTER TABLE `tb_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_favorito`
--

DROP TABLE IF EXISTS `tb_favorito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_favorito` (
  `id_favorito` int NOT NULL AUTO_INCREMENT,
  `status_favorito` char(1) DEFAULT 'n',
  `cliente_id` int DEFAULT NULL,
  `produto_id` int DEFAULT NULL,
  PRIMARY KEY (`id_favorito`),
  KEY `favorito_usuario` (`cliente_id`),
  KEY `favorito_produto` (`produto_id`),
  CONSTRAINT `favorito_produto` FOREIGN KEY (`produto_id`) REFERENCES `tb_produto` (`id_produto`),
  CONSTRAINT `favorito_usuario` FOREIGN KEY (`cliente_id`) REFERENCES `tb_cliente` (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_favorito`
--

LOCK TABLES `tb_favorito` WRITE;
/*!40000 ALTER TABLE `tb_favorito` DISABLE KEYS */;
INSERT INTO `tb_favorito` VALUES (8,'p',4,5),(9,'p',4,6),(10,'p',4,7),(12,'p',8,7),(14,'p',8,6),(17,'p',8,8);
/*!40000 ALTER TABLE `tb_favorito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_produto`
--

DROP TABLE IF EXISTS `tb_produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_produto` (
  `id_produto` int NOT NULL AUTO_INCREMENT,
  `titulo_produto` varchar(45) NOT NULL,
  `descricao_produto` longtext,
  `preco_produto` double NOT NULL,
  `estoque_produto` int DEFAULT NULL,
  `categoria_id` int DEFAULT NULL,
  PRIMARY KEY (`id_produto`),
  KEY `produto_categoria` (`categoria_id`),
  CONSTRAINT `produto_categoria` FOREIGN KEY (`categoria_id`) REFERENCES `tb_categoria` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_produto`
--

LOCK TABLES `tb_produto` WRITE;
/*!40000 ALTER TABLE `tb_produto` DISABLE KEYS */;
INSERT INTO `tb_produto` VALUES (5,'Camisa do Messi1','camisa do Messi',5001,30051,5),(6,'Camisa do Neymar1','camisa do Neymar1',5001,3001,6),(7,'Camisa do Mbappe1','camisa do Mbappe',500,300,6),(8,'Camisa do CR7','camisa do CR7',500,300,9);
/*!40000 ALTER TABLE `tb_produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'icone_virtual'
--

--
-- Dumping routines for database 'icone_virtual'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-20 20:07:57

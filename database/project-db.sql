-- Create database

DROP DATABASE IF EXISTS ice_dude;
CREATE DATABASE ice_dude;
USE ice_dude;

-- Tables

-- Table for Users
CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Address VARCHAR(255),
    CONSTRAINT unique_username UNIQUE (Username),
    CONSTRAINT unique_email UNIQUE (Email)
);

-- Table for Ice Cream Flavors
CREATE TABLE IceCreamFlavors (
    FlavorID INT PRIMARY KEY AUTO_INCREMENT,
    FlavorName VARCHAR(255) NOT NULL,
    Price DECIMAL(8, 2) NOT NULL
);


-- Table for Ice Cream Orders
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    OrderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Table for Ice Cream Order Items
CREATE TABLE OrderItems (
    OrderItemID INT PRIMARY KEY AUTO_INCREMENT,
    OrderID INT,
    FlavorID INT,
    Quantity INT NOT NULL,
    CONSTRAINT positive_quantity CHECK (Quantity > 0),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (FlavorID) REFERENCES IceCreamFlavors(FlavorID)
);


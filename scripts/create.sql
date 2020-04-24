create table customer(
customer_id INT NOT NULL AUTO_INCREMENT,
customer_name VARCHAR(100),
age int,
gender VARCHAR(100),
PRIMARY KEY(customer_id)
);

create table customerDetails (
detail_id INT NOT NULL AUTO_INCREMENT,
customer_id INT NOT NULL,
address VARCHAR(2000),
PRIMARY KEY(detail_id),
FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
)
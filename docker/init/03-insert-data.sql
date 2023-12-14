INSERT INTO wallet.clients (id, name, email, created_at) VALUES
("e5211f98-bdc6-4724-99fb-436162172973", "John Doe", "j@j.com", "2023-12-08"),
("e1723f22-687e-48db-bfa8-24c695783b03", "Jane Doe", "jane@j.com", "2023-12-08");

INSERT INTO wallet.accounts (id, client_id, balance, created_at) VALUES
("198557c3-5cba-4421-a48f-aa52b9bdfc43", "e5211f98-bdc6-4724-99fb-436162172973", 1000, "2023-12-08"),
("20832441-d400-4a74-8413-795a65d739d3", "e1723f22-687e-48db-bfa8-24c695783b03", 0, "2023-12-08");
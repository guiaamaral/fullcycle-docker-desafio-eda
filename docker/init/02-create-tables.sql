CREATE TABLE IF NOT EXISTS wallet.clients (
    id varchar(36) NOT NULL,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    created_at datetime,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS wallet.accounts (
    id varchar(36) NOT NULL,
    client_id varchar(36),
    balance int,
    created_at datetime,
    PRIMARY KEY (id),
    CONSTRAINT FK_client_id
    FOREIGN KEY (client_id) REFERENCES wallet.clients(id)
);

CREATE TABLE IF NOT EXISTS wallet.transactions (
    id varchar(36) NOT NULL,
    created_at datetime,
    account_id_from varchar(36) NOT NULL,
    account_id_to varchar(36) NOT NULL,
    amount int,
    PRIMARY KEY (id),
    CONSTRAINT FK_account_id_from FOREIGN KEY (account_id_from)
    REFERENCES wallet.accounts(id),
    CONSTRAINT FK_account_id_to FOREIGN KEY (account_id_to)
    REFERENCES wallet.accounts(id)
);

CREATE TABLE IF NOT EXISTS balance.balances (
    id varchar(36) NOT NULL,
    created_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updated_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
    account_id varchar(36) NOT NULL,
    balance int,
    PRIMARY KEY (id)
);

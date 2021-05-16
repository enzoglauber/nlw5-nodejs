yarn add express
yarn add @types/express -D

yarn add typescript -D 
yarn tsc --init

yarn add ts-node-dev -D

yarn add typeorm reflect-metadata sqlite3
yarn orm migration:run
yarn orm migration:create -n CreateSettings
yarn orm migration:create -n CreateUsers
yarn orm migration:create -n CreateMessages
yarn orm migration:create -n CreateConnections

yarn add uuid
yarn add @types/uuid -D

yarn add socket.io
yarn add socket.io-client
yarn add @types/socket.io -D
yarn add ejs

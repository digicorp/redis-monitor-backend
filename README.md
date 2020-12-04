# redis-monitor-backend
This repository contains the backend code of redis-monitor

## Installation

Run one of the command below

```bash
npm install
```

The build tasks use **Gulp tasks runner**. Typescript is transpiled to Javascript in the /build directory.
This sample use Sqlite3 but you can easily change it and use your favorite relational database (npm) :

```bash
npm install --save mysql // For both mysql and mariadb dialects
npm install --save sqlite3
npm install --save tedious // MSSQL
npm install --save sequelize
npm install --save sequelize-cli
```

## Sequelize Configuration
Sequelize init
sequelize model:create --name eventLogs redis_version:string,redis_git_sha1:integer,redis_git_dirty // for create a new table
sequelize db:migrate // for db migration


## Configure your database

Sequelize configuration and entities can be found in /Src/sqlz directory.

| Directory  | Description                                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| config     | Your database configuration.                                                                                                  |
| migrations | Your database migrations scripts. Keep this files in Javascript and run sequelize db:migrate to migrate your database schema. |
| models     | Sequelize entities.                                                                                                           |

First, define your database schema in config/config.json file.
Use [Sequelize CLI](http://docs.sequelizejs.com/en/v3/docs/migrations/) to initialize your database.

In models/ directory, the index.ts file define the DbConnection interface. When you create a new Sequelize entity, add its reference in this interface to fully use Typescript's superpower !

## Run the project

```bash
npm start
```

Your web server is now exposed on http://localhost:3000 and also deployed on https://redis-monitor-nodejs.herokuapp.com/

### POST /api/languages

curl -X POST -H 'Content-Type: application/json' -d '{{"redis_version":"3.0.504","redis_git_sha1":0,"redis_git_dirty":0,"redis_build_id":"a4f7a6e86f2d60b3","redis_mode":"standalone","os":"Windows ","arch_bits":64,
"multiplexing_api":"WinSock_IOCP","process_id":1724,"run_id":"63916002676a43625801ca9fc62f1a433079c9f5","tcp_port":6379,"uptime_in_seconds":22839,"uptime_in_days":0,"hz":10,"lru_clock":13240580,"config_file":"C:\\Program Files\\Redis\\redis.windows-service.conf","connected_clients":1,"client_longest_output_list":0,"client_biggest_input_buf":0,"blocked_clients":0,"used_memory":692080,"used_memory_human":"675.86K","used_memory_rss":633432,"used_memory_peak":713976,"used_memory_peak_human":"697.24K","used_memory_lua":36864,"mem_fragmentation_ratio":0.92,"mem_allocator":"jemalloc-3.6.0","loading":0,
"rdb_changes_since_last_save":0,"rdb_bgsave_in_progress":0,"rdb_last_save_time":1607053261,"rdb_last_bgsave_status":"ok","rdb_last_bgsave_time_sec":-1,"rdb_current_bgsave_time_sec":-1,"aof_enabled":0,
"aof_rewrite_in_progress":0,"aof_rewrite_scheduled":0,"aof_last_rewrite_time_sec":-1,"aof_current_rewrite_time_sec":-1,"aof_last_bgrewrite_status":"ok","aof_last_write_status":"ok","total_connections_received":1479,
"total_commands_processed":1455,"instantaneous_ops_per_sec":0,"total_net_input_bytes":20398,"total_net_output_bytes":2798230,"instantaneous_input_kbps":0.0,"instantaneous_output_kbps":0.0,"rejected_connections":0,
"sync_full":0,"sync_partial_ok":0,"sync_partial_err":0,"expired_keys":0,"evicted_keys":0,"keyspace_hits":0,"keyspace_misses":0,"pubsub_channels":0,"pubsub_patterns":0,"latest_fork_usec":0,"migrate_cached_sockets":0,
"role":"master","connected_slaves":0,"master_repl_offset":0,"repl_backlog_active":0,"repl_backlog_size":1048576,"repl_backlog_first_byte_offset":0,"repl_backlog_histlen":0,"used_cpu_sys":0.53,"used_cpu_user":0.59,"used_cpu_sys_children":0.0,"used_cpu_user_children":0.0,"cluster_enabled":0,"get_time":1.9998550415039062}}' localhost:3000/api/v1/eventLogs/insert

### GET /api/appusers

curl -X GET -H 'Content-Type: application/json' localhost:3000/api/v1/eventLogs/list

## Lint your code before you commit!

In a collaborative project, it's always a pain when you have to work on files not correctly formatted.
Now before each commit, yout typescript files are linted based on your tsconfig.json > .editorconfig > tslint.json files.

By the way you can also run the command with a npm script





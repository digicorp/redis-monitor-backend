'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class eventLogModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  eventLogModel.init({
    redis_version: DataTypes.STRING,
    redis_git_sha1: DataTypes.INTEGER,
    redis_git_dirty: DataTypes.INTEGER,
    redis_build_id: DataTypes.STRING,
    redis_mode: DataTypes.STRING,
    os: DataTypes.STRING,
    arch_bits: DataTypes.INTEGER,
    multiplexing_api: DataTypes.STRING,
    process_id: DataTypes.INTEGER,
    run_id: DataTypes.STRING,
    tcp_port: DataTypes.INTEGER,
    uptime_in_seconds: DataTypes.INTEGER,
    uptime_in_days: DataTypes.INTEGER,
    hz: DataTypes.INTEGER,
    lru_clock: DataTypes.INTEGER,
    config_file: DataTypes.STRING,
    connected_clients: DataTypes.INTEGER,
    client_longest_output_list: DataTypes.INTEGER,
    client_biggest_input_buf: DataTypes.INTEGER,
    blocked_clients: DataTypes.INTEGER,
    used_memory: DataTypes.INTEGER,
    used_memory_human: DataTypes.STRING,
    used_memory_rss: DataTypes.INTEGER,
    used_memory_peak: DataTypes.INTEGER,
    used_memory_peak_human: DataTypes.STRING,
    used_memory_lua: DataTypes.INTEGER,
    mem_fragmentation_ratio: DataTypes.INTEGER,
    mem_allocator: DataTypes.STRING,
    loading: DataTypes.INTEGER,
    rdb_changes_since_last_save: DataTypes.INTEGER,
    rdb_bgsave_in_progress: DataTypes.INTEGER,
    rdb_last_save_time: DataTypes.INTEGER,
    rdb_last_bgsave_status: DataTypes.STRING,
    rdb_last_bgsave_time_sec: DataTypes.INTEGER,
    rdb_current_bgsave_time_sec: DataTypes.INTEGER,
    aof_enabled: DataTypes.INTEGER,
    aof_rewrite_in_progress: DataTypes.INTEGER,
    aof_rewrite_scheduled: DataTypes.INTEGER,
    aof_last_rewrite_time_sec: DataTypes.INTEGER,
    aof_current_rewrite_time_sec: DataTypes.INTEGER,
    aof_last_bgrewrite_status: DataTypes.STRING,
    aof_last_write_status: DataTypes.STRING,
    total_connections_received: DataTypes.INTEGER,
    total_commands_processed: DataTypes.INTEGER,
    instantaneous_ops_per_sec: DataTypes.INTEGER,
    total_net_input_bytes: DataTypes.INTEGER,
    total_net_output_bytes: DataTypes.INTEGER,
    instantaneous_input_kbps: DataTypes.FLOAT,
    instantaneous_output_kbps: DataTypes.FLOAT,
    rejected_connections: DataTypes.INTEGER,
    sync_full: DataTypes.INTEGER,
    sync_partial_ok: DataTypes.INTEGER,
    sync_partial_err: DataTypes.INTEGER,
    expired_keys: DataTypes.INTEGER,
    evicted_keys: DataTypes.INTEGER,
    keyspace_hits: DataTypes.INTEGER,
    keyspace_misses: DataTypes.INTEGER,
    pubsub_channels: DataTypes.INTEGER,
    pubsub_patterns: DataTypes.INTEGER,
    latest_fork_usec: DataTypes.INTEGER,
    migrate_cached_sockets: DataTypes.INTEGER,
    role: DataTypes.STRING,
    connected_slaves: DataTypes.INTEGER,
    master_repl_offset: DataTypes.INTEGER,
    repl_backlog_active: DataTypes.INTEGER,
    repl_backlog_size: DataTypes.INTEGER,
    repl_backlog_first_byte_offset: DataTypes.INTEGER,
    repl_backlog_histlen: DataTypes.INTEGER,
    used_cpu_sys: DataTypes.FLOAT,
    used_cpu_user: DataTypes.FLOAT,
    used_cpu_sys_children: DataTypes.FLOAT,
    used_cpu_user_children: DataTypes.FLOAT,
    cluster_enabled: DataTypes.INTEGER,
    get_time: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'eventLogModel',
  });
  return eventLogModel;
};
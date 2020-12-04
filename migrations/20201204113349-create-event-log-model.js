'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('eventLogModels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      redis_version: {
        type: Sequelize.STRING
      },
      redis_git_sha1: {
        type: Sequelize.INTEGER
      },
      redis_git_dirty: {
        type: Sequelize.INTEGER
      },
      redis_build_id: {
        type: Sequelize.STRING
      },
      redis_mode: {
        type: Sequelize.STRING
      },
      os: {
        type: Sequelize.STRING
      },
      arch_bits: {
        type: Sequelize.INTEGER
      },
      multiplexing_api: {
        type: Sequelize.STRING
      },
      process_id: {
        type: Sequelize.INTEGER
      },
      run_id: {
        type: Sequelize.STRING
      },
      tcp_port: {
        type: Sequelize.INTEGER
      },
      uptime_in_seconds: {
        type: Sequelize.INTEGER
      },
      uptime_in_days: {
        type: Sequelize.INTEGER
      },
      hz: {
        type: Sequelize.INTEGER
      },
      lru_clock: {
        type: Sequelize.INTEGER
      },
      config_file: {
        type: Sequelize.STRING
      },
      connected_clients: {
        type: Sequelize.INTEGER
      },
      client_longest_output_list: {
        type: Sequelize.INTEGER
      },
      client_biggest_input_buf: {
        type: Sequelize.INTEGER
      },
      blocked_clients: {
        type: Sequelize.INTEGER
      },
      used_memory: {
        type: Sequelize.INTEGER
      },
      used_memory_human: {
        type: Sequelize.STRING
      },
      used_memory_rss: {
        type: Sequelize.INTEGER
      },
      used_memory_peak: {
        type: Sequelize.INTEGER
      },
      used_memory_peak_human: {
        type: Sequelize.STRING
      },
      used_memory_lua: {
        type: Sequelize.INTEGER
      },
      mem_fragmentation_ratio: {
        type: Sequelize.INTEGER
      },
      mem_allocator: {
        type: Sequelize.STRING
      },
      loading: {
        type: Sequelize.INTEGER
      },
      rdb_changes_since_last_save: {
        type: Sequelize.INTEGER
      },
      rdb_bgsave_in_progress: {
        type: Sequelize.INTEGER
      },
      rdb_last_save_time: {
        type: Sequelize.INTEGER
      },
      rdb_last_bgsave_status: {
        type: Sequelize.STRING
      },
      rdb_last_bgsave_time_sec: {
        type: Sequelize.INTEGER
      },
      rdb_current_bgsave_time_sec: {
        type: Sequelize.INTEGER
      },
      aof_enabled: {
        type: Sequelize.INTEGER
      },
      aof_rewrite_in_progress: {
        type: Sequelize.INTEGER
      },
      aof_rewrite_scheduled: {
        type: Sequelize.INTEGER
      },
      aof_last_rewrite_time_sec: {
        type: Sequelize.INTEGER
      },
      aof_current_rewrite_time_sec: {
        type: Sequelize.INTEGER
      },
      aof_last_bgrewrite_status: {
        type: Sequelize.STRING
      },
      aof_last_write_status: {
        type: Sequelize.STRING
      },
      total_connections_received: {
        type: Sequelize.INTEGER
      },
      total_commands_processed: {
        type: Sequelize.INTEGER
      },
      instantaneous_ops_per_sec: {
        type: Sequelize.INTEGER
      },
      total_net_input_bytes: {
        type: Sequelize.INTEGER
      },
      total_net_output_bytes: {
        type: Sequelize.INTEGER
      },
      instantaneous_input_kbps: {
        type: Sequelize.FLOAT
      },
      instantaneous_output_kbps: {
        type: Sequelize.FLOAT
      },
      rejected_connections: {
        type: Sequelize.INTEGER
      },
      sync_full: {
        type: Sequelize.INTEGER
      },
      sync_partial_ok: {
        type: Sequelize.INTEGER
      },
      sync_partial_err: {
        type: Sequelize.INTEGER
      },
      expired_keys: {
        type: Sequelize.INTEGER
      },
      evicted_keys: {
        type: Sequelize.INTEGER
      },
      keyspace_hits: {
        type: Sequelize.INTEGER
      },
      keyspace_misses: {
        type: Sequelize.INTEGER
      },
      pubsub_channels: {
        type: Sequelize.INTEGER
      },
      pubsub_patterns: {
        type: Sequelize.INTEGER
      },
      latest_fork_usec: {
        type: Sequelize.INTEGER
      },
      migrate_cached_sockets: {
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING
      },
      connected_slaves: {
        type: Sequelize.INTEGER
      },
      master_repl_offset: {
        type: Sequelize.INTEGER
      },
      repl_backlog_active: {
        type: Sequelize.INTEGER
      },
      repl_backlog_size: {
        type: Sequelize.INTEGER
      },
      repl_backlog_first_byte_offset: {
        type: Sequelize.INTEGER
      },
      repl_backlog_histlen: {
        type: Sequelize.INTEGER
      },
      used_cpu_sys: {
        type: Sequelize.FLOAT
      },
      used_cpu_user: {
        type: Sequelize.FLOAT
      },
      used_cpu_sys_children: {
        type: Sequelize.FLOAT
      },
      used_cpu_user_children: {
        type: Sequelize.FLOAT
      },
      cluster_enabled: {
        type: Sequelize.INTEGER
      },
      get_time: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('eventLogModels');
  }
};
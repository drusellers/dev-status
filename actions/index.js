var request = require('request');

module.exports = function (app) {
    app.get('/', function (req, res) {

        /*
        res.send({
          rabbitmq:fakeRabbit(),
          ironmq:fakeIronMq(),
          teamcity:fakeTeamCity(),
          api:'heartbeat',
          pgstatus:'',
          windowsServices:''
        });
        */

        res.render('index', {
            title:'Dru Sellers',
            body_id:'home',
            rabbit: fakeRabbit(),
            teamcity : fakeTeamCity()
        });

    });
};

function getRabbit(){
  request.get("https://orange-rhinoceros.rmq.cloudamqp.com/api/queues/production", function(err, response, body) {
        var queues = JSON.parse(body);
        queues.forEach(function(q){
          console.log(q.name + ":messages_ready=" + q.messages_ready);
          console.log(q.name + ":status=" + q.status);
        });
      }).auth(process.env.RABBITMQ_USERNAME, process.env.RABBITMQ_PASSWORD);

}

function fakeRabbit(){
  return [{"memory":43072,"message_stats":{"ack":49914,"ack_details":{"rate":0.0},"deliver":49919,"deliver_details":{"rate":0.0},"deliver_get":49919,"deliver_get_details":{"rate":0.0},"publish":49922,"publish_details":{"rate":0.0},"redeliver":4,"redeliver_details":{"rate":0.0}},"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:39:35","policy":"","exclusive_consumer_tag":"","consumers":1,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":49922,"persistent_count":0,"avg_ingress_rate":0.03304308999019562,"avg_egress_rate":0.03304308999019562,"avg_ack_ingress_rate":0.03304308999019562,"avg_ack_egress_rate":0.03304308999019562},"status":"running","name":"RecordReceiptUsage","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":21808,"message_stats":{"publish":2,"publish_details":{"rate":0.0}},"messages":2,"messages_details":{"rate":0.0},"messages_ready":2,"messages_ready_details":{"rate":0.0},"idle_since":"2014-03-06 20:37:59","policy":"","exclusive_consumer_tag":"","consumers":0,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":2,"len":2,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":2,"ram_ack_count":0,"next_seq_id":2,"persistent_count":2,"avg_ingress_rate":1.459395956013806,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"RecordReceiptUsage_error","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"message_stats":{"ack":126863,"ack_details":{"rate":0.4},"deliver":126871,"deliver_details":{"rate":0.4},"deliver_get":126871,"deliver_get_details":{"rate":0.4},"publish":126873,"publish_details":{"rate":0.4},"redeliver":6,"redeliver_details":{"rate":0.0}},"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"policy":"","exclusive_consumer_tag":"","consumers":1,"memory":43072,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":126873,"persistent_count":0,"avg_ingress_rate":0.15286423046178257,"avg_egress_rate":0.15286423046178257,"avg_ack_ingress_rate":0.15286423046178257,"avg_ack_egress_rate":0.15286423046178257},"status":"running","name":"RecordShipmentUsage","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":34600,"message_stats":{"publish":3,"publish_details":{"rate":0.0}},"messages":3,"messages_details":{"rate":0.0},"messages_ready":3,"messages_ready_details":{"rate":0.0},"idle_since":"2014-03-07 22:05:22","policy":"","exclusive_consumer_tag":"","consumers":0,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":3,"len":3,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":3,"ram_ack_count":0,"next_seq_id":3,"persistent_count":3,"avg_ingress_rate":0.3446423508468322,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"RecordShipmentUsage_error","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"message_stats":{"ack":237130,"ack_details":{"rate":0.4},"deliver":237143,"deliver_details":{"rate":0.4},"deliver_get":237143,"deliver_get_details":{"rate":0.4},"publish":237130,"publish_details":{"rate":0.4},"redeliver":13,"redeliver_details":{"rate":0.0}},"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"policy":"","exclusive_consumer_tag":"","consumers":1,"memory":43216,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":237130,"persistent_count":0,"avg_ingress_rate":0.2600506859590989,"avg_egress_rate":0.2600506859590989,"avg_ack_ingress_rate":0.2600506859590989,"avg_ack_egress_rate":0.2600506859590989},"status":"running","name":"ScheduleMessages","vhost":"production","durable":true,"auto_delete":false,"arguments":{},"node":"rabbit@orange-rhinoceros01"},{"memory":13768,"message_stats":{"ack":61529,"ack_details":{"rate":0.0},"deliver":61554,"deliver_details":{"rate":0.0},"deliver_get":61554,"deliver_get_details":{"rate":0.0},"publish":61532,"publish_details":{"rate":0.0},"redeliver":22,"redeliver_details":{"rate":0.0}},"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:40:00","policy":"","exclusive_consumer_tag":"","consumers":1,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":61532,"persistent_count":0,"avg_ingress_rate":0.03363775841072625,"avg_egress_rate":0.03363775841072625,"avg_ack_ingress_rate":0.03363775841072625,"avg_ack_egress_rate":0.03363775841072625},"status":"running","name":"SendUsageEvents","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":34600,"message_stats":{"publish":7,"publish_details":{"rate":0.0}},"messages":4,"messages_details":{"rate":0.0},"messages_ready":4,"messages_ready_details":{"rate":0.0},"idle_since":"2014-03-12 15:39:15","policy":"","exclusive_consumer_tag":"","consumers":0,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":4,"len":4,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":4,"ram_ack_count":0,"next_seq_id":7,"persistent_count":4,"avg_ingress_rate":0.000002013588464142802,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"SendUsageEvents_error","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":22024,"message_stats":{"ack":47,"ack_details":{"rate":0.0},"deliver":47,"deliver_details":{"rate":0.0},"deliver_get":47,"deliver_get_details":{"rate":0.0},"publish":47,"publish_details":{"rate":0.0}},"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:30:01","policy":"","exclusive_consumer_tag":"","consumers":1,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":47,"persistent_count":0,"avg_ingress_rate":0.0,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"account-signups","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":21808,"message_stats":{"deliver_get":2,"deliver_get_details":{"rate":0.0},"get":2,"get_details":{"rate":0.0},"publish":3,"publish_details":{"rate":0.0}},"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:30:14","policy":"","exclusive_consumer_tag":"","consumers":0,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":3,"persistent_count":0,"avg_ingress_rate":0.0000016352064794958848,"avg_egress_rate":0.0000016352064794958848,"avg_ack_ingress_rate":0.0000016352064794958848,"avg_ack_egress_rate":0.0},"status":"running","name":"account-signups_error","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros02"},{"memory":22024,"message_stats":{"ack":81,"ack_details":{"rate":0.0},"deliver":81,"deliver_details":{"rate":0.0},"deliver_get":81,"deliver_get_details":{"rate":0.0},"publish":81,"publish_details":{"rate":0.0}},"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:19:50","policy":"","exclusive_consumer_tag":"","consumers":1,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":81,"persistent_count":0,"avg_ingress_rate":0.0,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"accounts","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":21808,"message_stats":{"deliver_get":4,"deliver_get_details":{"rate":0.0},"get":4,"get_details":{"rate":0.0},"publish":9,"publish_details":{"rate":0.0},"redeliver":1,"redeliver_details":{"rate":0.0}},"idle_since":"2014-03-05 16:45:45","policy":"","exclusive_consumer_tag":"","consumers":0,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":9,"persistent_count":0,"avg_ingress_rate":7.827610474536429e-7,"avg_egress_rate":7.827610474536429e-7,"avg_ack_ingress_rate":7.827610474536429e-7,"avg_ack_egress_rate":0.0},"status":"running","name":"accounts_error","vhost":"production","durable":true,"auto_delete":false,"arguments":{},"node":"rabbit@orange-rhinoceros01"},{"memory":22248,"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:30:01","policy":"","exclusive_consumer_tag":"","consumers":2,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":0,"persistent_count":0,"avg_ingress_rate":0.0,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"amplifier.api","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":22096,"message_stats":{"ack":18,"ack_details":{"rate":0.0},"deliver":31,"deliver_details":{"rate":0.0},"deliver_get":31,"deliver_get_details":{"rate":0.0},"publish":18,"publish_details":{"rate":0.0},"redeliver":13,"redeliver_details":{"rate":0.0}},"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:32:00","policy":"","exclusive_consumer_tag":"","consumers":1,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":18,"persistent_count":0,"avg_ingress_rate":0.007963273351450018,"avg_egress_rate":0.007963273351450018,"avg_ack_ingress_rate":0.007963273351450018,"avg_ack_egress_rate":0.0013272122252416699},"status":"running","name":"api-accounts","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":21928,"message_stats":{"ack":2,"ack_details":{"rate":0.0},"deliver":2,"deliver_details":{"rate":0.0},"deliver_get":5,"deliver_get_details":{"rate":0.0},"get":3,"get_details":{"rate":0.0},"publish":3,"publish_details":{"rate":0.0},"redeliver":3,"redeliver_details":{"rate":0.0}},"messages":1,"messages_details":{"rate":0.0},"messages_ready":1,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:31:58","policy":"","exclusive_consumer_tag":"","consumers":0,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":1,"len":1,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":1,"ram_ack_count":0,"next_seq_id":3,"persistent_count":1,"avg_ingress_rate":0.009420409183668649,"avg_egress_rate":0.018840818367337298,"avg_ack_ingress_rate":0.018840818367337298,"avg_ack_egress_rate":0.009420409183668649},"status":"running","name":"api-accounts_error","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":14000,"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:19:38","policy":"","exclusive_consumer_tag":"","consumers":1,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":0,"persistent_count":0,"avg_ingress_rate":0.0,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"api-items","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":22024,"message_stats":{"ack":1804,"ack_details":{"rate":0.0},"deliver":1804,"deliver_details":{"rate":0.0},"deliver_get":1804,"deliver_get_details":{"rate":0.0},"publish":1804,"publish_details":{"rate":0.0}},"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:19:39","policy":"","exclusive_consumer_tag":"","consumers":1,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":1804,"persistent_count":0,"avg_ingress_rate":0.0,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"api-orders","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":22024,"message_stats":{"ack":2,"ack_details":{"rate":0.0},"deliver":2,"deliver_details":{"rate":0.0},"deliver_get":2,"deliver_get_details":{"rate":0.0},"publish":2,"publish_details":{"rate":0.0}},"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:19:39","policy":"","exclusive_consumer_tag":"","consumers":1,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":2,"persistent_count":0,"avg_ingress_rate":0.0,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"api-sources","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":21808,"message_stats":{"ack":34,"ack_details":{"rate":0.0},"deliver":34,"deliver_details":{"rate":0.0},"deliver_get":34,"deliver_get_details":{"rate":0.0},"publish":35,"publish_details":{"rate":0.0}},"messages":1,"messages_details":{"rate":0.0},"messages_ready":1,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:13:26","policy":"","exclusive_consumer_tag":"","consumers":0,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":1,"len":1,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":1,"ram_ack_count":0,"next_seq_id":35,"persistent_count":1,"avg_ingress_rate":0.0000029674191471988294,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"api-users","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":21808,"message_stats":{"publish":3,"publish_details":{"rate":0.0}},"messages":1,"messages_details":{"rate":0.0},"messages_ready":1,"messages_ready_details":{"rate":0.0},"idle_since":"2014-03-23 0:03:45","policy":"","exclusive_consumer_tag":"","consumers":0,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":1,"len":1,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":1,"ram_ack_count":0,"next_seq_id":3,"persistent_count":1,"avg_ingress_rate":0.0000014485402470374723,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"api-users_error","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros02"},{"memory":22024,"message_stats":{"ack":1,"ack_details":{"rate":0.0},"deliver":1,"deliver_details":{"rate":0.0},"deliver_get":1,"deliver_get_details":{"rate":0.0},"publish":1,"publish_details":{"rate":0.0}},"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:19:40","policy":"","exclusive_consumer_tag":"","consumers":1,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":1,"persistent_count":0,"avg_ingress_rate":0.0,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"catalogs","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":22024,"message_stats":{"ack":37,"ack_details":{"rate":0.0},"deliver":37,"deliver_details":{"rate":0.0},"deliver_get":37,"deliver_get_details":{"rate":0.0},"publish":37,"publish_details":{"rate":0.0}},"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:19:47","policy":"","exclusive_consumer_tag":"","consumers":1,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":37,"persistent_count":0,"avg_ingress_rate":0.0,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"salesforce-leads","vhost":"production","durable":true,"auto_delete":false,"arguments":{},"node":"rabbit@orange-rhinoceros01"},{"memory":34600,"message_stats":{"publish":4,"publish_details":{"rate":0.0}},"messages":4,"messages_details":{"rate":0.0},"messages_ready":4,"messages_ready_details":{"rate":0.0},"idle_since":"2014-03-23 0:28:43","policy":"","exclusive_consumer_tag":"","consumers":0,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":4,"len":4,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":4,"ram_ack_count":0,"next_seq_id":4,"persistent_count":4,"avg_ingress_rate":0.0000061755421447056225,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"salesforce-leads_error","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros02"},{"memory":21808,"message_stats":{"ack":11,"ack_details":{"rate":0.0},"deliver":16,"deliver_details":{"rate":0.0},"deliver_get":16,"deliver_get_details":{"rate":0.0},"publish":11,"publish_details":{"rate":0.0},"redeliver":5,"redeliver_details":{"rate":0.0}},"idle_since":"2014-03-04 22:22:30","policy":"","exclusive_consumer_tag":"","consumers":0,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":11,"persistent_count":0,"avg_ingress_rate":0.0,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.000011474388991654792},"status":"running","name":"shopify","vhost":"production","durable":true,"auto_delete":false,"arguments":{},"node":"rabbit@orange-rhinoceros02"},{"memory":22024,"message_stats":{"ack":2,"ack_details":{"rate":0.0},"deliver":2,"deliver_details":{"rate":0.0},"deliver_get":2,"deliver_get_details":{"rate":0.0},"publish":2,"publish_details":{"rate":0.0}},"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:19:41","policy":"","exclusive_consumer_tag":"","consumers":1,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":2,"persistent_count":0,"avg_ingress_rate":0.0,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"shopify-order-cache","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":14000,"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:19:51","policy":"","exclusive_consumer_tag":"","consumers":1,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":0,"persistent_count":0,"avg_ingress_rate":0.0,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"shopify-orders","vhost":"production","durable":true,"auto_delete":false,"arguments":{},"node":"rabbit@orange-rhinoceros01"},{"memory":22240,"message_stats":{"ack":4,"ack_details":{"rate":0.0},"deliver":4,"deliver_details":{"rate":0.0},"deliver_get":4,"deliver_get_details":{"rate":0.0},"publish":4,"publish_details":{"rate":0.0}},"messages":0,"messages_details":{"rate":0.0},"messages_ready":0,"messages_ready_details":{"rate":0.0},"messages_unacknowledged":0,"messages_unacknowledged_details":{"rate":0.0},"idle_since":"2014-03-26 22:19:45","policy":"","exclusive_consumer_tag":"","consumers":2,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":4,"persistent_count":0,"avg_ingress_rate":0.0,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"shopify-sources","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":21808,"message_stats":{"ack":1,"ack_details":{"rate":0.0},"deliver":1,"deliver_details":{"rate":0.0},"deliver_get":3,"deliver_get_details":{"rate":0.0},"get":2,"get_details":{"rate":0.0},"publish":1,"publish_details":{"rate":0.0},"redeliver":2,"redeliver_details":{"rate":0.0}},"idle_since":"2014-02-10 22:48:32","policy":"","exclusive_consumer_tag":"","consumers":0,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":1,"persistent_count":0,"avg_ingress_rate":0.0022472920484764357,"avg_egress_rate":0.004494584096952871,"avg_ack_ingress_rate":0.004494584096952871,"avg_ack_egress_rate":0.0022472920484764357},"status":"running","name":"shopify_error","vhost":"production","durable":true,"auto_delete":false,"arguments":{"x-ha-policy":"all"},"node":"rabbit@orange-rhinoceros01"},{"memory":21808,"message_stats":{"ack":2,"ack_details":{"rate":0.0},"deliver":2,"deliver_details":{"rate":0.0},"deliver_get":2,"deliver_get_details":{"rate":0.0},"publish":2,"publish_details":{"rate":0.0}},"idle_since":"2014-03-04 20:19:38","policy":"","exclusive_consumer_tag":"","consumers":0,"backing_queue_status":{"q1":0,"q2":0,"delta":["delta","undefined",0,"undefined"],"q3":0,"q4":0,"len":0,"pending_acks":0,"target_ram_count":"infinity","ram_msg_count":0,"ram_ack_count":0,"next_seq_id":2,"persistent_count":0,"avg_ingress_rate":0.0,"avg_egress_rate":0.0,"avg_ack_ingress_rate":0.0,"avg_ack_egress_rate":0.0},"status":"running","name":"users","vhost":"production","durable":true,"auto_delete":false,"arguments":{},"node":"rabbit@orange-rhinoceros01"}];
}

function fakeTeamCity(){
  return [
  {"id":"AmplifierSystem","name":"Amplifier - System","parentProjectId":"_Root","href":"/app/rest/projects/id:AmplifierSystem","webUrl":"http://build.dev.ampcorp.org/project.html?projectId=AmplifierSystem","parentProject":{"id":"_Root","name":"<Root project>","description":"Contains all other projects","href":"/app/rest/projects/id:_Root","webUrl":"http://build.dev.ampcorp.org/project.html?projectId=_Root"},"buildTypes":{"count":1,"buildType":[{"id":"bt2","name":"Continuous Build & Test","projectName":"Amplifier - System","projectId":"AmplifierSystem","href":"/app/rest/buildTypes/id:bt2","webUrl":"http://build.dev.ampcorp.org/viewType.html?buildTypeId=bt2"}]},"templates":{"count":1,"buildType":[{"id":"btTemplate2","name":"Install Services","templateFlag":true,"projectName":"Amplifier - System","projectId":"AmplifierSystem","href":"/app/rest/buildTypes/id:btTemplate2"}]},"parameters":{"href":"/app/rest/projects/id:AmplifierSystem/parameters","property":[]},"vcsRoots":{"href":"/app/rest/vcs-roots?locator=project:(id:AmplifierSystem)"},"projects":{}}
  ];
}
function fakeIronMq(){
  return {};
}

function getTeamCity()
{
  request.get('https://build.dev.ampcorp.org/app/rest/projects/id:AmplifierSystem', function(err, response, body){
    var project = JSON.parse(body);
  }).auth("a","b");
}

var number = function(busStops){
    var totalPeople = 0;
          for (var i = 0; i < busStops.length; i++) {
              totalPeople += busStops[i][0]; // People getting on
              totalPeople -= busStops[i][1]; // People getting off
          }
          return totalPeople;
  }
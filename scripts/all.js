$(document).ready(function() {
  var feed = 'https://spreadsheets.google.com/feeds/list/0AlCpUJpKu_V_dExWQ1N5S3N2QTlzb185OGZTOXhXMkE/od6/public/values?alt=json';
  //var alumniDB = 'https://docs.google.com/spreadsheet/ccc?key=0AlCpUJpKu_V_dExWQ1N5S3N2QTlzb185OGZTOXhXMkE#gid=0';

  $.getJSON(feed, function() {
    console.log("JSON is live");
  });

  // Name search
  $(".filter").keyup(function(e){
    var field = $(this).attr("id");
    //console.log(field);

    var q = $("#"+field).val();
    console.log(field+": "+q);

    $.getJSON(feed, function(data) {
      // Clear results
      $("#results").empty();

      // Return results
      $.each(data.feed.entry, function(i,item){
        var x = data.feed.entry[i]['gsx$name']['$t'];
        console.log(x+"?");

        if(x.toLowerCase().match(q.toLowerCase())) {
          $("#results").append("<tr><td>"+data.feed.entry[i]['gsx$name']['$t']+"</td><td>"+data.feed.entry[i]['gsx$class']['$t']+"</td><td>"+data.feed.entry[i]['gsx$city']['$t']+"</td><td>"+data.feed.entry[i]['gsx$industry']['$t']+"</td></tr>");
          console.log("yes");
        }
        else {
          console.log("no");
        }
      });
    });
  });
})
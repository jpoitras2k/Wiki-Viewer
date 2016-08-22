       $(document).ready(function() {

         var searchTerm;
         var url;

         $(document).keypress(function(e) {
           if (e.which == 13) {
             if ($('#searchTerm').is(':focus')) {
               $('#search').click();
             }
           }
         });

         $("#search").click(function() {
           searchTerm = $("#searchTerm").val();
           //api url
           url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

           $.ajax({
             type: "GET",
             url: url,
             async: false,
             dataType: "json",
             success: function(data) {

               $("#output").html("");

               for (var i = 0; i < data[1].length; i++) {
                 //heading console.log(data[3][0]) 
                 //description console.log(data[2][0])
                 //Link console.log(data[1][0])
                 $("#output").prepend("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                 $("#searchTerm").val('');

               };

             },
             error: function(errorMessage) {
               alert("Error");
             }

           });

         });

       });
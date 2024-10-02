$( document ).ready(function() {	
   var items = $("#bot-1-cont tbody tr");
   var numItems = items.length;
   var perPage = 8;
   items.slice(perPage).hide();
   if(numItems != 0){
      $("#paginador").pagination({
         items: numItems,
         itemsOnPage: perPage,
         cssStyle: "pager",
         prevText: "<",
         nextText: ">",
         listStyle: 'cosa',
         onPageClick: function(pageNumber) { 
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
         }
      });
   }
});
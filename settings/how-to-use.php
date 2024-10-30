<?php
if (!defined('ABSPATH'))
   exit;

?>
<div class="ano-6310">
   <div class="ano-6310-row ano-6310-row-plugins">
      <h1 class="ano-6310-anoart-all-plugins">Plugins Reference Video</h1>
   </div>
</div>

<script>
   jQuery.getJSON('https://demo.tcsesoft.com/plugins/ano.php', function(data) {
      let htmlCode = '';
      for(let i = 0; i < data.length; i++) {         
         htmlCode += `
         <div class="ano-6310-help-section">         
            <div class="ano-6310-anoart-plugins-video">
            <i class="fas fa-film"></i><a href="${data[i].url}" target="_blank">${data[i].title}</a>
            </div>
         </div>`;
      }
      jQuery('.ano-6310-anoart-all-plugins').after(htmlCode);
   });
</script>
<style>
h1.ano-6310-anoart-all-plugins {  
    color: chocolate !important;   
    font-size: 30px;
}
.ano-6310-help-section{
   width: 100%;
   display: inline;
   float: left;
   margin: 8px 30px;
   font-size: 14px;
}
.ano-6310-anoart-plugins-video{
   background-color: transparent;
}
.ano-6310-anoart-plugins-video i{
   float: left;
   padding-right: 5px;
   font-size: 21px;
   color: #009097;
}
.ano-6310-anoart-plugins-video a {
    text-decoration: none;
    float: left;
    margin: 0;
    padding: 0;
    color: #2c2e1d94;
    font-weight: 600;
 
}
.ano-6310-anoart-plugins-video a:hover {
    color: #027f85;
}

</style>
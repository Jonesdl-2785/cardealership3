/* cars.js */
    const carInv = [
                ["Make","Model","Year","Color","MSRP","Total Price"], //table header
                ["Jaguar","F-Type","2018","White",59000, ""],
                ["Cadillac","XT5","2018","Burgundy", 39395, ""],
                ["BMW","2 Series","2018","Red", 34800, ""],
                ["Mercedes Benz","AMG GLA 45 SUV","2018","Black", 50000, ""],
                ["Tesla","Model S","2018","Red", 88350,""],
                ["Bentley","Bentley-Continental","2018","Blue", 201225, ""]
              ];
        table = document.getElementById("carTable");

  // rows
  for(let i = 0; i < table.rows.length; i++){
    //cells
    for(let j = 0; j < table.rows[i].cells.length; j++){
        table.rows[i].cells[j].innerHTML = carInv[i][j];
    }
  }

  //function carsBtns(){
    //document.getElementById(["#jaguar, #mercedes, #cadillac, #tesla, #bentley, #bmw"],
  //);}
  let carMake = document.getElementById("make");
  let carPrice = document.getElementById("price");
  const tax = 1.08;

  function calculateTax(cPrice) {
   // document.getElementById("tPrice") = price * tax;
    //return(price * tax);
      if (cPrice === carInv[1]){
        document.getElementById("tPrice1").innerHTML =  Math.round(carInv[1][4] * tax);
          console.log(cPrice)

      } else if(cPrice === carInv[2]){
        document.getElementById("tPrice2").innerHTML =  Math.round(carInv[2][4] * tax);
          console.log(cPrice)
      } else if(cPrice === carInv[3]){
        document.getElementById("tPrice3").innerHTML =  Math.round(carInv[3][4] * tax);

      } else if(cPrice === carInv[4]){

          document.getElementById("tPrice4").innerHTML =  Math.round(carInv[4][4] * tax);

      } else if(cPrice === carInv[5]){

          document.getElementById("tPrice5").innerHTML =  Math.round(carInv[5][4] * tax);

      } else if(cPrice === carInv[6]){

          document.getElementById("tPrice6").innerHTML =  Math.round(carInv[6][4] * tax);
      }
    };


    // Contact Page
    $('#SubmitButton').click(function() {
      let firstNameVal = $('#FirstNameTextBox').val();
      let lastNameVal = $('#LastnameTextBox').val();
      let emailVal = $('#EmailTextBox').val();
    })

    // Home Page - jQuery Video/Media-Heaven
    $( document ).ready(function() {

        scaleVideoContainer();

        initBannerVideoSize('.video-container .poster img');
        initBannerVideoSize('.video-container .filter');
        initBannerVideoSize('.video-container video');

        $(window).on('resize', function() {
            scaleVideoContainer();
            scaleBannerVideoSize('.video-container .poster img');
            scaleBannerVideoSize('.video-container .filter');
            scaleBannerVideoSize('.video-container video');
        });

    });

    function scaleVideoContainer() {

        let height = $(window).height() + 5;
        let unitHeight = parseInt(height) + 'px';
        $('.homepage-hero-module').css('height',unitHeight);

    }

    function initBannerVideoSize(element){

        $(element).each(function(){
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        });

        scaleBannerVideoSize(element);

    }

    function scaleBannerVideoSize(element){

        let windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

        // console.log(windowHeight);

        $(element).each(function(){
            let videoAspectRatio = $(this).data('height')/$(this).data('width');

            $(this).width(windowWidth);

            if(windowWidth < 1000){
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

                $(this).width(videoWidth).height(videoHeight);
            }

            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

        });
    }
    $(document).ready(function() {
      $('#cars').keyup(function(){ //input id
        var valThis = $(this).val().toLowerCase();
          var noresult = 0;
      if(valThis == ""){
          $('#cdbody > tr').show(); //table id
          noresult = 1;
  	    $('.no-results-found').remove();
      } else {
          $('#cdbody > tr').each(function(){
              var text = $(this).text().toLowerCase();
              var match = text.indexOf(valThis);
              if (match >= 0) {
                  $(this).show();
                  noresult = 1;
  		        $('.no-results-found').remove();
              } else {
                  $(this).hide();
              }
          });
     };
      if (noresult == 0) {
          $("#cdbody").append('<td class="no-results-found">No results found.</td>');
      }
  });
});

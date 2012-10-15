// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .

$('#company_show_info').click(function(){
    $('#company_show_info').hide();
    $('#company_hide_info').show();
    $('#company_detail').slideToggle();
});

$('#company_hide_info').click(function(){
    $('#company_show_info').show();
    $('#company_hide_info').hide();
    $('#company_detail').slideToggle();
});

function show_reminder(id){ 
    function myContent(){      
        t2= $("#news_"+id).text();
        return "<div style='color: #1B75BB'>"+t2+"</div><textarea rows='4' cols='40' placeholder='Add a note to Reminders...'></textarea><button type='button' style='right:7px;bottom:7px;position:absolute'>Add</button>"
    };
    function myTitle(){
        t1= $("#news_header_"+id).text();
        btn = "<button  class='close' 'id='close_popover' onclick=\"hide_popover('"+id+"')\" style='position:absolute;top:3px;right:5px'>×</button>"
        return  t1+btn;
    }  
    $('#'+id).popover({
        html:true, 
        content:myContent(), 
        animation:true, 
        placement: 'left',
        title: myTitle()        
    })
};

function hide_popover(id) {
//    alert(id);
   $('#'+id).popover('hide');
};

function share_news_alert(company_name,id){
    function myContent(){ 
        return "<ul style='list-style:none;margin-left:0px'><li style='vertical-align: bottom;line-height:35px;border-bottom: 1px solid lightgray;'><img src='/assets/linkedin.png' height = '26px' width = '26px'><span style = 'padding-left: 20px'>Linkedin</span></li><li  style='vertical-align: bottom;line-height:35px;border-bottom: 1px solid lightgray;'><img src='/assets/fb.png' height = '26px' width = '26px'><span style = 'padding-left: 20px'>Facebook</span></li><li style='vertical-align: bottom;line-height:35px;border-bottom: 1px solid lightgray;'><img src='/assets/google.png' height = '26px' width = '26px'><span style = 'padding-left: 20px'>Google+</span></li><li style='vertical-align: bottom;line-height:35px;border-bottom: 1px solid lightgray;'><img src='/assets/twitter.png' height = '26px' width = '26px'><span style = 'padding-left: 20px'>Twitter</span></li><li style='vertical-align: bottom;line-height:35px;border-bottom: 1px solid lightgray;'><img src='/assets/Black_Email.png' height = '26px' width = '26px'><span style = 'padding-left: 20px'>Email</span></li></ul> "
    };
    
    $('#'+id).popover({
        html:true, 
        content:myContent(), 
        animation:true, 
        placement: 'left',
        title: "<span style = 'color: #8F9093'>Share recent news about <b>"+company_name+"</b></span>"
    })  
}


$('.carousel').carousel({
    interval: 4000
  })
  $('#carousel-nav a').click(function(q){
    q.preventDefault();
    targetSlide = $(this).attr('data-to')-1;
    $('#myCarousel').carousel(targetSlide);
    $(this).addClass('active').siblings().removeClass('active');
  });  


/* AUTOPLAY NAV HIGHLIGHT */

// bind 'slid' function
$('#myCarousel').bind('slid', function() {

    // remove active class
    $('#carousel-nav .active').removeClass('active');

    // get index of currently active item
    var idx = $('#myCarousel .item.active').index();

    // select currently active item and add active class
    $('#carousel-nav a:eq(' + idx + ')').addClass('active');

});



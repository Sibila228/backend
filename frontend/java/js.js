$(document).ready(function(){
    $(".hover_green_").addClass("sectionnone");
    $("#schedule").click(function(){
        $(".hover_green_").addClass("sectionblock");
        $(".hover_green_teams_").removeClass('sectionblock').addClass("sectionnone");
        $(".hover_green_other_").removeClass('sectionblock').addClass("sectionnone");
        $(".hover_green_profile_").removeClass('sectionblock').addClass("sectionnone");
    });

    $(".hover_green_teams_").addClass("sectionnone");
    $("#teams").click(function(){
        $(".hover_green_teams_").addClass("sectionblock");
        $(".hover_green_").removeClass('sectionblock').addClass("sectionnone");
        $(".hover_green_other_").addClass("sectionnone");
        $(".hover_green_profile_").addClass("sectionnone");
    });

    $(".hover_green_other_").addClass("sectionnone");
    $("#other").click(function(){
        $(".hover_green_other_").addClass("sectionblock");
        $(".hover_green_").removeClass('sectionblock').addClass("sectionnone");
        $(".hover_green_teams_").addClass("sectionnone");
        $(".hover_green_profile_").addClass("sectionnone");
    });

    $(".hover_green_profile_").addClass("sectionnone");
    $("#profile").click(function(){
        $(".hover_green_profile_").addClass("sectionblock");
        $(".hover_green_").removeClass('sectionblock').addClass("sectionnone");
        $(".hover_green_teams_").addClass("sectionnone");
        $(".hover_green_other_").addClass("sectionnone");
    });
    
    $(".hover_green").addClass("sectionnone");
    $("#schedule").on('mouseenter', function(){
        $(".hover_green").addClass("sectionblock");
    $("#schedule").on('mouseleave', function(){
        $(".hover_green").removeClass('sectionblock').addClass("sectionnone");
    });
});
$(".hover_green_teams").addClass("sectionnone");
    $("#teams").on('mouseenter', function(){
       $(".hover_green_teams").addClass("sectionblock");
    $("#teams").on('mouseleave', function(){
       $(".hover_green_teams").removeClass('sectionblock').addClass("sectionnone");
    });
});

$(".hover_green_other").addClass("sectionnone");
$("#other").on('mouseenter', function(){
    $(".hover_green_other").addClass("sectionblock");
 $("#other").on('mouseleave', function(){
    $(".hover_green_other").removeClass('sectionblock').addClass("sectionnone");
 });
});

$(".hover_green_profile").addClass("sectionnone");
$("#profile").on('mouseenter', function(){
    $(".hover_green_profile").addClass("sectionblock");
 $("#profile").on('mouseleave', function(){
    $(".hover_green_profile").removeClass('sectionblock').addClass("sectionnone");
 });
});

$('.sign_in_button').click(function(){
    window.location.href='/Pages/profile_page/profile.html';
 })
  
});
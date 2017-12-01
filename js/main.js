var state = 0;

function preload() {
    loadImage("images/user_up.gif");
    loadImage("images/user_sitdown.gif")
}

$(document).ready(function() {
    //play animation on load
    slideRoof();

    // click down arrow, scroll to next step
    $("#down-arrow").on("click", function() {
        if (state == 0) {
            // loadStep1 after playGif
            playGif();
            state++;
        } else if (state == 1) {
            loadStep2();
            state++;
        } else if (state == 2) {
            loadStep3();
            state++;
        } else if (state == 3) {
            loadStep4();
            state++;
        } else if (state == 4) {
            loadStep5();
            state++;
        } else {
        }
    });

    // click up arrow, scroll to previous step
    $("#up-arrow").on("click", function() {
        if (state == 5) {
            backtoStep4();
            state-=1;
        } else if (state == 4) {
            backtoStep3();
            state-=1;
        } else if (state == 3) {
            backtoStep2();
            state-=1;
        } else if (state == 2) {
            backtoStep1();
            state-=1;
        } else if (state == 1) {
            playSitDown();
            state-=1;
        } else {
        }
    });

    var intervalMs = 1500;

    var last = 0;
    $(document).on("wheel", function(e) {
        var now = new Date().getTime();
        if (last + intervalMs < now) {
            last = now;
            if (e.originalEvent.deltaY < 0) {
                // scrolling up
                if (state == 5) {
                    backtoStep4();
                    state-=1;
                } else if (state == 4) {
                    backtoStep3();
                    state-=1;
                } else if (state == 3) {
                    backtoStep2();
                    state-=1;
                } else if (state == 2) {
                    backtoStep1();
                    state-=1;
                } else if (state == 1) {
                    playSitDown();
                    state-=1;
                } else {
                }
            } else {
                // scrolling down
                if (state == 0) {
                // loadStep1 after playGif
                    playGif();
                    state++;
                } else if (state == 1) {
                    loadStep2();
                    state++;
                } else if (state == 2) {
                    loadStep3();
                    state++;
                } else if (state == 3) {
                    loadStep4();
                    state++;
                } else if (state == 4) {
                    loadStep5();
                    state++;
                } else {
                }
            }
        
        }
    });

    // CLICKING TOGGLE TEXT
    // Home screen toggle
    $("#clickable-home").on("click", function() {
        $(this).addClass("clicked");
        $("#toggle-text-home").toggle();
    });

    // Step 1 toggle
    $("#clickable-step1-citizen").on("click", function() {
        $(this).addClass("clicked");
        $(".toggle-text-step1").fadeOut(10);
        $("#toggle-text-step1-citizen").toggle();
    });
    $("#clickable-step1-50").on("click", function() {
        $(this).addClass("clicked");
        $(".toggle-text-step1").fadeOut(10);
        $("#toggle-text-step1-50").toggle();
    });
    $("#clickable-step1-criteria").on("click", function() {
        $(this).addClass("clicked");
        $(".toggle-text-step1").fadeOut(10);
        $("#toggle-text-step1-criteria").toggle();
    });

    // Step 2 toggle
    $("#clickable-step2-income").on("click", function() {
        $(this).addClass("clicked");
        $(".toggle-text-step2").fadeOut(10);
        $("#toggle-text-step2-income").toggle();
        // change user image
        userImg = "images/user_lookleft.png";
        $("#user-img").attr('src', userImg);
        // select income image
        leftImg = "images/2-income-selected.png";
        $("#income").attr('src', leftImg);
        // deselect cost image
        rightImg = "images/2-cost.png";
        $("#cost").attr('src', rightImg);

    });
    $("#clickable-step2-cost").on("click", function() {
        $(this).addClass("clicked");
        $(".toggle-text-step2").fadeOut(10);
        $("#toggle-text-step2-cost").toggle();
        // change user image
        userImg = "images/user_standing.png";
        $("#user-img").attr('src', userImg);
        // select cost image
        rightImg = "images/2-cost-selected.png";
        $("#cost").attr('src', rightImg);
        // deselect income image
        leftImg = "images/2-income.png";
        $("#income").attr('src', leftImg);
    });

    // Step 3 toggle
    $("#clickable-step3-tenant").on("click", function() {
        $(this).addClass("clicked");
        $(".toggle-text-step3").fadeOut(10);
        $("#toggle-text-step3-tenant").toggle();
        // change user image
        userImg = "images/user_lookleft.png";
        $("#user-img").attr('src', userImg);
        // select house image
        leftImg = "images/3-house-selected.png";
        $("#house").attr('src', leftImg);
        // deselect apt image
        rightImg = "images/3-apartment.png";
        $("#apartment").attr('src', rightImg);

    });
    $("#clickable-step3-project").on("click", function() {
        $(this).addClass("clicked");
        $(".toggle-text-step3").fadeOut(10);
        $("#toggle-text-step3-project").toggle();
        // change user image
        userImg = "images/user_standing.png";
        $("#user-img").attr('src', userImg);
        // deselect house image
        leftImg = "images/3-house.png";
        $("#house").attr('src', leftImg);
        // select apt image
        rightImg = "images/3-apartment-selected.png";
        $("#apartment").attr('src', rightImg);
    });

    // Step 4 toggle
    $("#clickable-step4").on("click", function() {
        $(this).addClass("clicked");
        $("#toggle-text-step4").toggle();
    });

    // Step 5 toggle
    $("#clickable-step5").on("click", function() {
        $(this).addClass("clicked");
        $("#toggle-text-step5").toggle();
    });
});

// house animation
function slideRoof() {
    $("#roof").animate({
        bottom: "100%"
    }, 600, "swing", slideWall);
}

function slideWall() {
    $("#wall").animate({
        left: "100%"
    }, 700, "swing", slideTable);
}

function slideTable() {
    $("#table").animate({
        left: "100%"
    }, 400, "swing", lookUp);
}

// user looks up as table slides away
function lookUp() {
    $("#user-img").attr('src', 'images/user_lookup.png');
    loadHome();
}

// HOME PAGE
function loadHome() {
    $("#down-arrow").fadeIn();
    $("#header-home").fadeIn("slow");
    $("#body-text-home").fadeIn("slow");
}

// user stands up
function playGif() {
    srcToGif = "images/user_getup.gif";
    $("#user-img").attr('src', srcToGif);
    loadStep1();
}

// HOME to Step 1
function loadStep1() {
    // fade out old text and fade in new
    $("#header-home").fadeOut('slow');
    $("#body-text-home").fadeOut('slow');
    $("#header-step1").fadeIn();
    $("#body-text-step1").fadeIn();
    $("#toggle-text-home").fadeOut();
    // slide out old background
    $(".sky").slideUp(1000);
    $("#ground-home").animate({
        height: "100%"
           }, "slow").animate({
        bottom: "0"}, "slow");
    $("#chair").animate({bottom: "100%"}, 800);
    // slide in new background
    $("#ground-step1").animate({
        bottom: "0"
    }, 800);
    $("#cityscape").animate({
        bottom: "60px"
    }, 800);
    $("#family").animate({bottom: "60px"}, 800);
    $("#arm-step1").animate({opacity: "1"}, 1150);
    // fade in up arrow
    $("#up-arrow").fadeIn();
}


// Step 1 to Step 2
function loadStep2() {
    // fade out old text and fade in new
    $("#header-step1").fadeOut();
    $("#body-text-step1").fadeOut();
    $(".toggle-text").fadeOut();
    $("#header-step2").fadeIn();
    $("#body-text-step2").fadeIn();
    //slide out old background
    $("#ground-step1").animate({
        height: "100%"
    }, "slow").animate({
        bottom: "0"
    }, 800);
    $("#cityscape").animate({bottom: "100%"}, "slow");
    $("#family").animate({bottom: "100%"}, "slow");
    $("#arm-step1").animate({opacity: "0"}, 200); 
    // slide in new background
    $("#ground-step2").animate({
        bottom: "0"
    }, 800);
    $("#income").animate({
        bottom: "60px"
    }, 800);
    $("#cost").animate({
        bottom: "60px"
    }, 800);
}

// Step 2 to Step 3
function loadStep3() {
    // fade out old text and fade in new
    $("#header-step2").fadeOut();
    $("#body-text-step2").fadeOut();
    $(".toggle-text").fadeOut();
    $("#header-step3").fadeIn();
    $("#body-text-step3").fadeIn();
    // change user back
    userImg = "images/user_standing.png";
    $("#user-img").attr('src', userImg);
    // deselect both
    rightImg = "images/2-cost.png";
    $("#cost").attr('src', rightImg);
    leftImg = "images/2-income.png";
    $("#income").attr('src', leftImg);
    //slide out old background
    $("#ground-step2").animate({
        height: "100%"
    }, "slow").animate({
        bottom: "0"
    }, 800);
    $("#income").animate({bottom: "100%"}, "slow");
    $("#cost").animate({bottom: "100%"}, "slow");
    // slide in new background
    $("#ground-step3").animate({
        bottom: "0"
    }, 800);
    $("#house").animate({bottom: "60px"}, 800);
    $("#apartment").animate({bottom: "60px"}, 800);
}

// Step 3 to Step 4
function loadStep4() {
    // fade out old text and fade in new
    $("#header-step3").fadeOut();
    $("#body-text-step3").fadeOut();
    $(".toggle-text").fadeOut();
    $("#header-step4").fadeIn();
    $("#body-text-step4").fadeIn();
    //slide out old background
    $("#ground-step3").animate({
        height: "100%"
    }, "slow").animate({
        bottom: "0"
    }, 800);
    $("#house").animate({bottom: "100%"}, "slow");
    $("#apartment").animate({bottom: "100%"}, "slow");
    // deselect both
    leftImg = "images/3-house.png";
    $("#house").attr('src', leftImg);
    rightImg = "images/3-apartment.png";
    $("#apartment").attr('src', rightImg);
    // change user back
    userImg = "images/user_standing.png";
    $("#user-img").attr('src', userImg);
    // slide in new background
    $("#ground-step4").animate({bottom: "0"}, 800);
    $("#pha").animate({bottom: "60px"}, 800);
    $("#arm-step4").animate({opacity: "1"}, 900);
}

// Step 4 to last step
function loadStep5() {
    // fade out old text and fade in new
    $("#header-step4").fadeOut();
    $("#body-text-step4").fadeOut();
    $(".toggle-text").fadeOut();
    $("#step5-small-header").fadeIn();
    $("#header-step5").fadeIn();
    $("#body-text-step5").fadeIn();
    //slide out old background
    $("#ground-step4").animate({
        height: "100%"
    }, "slow").animate({
        bottom: "0"
    }, 800);
    $("#pha").animate({bottom: "100%"}, "slow");
    $("#arm-step4").animate({opacity: "0"});
    // slide in new background
    $("#ground-step5").animate({bottom: "0"}, 800);
    $("#furniture").animate({bottom: "60px"}, 800);
    $("#arm-step5").animate({opacity: "1"}, 900);
    // fade out down arrow
    $("#down-arrow").fadeOut();
}

// detect scroll event to next scene?

// Step 1 to HOME
function backtoHome() {
    // slide out current background
    $("#ground-step1").animate({bottom: "-60px"}, 600);
    $("#cityscape").animate({bottom: "-1000px"}, 800);
    $("#family").animate({bottom: "-600px"}, 800);
    $("#arm-step1").animate({opacity: "0"}, 100);
    // fade out up arrow
    $("#up-arrow").fadeOut();
    // slide in prev background
    $(".sky").slideDown(780);
    $("#chair").animate({bottom: "60px"}, 600);
    // fade out old text and fade in new
    $("#header-home").fadeIn();
    $("#body-text-home").fadeIn();
    $("#header-step1").fadeOut();
    $("#body-text-step1").fadeOut('slow');
    $(".toggle-text").fadeOut();
}

function playSitDown() {
    srcToGif = "images/user_sitdown.gif";
    $("#user-img").attr('src', srcToGif);
    backtoHome();
}

// Step 2 to step 1
function backtoStep1() {
    // slide out current background
    $("#ground-step2").animate({bottom: "-60px"}, 600);
    $("#income").animate({bottom: "-600px"}, 800);
    $("#cost").animate({bottom: "-600px"}, 800);
    $(".toggle-text-home").fadeOut();
    // slide in prev background
    $("#ground-step1").animate({
        height: "60px"
    }, "slow").animate({
        bottom: "0"
    }, 800);
    $("#cityscape").animate({bottom: "60px"}, 800);
    $("#family").animate({bottom: "60px"}, 800);
    $("#arm-step1").animate({opacity: "1"}, 900);
    // change user back
    userImg = "images/user_standing.png";
    $("#user-img").attr('src', userImg);
    // deselect both
    rightImg = "images/2-cost.png";
    $("#cost").attr('src', rightImg);
    leftImg = "images/2-income.png";
    $("#income").attr('src', leftImg);
    // fade out old text and fade in new
    $("#header-step1").fadeIn();
    $("#body-text-step1").fadeIn();
    $("#header-step2").fadeOut();
    $("#body-text-step2").fadeOut();
    $(".toggle-text").fadeOut();
}

// Step 3 to step 2
function backtoStep2() {
    // slide out current background
    $("#ground-step3").animate({bottom: "-60px"}, 600);
    $("#house").animate({bottom: "-600px"}, 800);
    $("#apartment").animate({bottom: "-600px"}, 800);
    // change user back
    userImg = "images/user_standing.png";
    $("#user-img").attr('src', userImg);
    // slide in prev background
    $("#ground-step2").animate({
        height: "60px"
    }, "slow").animate({
        bottom: "0"
    }, 800);
    $("#income").animate({bottom: "60px"}, "slow");
    $("#cost").animate({bottom: "60px"}, "slow");
    // deselect both
    leftImg = "images/3-house.png";
    $("#house").attr('src', leftImg);
    rightImg = "images/3-apartment.png";
    $("#apartment").attr('src', rightImg);
    // fade out old text and fade in new
    $("#header-step2").fadeIn();
    $("#body-text-step2").fadeIn();
    $("#header-step3").fadeOut();
    $("#body-text-step3").fadeOut();
    $(".toggle-text").fadeOut();
}

// Step 4 to step 3
function backtoStep3() {
    // slide out current background
    $("#ground-step4").animate({bottom: "-60px"}, 600);
    $("#pha").animate({bottom: "-600px"}, 800);
    $("#arm-step4").animate({opacity: "0"}, 200);
    // slide in prev background
    $("#ground-step3").animate({
        height: "60px"
    }, "slow").animate({
        bottom: "0"
    }, 800);
    $("#house").animate({bottom: "60px"}, "slow");
    $("#apartment").animate({bottom: "60px"}, "slow");
    // fade out old text and fade in new
    $("#header-step3").fadeIn();
    $("#body-text-step3").fadeIn();
    $("#header-step4").fadeOut();
    $("#body-text-step4").fadeOut();
    $(".toggle-text").fadeOut();
}

// Step 5 to step 4
function backtoStep4() {
    // slide out current background
    $("#ground-step5").animate({bottom: "-60px"}, 600);
    $("#furniture").animate({bottom: "-600px"}, 800);
    $("#arm-step5").animate({opacity: "0"}, 100);
    // slide in prev background
    $("#ground-step4").animate({
        height: "60px"
    }, "slow").animate({
        bottom: "0"
    }, 800);
    $("#pha").animate({bottom: "60px"}, "slow");
    $("#arm-step4").animate({opacity: "1"}, 900);
    // bring back the down arrow
    $("#down-arrow").fadeIn();
    // fade out old text and fade in new
    $("#header-step4").fadeIn();
    $("#body-text-step4").fadeIn();
    $("#step5-small-header").fadeOut();
    $("#header-step5").fadeOut();
    $("#body-text-step5").fadeOut();
    $(".toggle-text").fadeOut();
}
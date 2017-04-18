$(document).ready(function(){
    $("#schedule-toggle").click(function(){
        $("#schedule").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#mentor-directory-toggle").click(function(){
        $("#mentor-directory").slideToggle("slow");
    });

    var mentors = [ new Mentor("Chiara Massironi","Sendgrid","Email","@CMassironi"),
                    new Mentor("Phil Nash","Twilio","Ruby, Javascript & APIs","@philnash"),
                    new Mentor("Gareth Wilson","Glitch","Glitch & Javascript","@_gw"),
                    new Mentor("Lou Lemaistre","The Family","Designer/Developer","@Lou_mstr"),
                    new Mentor("Nevo Segal","","Deep Learning, Audio & Javascript","@nevosegal"),
                    new Mentor("Christopher Fonseka","ROLI","Littlefoot, BLOCKS SDK, Juce, Seaboard, C++ & MIDI","@XmasRights"),
                    new Mentor("Jack Armitage","Bela","Digital Musical Instruments",""),
                    new Mentor("Giulio Moro","Bela","Everything Bela",""),
                    new Mentor("Alex Bucknall","Pycom","Electronics, Python, & C/C++","@AlexRBucknall"),
                    new Mentor("Jojoe Whitfield","Indee","All of Them",""),
                    new Mentor("Gergely Imreh","Resin","Hardware & Python","@imrehg"),
                    new Mentor("Serge Alleyne","The Family","I can help with finding these first users and iterating. Also share startup methods (growth hacking, operations, culture) that you can apply to own projects.","@salleyne"),
                    new Mentor("Hugh Rawlinson","Spotify","Audio Programming, Music Information Retrieval & Javascript/Web","@hughrawlinson"),
                    new Mentor("Robert Jack","Bela","Bela, Pure Data & Musical Instruments","")

    ];

    for (var i=0;i<=mentors.length;i++){
      $("#mentor-directory-content").append('<div class="col-xs-6 col-md-4"><div class="media"><div class="col-xs-4"><a href="#"><img class="img-thumbnail" src="https://avatars.io/twitter/'+mentors[i].twitterhandle+'"/></a></div><div class="col-xs-8"><h4 class="media-heading">'+mentors[i].name+'</h4><p>From: '+mentors[i].sponsor+'</p><p>Skills: '+mentors[i].skills+'</p><p>Twitter Handle: '+mentors[i].twitterhandle+'</p></div></div></div>');
    }
});
class Mentor{
  constructor(name,sponsor,skills,twitter){
    this.name=name;
    this.sponsor=sponsor;
    this.skills=skills;
    this.twitterhandle=twitter
  }
}






$(document).ready(function(){

  //See Event Class constructor underneath
  var events = [  new Event("Get Your Tickets Now","April 10, 2017 15:09:58","--"),
                  new Event("Registration & Breakfast","April 22, 2017 10:00:00","..."),
                  new Event("Opening Ceremony","April 22, 2017 11:00:00","..."),
                  new Event("Hacking Starts & Lunch","April 22, 2017 12:00:00","..."),
                  new Event("Teambuilding - Workshop","April 22, 2017 12:30:00","..."),
                  new Event("Spotify - Machine Learning - Workshop","April 22, 2017 13:00:00","..."),
                  new Event("AutoDesk - Workshop","April 22, 2017 14:00:00","..."),
                  new Event("Visuals with P5.js Workshop","April 22, 2017 15:00:00","..."),
                  new Event("Audio Basics - Workshop","April 22, 2017 16:00:00","..."),
                  new Event("User Experience - Workshop","April 22, 2017 17:00:00","..."),
                  new Event("Electronics - Workshop","April 22, 2017 18:00:00","..."),
                  new Event("Dinner","April 22, 2017 19:00:00","..."),
                  new Event("Twilio - Workshop","April 22, 2017 20:00:00","..."),
                  new Event("Communities - Talk/Panel/Workshop","April 22, 2017 21:00:00","..."),
                  new Event("Werewolf - Game","April 22, 2017 22:00:00","..."),
                  new Event("Breakfast","April 23, 2017 08:00:00","..."),
                  new Event("Hacking Ends & Lunch","April 23, 2017 12:00:00","..."),
                  new Event("Presentations","April 23, 2017 13:00:00","..."),
                  new Event("Prizes & Closing Ceremony","April 23, 2017 15:00:00","..."),
                  new Event("--","December 23, 2017 15:01:00","--")
  ];

vars = setInterval(function(){
  var now = new Date().getTime();

  var currentevent=(function(){
    var presentevent;
    for (i=0; i<=events.length-1;i++){
      if(events[i].time == now || events[i].time-now <= 0){
        presentevent = events[i];
      }
    }
    return presentevent;
  })();

var nextevent = (function(){
  var followingevent;
  for (i=0; i<=events.length-1;i++){
    if(events[i].time > now ){
      followingevent = events[i];
      return followingevent;
    }
  }
})();

var countdown = (function(){
  var distance = nextevent.time - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
  document.getElementById("counter").innerHTML = hours + ":" + minutes + ":" + seconds;
})();

$("#currentevent-name").text(currentevent.name);
$("#currentevent-details").text(currentevent.details);
$("#nextevent-name").text(nextevent.name);
$("#nextevent-details").text(nextevent.details);

}, 1000);
});

class Event {
  constructor(name,time,details){
    this.name = name;
    this.time = new Date(time).getTime();;
    this.location = location;
    this.details = details;
  }
}


// $(document).ready(function(){
// var displaychallenge = 0;
// var challenges = [
//   new Challenge("Audio","Make a cool audio project","Cool Prize"),
//   new Challenge("Visual","Make a cool visual project","Cool Prize"),
//   new Challenge("Hardware","Make a cool hardware project","Cool Prize")
// ];
//
// $("#toggle-challenge-left").click(function(){ console.log("left");
//                                               displaychallenge=displaychallenge-1;
//                                               if(displaychallenge < 0){
//                                                 displaychallenge=challenges.length-1;
//                                               };
//                                               $("#toggle-challenge-content").html("<h1>"+challenges[displaychallenge].name+"</h1><p>"+challenges[displaychallenge].details +"</p><p>Win a "+ challenges[displaychallenge].prize+"</p>");
//                                             });
// $("#toggle-challenge-right").click(function(){
//                                               displaychallenge++;
//                                               if(displaychallenge > challenges.length-1){
//                                                 displaychallenge = 0;
//                                               };
//                                               $("#toggle-challenge-content").html("<h1>"+challenges[displaychallenge].name+"</h1><p>"+challenges[displaychallenge].details +"</p><p>Win a "+ challenges[displaychallenge].prize+"</p>");
//                                             });
//
// $("#toggle-challenge-content").html("<h1>"+challenges[displaychallenge].name+"</h1><p>"+challenges[displaychallenge].details +"</p><p>Win a "+ challenges[displaychallenge].prize+"</p>");
// });
class Challenge{
  constructor(name,details,prize){
    this.name = name;
    this.details = details;
    this.prize = prize;
  }
}

//Mentor on Duty
$(document).ready(function(){
  var volunteers = [ new Volunteer("Kevin Lewis","phazonoverload")
                  ];
  var volunteerphoto = "https://avatars.io/facebook/" + volunteers[0].fbname;
  console.log(volunteerphoto);
  $("#volunteerpic").attr("src",volunteerphoto);
  $("#mentorname").text(volunteers[0].name);
});

class Volunteer{
  constructor(name,facebookname){
    this.name = name;
    this.fbname = facebookname;
  }
}

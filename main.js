 $("#sound-icon").click(function () {
    var $self        = $(this);
    $self.toggleClass('muted');
    $("#audio-block").prop("muted",$self.hasClass('muted'));
    return false;
});


var vid = document.getElementById("audio-block");

$('#play-pause').click(function(){
    var $self = $(this);
    $self.toggleClass('muted');
    if($self.hasClass('muted')){
        vid.play();
    } else {
        vid.pause();
    }
    return false;
});

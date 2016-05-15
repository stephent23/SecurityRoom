$(function(){
    $("#universityDetail").hide();
    $("#collegeDetail").hide();
    $("#schoolDetail").hide();
    $('#universityTitle').click(function() {
        $('#universityDetail').slideToggle('fast');
        $('#collegeTitle').slideToggle('fast');
        $('#schoolTitle').slideToggle('fast');
        return false;
    });

    $('#collegeTitle').click(function() {
        $('#collegeDetail').slideToggle('fast');
        $('#universityTitle').slideToggle('fast');
        $('#schoolTitle').slideToggle('fast');
        return false;
    });

    $('#schoolTitle').click(function() {
        $('#schoolDetail').slideToggle('fast');
        $('#universityTitle').slideToggle('fast');
        $('#collegeTitle').slideToggle('fast');
        return false;
    });
});
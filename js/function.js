$(document).ready(function(){
    $('#fullpage').fullpage({
            autoScrolling: true,
            navigation: false,
            anchors: ['section0', 'section1', 'section2', 'section3'], //data-anchors
            navigationTooltips: ['Home', 'To-Do Liste', 'Bilderreihe', ''],
            showActiveTooltip: false,
            controlArrows: true,
            slidesNavigation: true,


            //NUR ALS TEST, keine wirkliche Funktion!
            afterLoad: function(origin, destination, direction) {
                //sobald section 2 ausgewählt ist, passiert erst etwas
                if (origin.index == 2){
                    console.log('Enter');
                }

            },
            onLeave: function(origin, destination, direction) {
                if (origin.index == 2){
                    console.log('Quit');
                }
            },
    });
});


//add to list 
var i=1;
$(document).on('click','.add-todo',function(){
    var todoInputData=$(this).siblings('input').val();
    var todoListData=`<div class="row-parent">
    <div class="list-row">
    <div class="list-num">`+i+`.</div>
    <div class="list-data">`+ todoInputData+`</div>
    <div class="remove-todo">&#x2715;</div>
    </div>
    <div class="list-error"></div></div>`;
    if($.trim(todoInputData)=='') {
        $(this).parents('.todo-content').find('.error').text('Gib doch bitte etwas ein :)');
    }
    else {
        $(this).parents('.todo-content').find('.todo-list').append(todoListData);
        i++
        $(this).parents('.todo-content').find('.error').empty();
    }
    $(this).siblings('input').val('');
});

//add when you hit enter
$(document).keydown(function (event) { 
     if (event.which == 13) {           //13 ist ascii code fuer return
         event.preventDefault();
         $('.add-todo').click(); 
     } 
});

//remove 
$(document).on('click','.remove-todo',function() {
    $(this).parent('.list-row').remove();
});
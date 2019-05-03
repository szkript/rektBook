// shows when everything loaded on the page
window.onload = function () {
    console.log("fully loaded")
};
// shows when the page is ready
$(document).ready(function () {
    console.log("betötött")
    // manipulate a tag
    $('a').click(function(event){
        console.log("nani?");
        // disable linking(href)
        event.preventDefault();

        // adding class to a tag
        // both is same
        // $("a").addClass("test");
        $(this).addClass("test");
        // adding attribute
        // $(this).attr("id", "value")

        // remove class from a tag
        // $("a").removeClass("test");
        $(this).removeClass("test");
        
        // hiding slowly the link
        // $( this ).hide( "slow" );
        let newDiv = document.createElement("div");
        newDiv.innerHTML = "<a id='nani'>omae wa mo shinderiou</a>";
        document.body.appendChild(newDiv);
    })
    let naniBtn = document.getElementById("nani");
    event.preventDefault();
    console.log("naniii");
    });


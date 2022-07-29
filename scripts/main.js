


$(document).ready(function(){

    let image_overlay = $("#grid .grid-element");
    let title = $("#welcome_text");
    let subtitle = $("#welcome_text_sub");
    
    image_overlay.mouseover(function () {
        let figure = $(this).children("figure")
        let image_overlay = figure.children("div.image_overlay");
        let image_title = image_overlay.children("div.image_title").children("p");
        let image_subtitle = image_title.attr("description");

        image_overlay.css({ "top": "80%", "height": "20%" });
        title.text(image_title.html())
        subtitle.text(image_subtitle)
    })

    image_overlay.mouseout(function () {
        $(this).children("figure").children("div.image_overlay").css({ "top": "0%", "height": "100%" });
        title.text("Nuestros Planes")
        subtitle.text(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat omnis eum, aut recusandae
                        ipsam
                        optio ab doloremque explicabo repellat nisi placeat facilis quas voluptates delectus enim
                        incidunt
                        ipsa modi quae.`);
    })

});





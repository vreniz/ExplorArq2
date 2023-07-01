var VALORESTETICO_Img = false;
var VALORHISTO_Img = false;
var VALORCULTURA_Img = false;
var ELEMENTOARQUITECTÓNICO_Img = false;
var DANZA_Img = false;
var MEMORIA_Img = false;
var ARTESANIA_Img = false;


$("document").ready(function() {
    //image VALORESTETICO
    $("#img_VALORESTETICO").mouseenter(function() {
        $(this).attr('src', 'img/buttons/Green/VALORESTETICO.png');
    });
    //image VALORESTETICO hover
    $("#img_VALORESTETICO").mouseleave(function() {
        if (VALORESTETICO_Img != true) {
            $(this).attr('src','img/buttons/White/VALORESTETICO.png');
        }
    });

    //image VALORHISTO
    $("#img_VALORHISTO").mouseenter(function() {
        $(this).attr('src', 'img/buttons/Green/VALORHISTO.png');
    });
    //image VALORHISTO hover
    $("#img_VALORHISTO").mouseleave(function() {
        if (VALORHISTO_Img != true) {
            $(this).attr('src', 'img/buttons/White/VALORHISTO.png');
        }
    });

    //image VALORCULTURA
    $("#img_VALORCULTURA").mouseenter(function() {
        $(this).attr('src', 'img/buttons/Green/VALORCULTURA.png');
    });
    //image VALORCULTURA hover    
    $("#img_VALORCULTURA").mouseleave(function() {
        if (VALORCULTURA_Img != true) {
            $(this).attr('src', 'img/buttons/White/VALORCULTURA.png');
        }
    });

    //image ELEMENTOARQUITECTÓNICO
    $("#img_ELEMENTOARQUITECTÓNICO").mouseenter(function() {
        $(this).attr('src', 'img/buttons/Green/ELEMENTOARQUITECTÓNICO.png');
    });
    //image ELEMENTOARQUITECTÓNICO hover    
    $("#img_ELEMENTOARQUITECTÓNICO").mouseleave(function() {
        if (ELEMENTOARQUITECTÓNICO_Img != true) {
            $(this).attr('src', 'img/buttons/White/ELEMENTOARQUITECTÓNICO.png');
        }
    });

    //image DANZA
    $("#img_DANZA").mouseenter(function() {
        $(this).attr('src', 'img/buttons/Green/DANZA.png');
    });
    //image DANZA hover    
    $("#img_DANZA").mouseleave(function() {
        if (DANZA_Img != true) {
            $(this).attr('src', 'img/buttons/White/DANZA.png');
        }
    });

    //image MEMORIA
    $("#img_MEMORIA").mouseenter(function() {
        $(this).attr('src', 'img/buttons/Green/MEMORIA.png');
    });
    //image MEMORIA hover    
    $("#img_MEMORIA").mouseleave(function() {
        if (MEMORIA_Img != true) {
            $(this).attr('src', 'img/buttons/White/MEMORIA.png');
        }
    });

    //image ARTESANIA
    $("#img_ARTESANIA").mouseenter(function() {
        $(this).attr('src', 'img/buttons/Green/ARTESANIA.png');
    });
    //image ARTESANIA hover    
    $("#img_ARTESANIA").mouseleave(function() {
        if (ARTESANIA_Img != true) {
            $(this).attr('src', 'img/buttons/White/ARTESANIA.png');
        }
    });

    $("#my_audio").get(0).play();
});

function Click_Image_Button_Option(image_id) {
    HideTextDescripcion();
    Default_Image_Button_Option();
    Default_Variables_Value();
    $("#img_" + image_id).attr('src', 'img/buttons/Green/' + image_id + '.png');
    $("#selloImage").css("visibility", "visible");
    $("#ContainerDesctipcion").css("visibility", "visible");
    $("#ContainerDesctipcion").css('height', '36vh');

    switch (image_id) {
        case "VALORESTETICO":
            VALORESTETICO_Img = true;
            ChangeSelloImage('SELLO_VALORESTETICO');
            ChangeDescripcion('VALOR ESTETICO');
            $("#VALORESTETICODescripcion").css('display', 'block');
            $("#MapsFrame").attr("src", "https://www.google.com/maps/d/embed?mid=1uLuvG1yIugAYWk70CpUawbSVRYRj_Zg&ehbc=2E312F");
            break;
        case "VALORHISTO":
            VALORHISTO_Img = true;
            ChangeSelloImage('SELLO_VALORHISTO');
            ChangeDescripcion('VALOR HISTORICO');
            $("#VALORHISTODescripcion").css('display', 'block');
            $("#MapsFrame").attr("src", "https://www.google.com/maps/d/embed?mid=1uLuvG1yIugAYWk70CpUawbSVRYRj_Zg&ehbc=2E312F");
            break;
        case "VALORCULTURA":
            VALORCULTURA_Img = true;
            ChangeSelloImage('SELLO_VALORCULTURA');
            ChangeDescripcion('VALOR CULTURAL');
            $("#VALORCULTURADescripcion").css('display', 'block');
            $("#MapsFrame").attr("src", "https://www.google.com/maps/d/embed?mid=1uLuvG1yIugAYWk70CpUawbSVRYRj_Zg&ehbc=2E312F");
            //$("#MapsFrame").attr("src", "https://www.google.com/maps/d/u/0/embed?mid=192SC49OwwwxYx2P45X0eYW7hKipslfQ&ehbc=2E312F");
            break;
        case "ELEMENTOARQUITECTÓNICO":
            ELEMENTOARQUITECTÓNICO_Img = true;
            ChangeSelloImage('SELLO_ELEMENTOARQUITECTÓNICO');
            ChangeDescripcion('BALCÓN');
            $("#ELEMENTOARQUITECTÓNICODescripcion").css('display', 'block');
            $("#MapsFrame").attr("src", "https://speckle.xyz/embed?stream=213b85fd9e&commit=53b80d655f&c=%5B40.05444%2C26.98307%2C9.25%2C23.47102%2C-11.67808%2C9.25%2C0%2C1%5D");
            break;
        case "DANZA":
            DANZA_Img = true;
            ChangeSelloImage('SELLO_DANZA');
            ChangeDescripcion('DANZA Y MÚSICA');
            $("#DanzaDescripcion").css('display', 'block');
            $("#MapsFrame").attr("src", "https://speckle.xyz/embed?stream=f8a20268a7&commit=b947fe7872&c=%5B14.74012%2C-15.00506%2C9.38512%2C1.23041%2C-34.25335%2C8.28634%2C0%2C1%5D");
            break;
        case "MEMORIA":
            MEMORIA_Img = true;
            ChangeSelloImage('SELLO_MEMORIA');
            ChangeDescripcion('ESPACIO DE MEMORIA');
            $("#MemoriaDescripcion").css('display', 'block');
            $("#ContainerDesctipcion").css('height', '36vh');
            $("#MapsFrame").attr("src", "https://www.google.com/maps/d/u/0/embed?mid=1ml3wiZwfNBA--gFDRxxgc7FSckxQz-M&ehbc=2E312F");
            break;
        case "ARTESANIA":
            ARTESANIA_Img = true;
            ChangeSelloImage('SELLO_ARTESANIAS');
            ChangeDescripcion('ARTESANIAS');
            $("#ArtesaniaDescripcion").css('display', 'block');
            $("#ContainerDesctipcion").css('height', '36vh');
           // $("#MapsFrame").attr("src", "https://www.google.com/maps/d/u/1/embed?mid=1rhgqtgLxtuAEaBLXP6V79_bwnHfwVYtq");
            $("#MapsFrame").attr("src", "https://speckle.xyz/embed?stream=48a586271a&commit=3116b6eb2d&c=%5B7.60127%2C12.27264%2C3.00654%2C6.70676%2C12.18435%2C3.00654%2C0%2C1%5D");
            break;
    }
    
}

function Default_Image_Button_Option() {
    $("#img_VALORESTETICO").attr('src', 'img/buttons/White/VALORESTETICO.png');
    $("#img_VALORHISTO").attr('src', 'img/buttons/White/VALORHISTO.png');
    $("#img_VALORCULTURA").attr('src', 'img/buttons/White/VALORCULTURA.png');
    $("#img_ELEMENTOARQUITECTÓNICO").attr('src', 'img/buttons/White/ELEMENTOARQUITECTÓNICO.png');
    $("#img_DANZA").attr('src', 'img/buttons/White/DANZA.png');
    $("#img_MEMORIA").attr('src', 'img/buttons/White/MEMORIA.png');
    $("#img_ARTESANIA").attr('src', 'img/buttons/White/ARTESANIA.png');
}

function Default_Variables_Value() {
    VALORESTETICO_Img = false;
    VALORHISTO_Img = false;
    VALORCULTURA_Img = false;
    ELEMENTOARQUITECTÓNICO_Img = false;
    DANZA_Img = false;
    MEMORIA_Img = false;
}

function ChangeSelloImage(image){
    $("#selloImage").attr('src', 'img/Sellos/' + image + '.png');
}

function ChangeDescripcion(title){
    $("#TitleDescripcion").html(title);
}

function HideTextDescripcion(){
    $("#VALORESTETICODescripcion").css('display', 'none');
    $("#VALORHISTODescripcion").css('display', 'none');
    $("#VALORCULTURADescripcion").css('display', 'none');
    $("#ELEMENTOARQUITECTÓNICODescripcion").css('display', 'none');
    $("#DanzaDescripcion").css('display', 'none');
    $("#MemoriaDescripcion").css('display', 'none');
    $("#ArtesaniaDescripcion").css('display', 'none');
}

function CloseContainerDescripcion(){
    $("#ContainerDesctipcion").css("visibility", "hidden");
}

  
  
  
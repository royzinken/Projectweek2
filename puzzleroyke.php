<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1" />

    <!-- stylesheet -->
    <link rel="stylesheet" href="/styles/puzzleroyke.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <!-- scripts -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
    </script>

    <!-- Title -->
    <title>Memory puzzle</title>

</head>

<body>
<div id="overlay" onclick="play(), off()"><h2 id="overlay-text">Start Game</h2></div>

    <div id="container">
        <div class="buttonbox_top">

            <!--    
                    button location
                    x000
                    0000 
                -->

            <div class="btn_box_1">
                <button id="btn_1" class="btn_all" type="button" onclick="btn_1()">
                    <h1 class="btn_nbsp">&nbsp;</h1>
                    <h1 class="btn_text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn_nbsp">&nbsp;</h1>
                </button>
            </div>
            <!--   
                    button location 
                    0x00
                    0000 
                -->
            <div class="btn_box_2">
                <button id="btn_2" class="btn_all" type="button" onclick="btn_2()">
                    <h1 class="btn_nbsp">&nbsp;</h1>
                    <h1 class="btn_text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn_nbsp">&nbsp;</h1>
                </button>
            </div>
            <!-- 
                    button location  
                    00x0
                    0000 
                -->
            <div class="btn_box_3">
                <button id="btn_3" class="btn_all" type="button" onclick="btn_3()">
                    <h1 class="btn_nbsp">&nbsp;</h1>
                    <h1 class="btn_text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn_nbsp">&nbsp;</h1>
                </button>
            </div>
            <!--   
                    button location 
                    000x
                    0000 
                -->
            <div class="btn_box_4">
                <button id="btn_4" class="btn_all" type="button" onclick="btn_4()">
                    <h1 class="btn_nbsp">&nbsp;</h1>
                    <h1 class="btn_text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn_nbsp">&nbsp;</h1>
                </button>
            </div>
        </div>
        
        <div class="buttonbox_bottom">
            <!--   
                    button location 
                    0000
                    x000 
                -->
            <div class="btn_box_5">
                <button id="btn_5" class="btn_all" type="button" onclick="btn_5()">
                    <h1 class="btn_nbsp">&nbsp;</h1>
                    <h1 class="btn_text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn_nbsp">&nbsp;</h1>
                </button>
            </div>
            <!--    
                    button location
                    0000
                    0x00 
                -->
            <div class="btn_box_6">
                <button id="btn_6" class="btn_all" type="button" onclick="btn_6()">
                    <h1 class="btn_nbsp">&nbsp;</h1>
                    <h1 class="btn_text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn_nbsp">&nbsp;</h1>
                </button>
            </div>
            <!--    
                    button location
                    0000
                    00x0 
                -->
            <div class="btn_box_7">
                <button id="btn_7" class="btn_all" type="button" onclick="btn_7()">
                    <h1 class="btn_nbsp">&nbsp;</h1>
                    <h1 class="btn_text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn_nbsp">&nbsp;</h1>
                </button>
            </div>
            <!--    
                    button location
                    0000
                    000x
                -->
            <div class="btn_box_8">
                <button id="btn_8" class="btn_all" type="button" onclick="btn_8()">
                    <h1 class="btn_nbsp">&nbsp;</h1>
                    <h1 class="btn_text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn_nbsp">&nbsp;</h1>
                </button>
            </div>

            <br>

        </div>
    </div>



    <script src="/puzzleroyke.js"></script>
</body>

</html>
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

<body id="roy">
<div id="overlay" onclick="play(), off()"><h2 id="overlay-text">Start Game</h2></div>

    <div id="container" onclick='save(); 
                this.onclick = null; 
                    this.setAttribute("style", "color: #ccc");'>
        <div class="buttonbox-top">

            <!--    
                    button location
                    x000
                    0000 
                -->

            <div class="btn-box-1">
                <button id="btn-1" class="btn-all" type="button" onclick="btn_1()">
                    <h1 class="btn-nbsp">&nbsp;</h1>
                    <h1 class="btn-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn-nbsp">&nbsp;</h1>
                </button>
            </div>
            <!--   
                    button location 
                    0x00
                    0000 
                -->
            <div class="btn-box-2">
                <button id="btn-2" class="btn-all" type="button" onclick="btn_2()">
                    <h1 class="btn-nbsp">&nbsp;</h1>
                    <h1 class="btn-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn-nbsp">&nbsp;</h1>
                </button>
            </div>
            <!-- 
                    button location  
                    00x0
                    0000 
                -->
            <div class="btn-box-3">
                <button id="btn-3" class="btn-all" type="button" onclick="btn_3()">
                    <h1 class="btn-nbsp">&nbsp;</h1>
                    <h1 class="btn-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn-nbsp">&nbsp;</h1>
                </button>
            </div>
            <!--   
                    button location 
                    000x
                    0000 
                -->
            <div class="btn-box-4">
                <button id="btn-4" class="btn-all" type="button" onclick="btn_4()">
                    <h1 class="btn-nbsp">&nbsp;</h1>
                    <h1 class="btn-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn-nbsp">&nbsp;</h1>
                </button>
            </div>
        </div>
        
        <div class="buttonbox-bottom">
            <!--   
                    button location 
                    0000
                    x000 
                -->
            <div class="btn-box-5">
                <button id="btn-5" class="btn-all" type="button" onclick="btn_5()">
                    <h1 class="btn-nbsp">&nbsp;</h1>
                    <h1 class="btn-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn-nbsp">&nbsp;</h1>
                </button>
            </div>
            <!--    
                    button location
                    0000
                    0x00 
                -->
            <div class="btn-box-6">
                <button id="btn-6" class="btn-all" type="button" onclick="btn_6()">
                    <h1 class="btn-nbsp">&nbsp;</h1>
                    <h1 class="btn-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn-nbsp">&nbsp;</h1>
                </button>
            </div>
            <!--    
                    button location
                    0000
                    00x0 
                -->
            <div class="btn-box-7">
                <button id="btn-7" class="btn-all" type="button" onclick="btn_7()">
                    <h1 class="btn-nbsp">&nbsp;</h1>
                    <h1 class="btn-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn-nbsp">&nbsp;</h1>
                </button>
            </div>
            <!--    
                    button location
                    0000
                    000x
                -->
            <div class="btn-box-8">
                <button id="btn-8" class="btn-all" type="button" onclick="btn_8()">
                    <h1 class="btn-nbsp">&nbsp;</h1>
                    <h1 class="btn-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    <h1 class="btn-nbsp">&nbsp;</h1>
                </button>
            </div>

            <br>

        </div>
    </div>



    <script src="/puzzleroyke.js"></script>
</body>

</html>
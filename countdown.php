<!--
	This file contains the countdown timer.
	The images for the nummbers are in the images map
-->

<?php
session_start();
// Decrease the clock value by 1
$_SESSION['clock'] = $_SESSION['clock'] - 1;
?>
<html>
<head>
<!-- refresh this countdown timer file every second -->
<META HTTP-EQUIV='REFRESH' CONTENT='1;countdown.php'>
</head>

<body style='height: 80px; background: linear-gradient(black, orange, red);'>
<br><br>
<table width='100%' border='0' bgcolor='black'>
<?php    
	// ============ The top row of the table represents the number of tries an player has ==========
    echo("<tr><td align='center'>");																// In the first cell of the table row is first dot of mistakes
    if($_SESSION['NumberOfMistakes']==1 || $_SESSION['NumberOfMistakes']==2){						// Check how many mistakes the player has made
        echo("<img src='./images/reddot.png' width='20%' alt='red dot'>");							// An image that represents that the player has made his first mistake      
        $_SESSION['clock'] = $_SESSION['clock'] - 1;												// Decrease the timer by 1 if there is a mistake made
    }else{
        echo("<img src='./images/greendot.png' width='20%' alt='green dot'>");						// An image to represent that the player has not made a mistake
    }
    echo("</td><td align='center'>");																// In the second cell of the table row is second dot of mistakes
    if($_SESSION['NumberOfMistakes']==2){															// Check how many mistakes the player has made
        echo("<img src='./images/reddot.png' width='20%' alt='red dot'>");							// An image that represents that the player has made his second mistake
        // Decrease the timer by 1
        $_SESSION['clock'] = $_SESSION['clock'] - 1;												// Decrease the timer by 1 if there is a mistake made
    }else{
        echo("<img src='./images/greendot.png' width='20%' alt='green dot'>");						// An image to represent that the player has still one try left
    }
    echo("</td><td align='center'><font color='red'><b>Explode</b></font></td></tr>");				// The third cell warnes the player for an explosion (pasive).
    echo("<tr><td colspan='3' align='center'>");
    if($_SESSION['NumberOfMistakes']==3){															// If the player has made 3 mistakes:
        header('location:./exploded.html');															// Go to exploded.html and
        exit();																						// Stop the game completly
    } 
    // ======================== The countdown timer ================================================
    if($_SESSION['clock']>=1 && $_SESSION['NumberOfSolvedPuzzles']<$_SESSION['NumberOfPuzzles']){  	// The timer counts down as long as the number of solved puzzles is lower the the total number of puzzles
        $iMinutes = floor($_SESSION['clock']/60);													// Reset the timer the the number
        $iSecond = $_SESSION['clock']-(($iMinutes+1)*60);
        $iSeconds = 60+$iSecond;        
        $sSeconds = strval($iSeconds);
        $sFirstSeconds = substr($sSeconds, 0,1);
        $sSecondSeconds = substr($sSeconds, 1,1);        
        if($iSeconds<10){$sFirstSeconds=0;$sSecondSeconds=$iSeconds;}
        if($iSeconds==60){$sFirstSeconds=0;$sSecondSeconds=0;}         
        // The building of the minutes on the timer
        switch($iMinutes){
                case 5: echo("<img src='./images/number5.jpg' width='20%' alt='number 5'>"); break;
                case 4: echo("<img src='./images/number4.jpg' width='20%' alt='number 4'>"); break;
                case 3: echo("<img src='./images/number3.jpg' width='20%' alt='number 3'>"); break;
                case 2: echo("<img src='./images/number2.jpg' width='20%' alt='number 2'>"); break;
                case 1: echo("<img src='./images/number1.jpg' width='20%' alt='number 1'>"); break;
                case 0: echo("<img src='./images/number0.jpg' width='20%' alt='number 0'>"); break;
                default : echo("Error: invalid minutes counter");
        }
        // The separator between the minutes and the first of the 2 seconds numbers        
        echo "<img src='./images/separator.jpg' width='10%' alt='separator'>";        
        // Change the number of the first seconds counter of the countdown timer
        switch($sFirstSeconds){
                case 5: echo("<img src='./images/number5.jpg' width='20%' alt='number 5'>"); break;
                case 4: echo("<img src='./images/number4.jpg' width='20%' alt='number 4'>"); break;
                case 3: echo("<img src='./images/number3.jpg' width='20%' alt='number 3'>"); break;
                case 2: echo("<img src='./images/number2.jpg' width='20%' alt='number 2'>"); break;
                case 1: echo("<img src='./images/number1.jpg' width='20%' alt='number 1'>"); break;
                case 0: echo("<img src='./images/number0.jpg' width='20%' alt='number 0'>"); break;
                default : echo("Error: invalid first seconds counter");
        }
        // Change the number of the second seconds counter of the countdown timer
        switch($sSecondSeconds){
                case 9: echo("<img src='./images/number9.jpg' width='20%' alt='number 9'>"); break;
                case 8: echo("<img src='./images/number8.jpg' width='20%' alt='number 8'>"); break;
                case 7: echo("<img src='./images/number7.jpg' width='20%' alt='number 7'>"); break;
                case 6: echo("<img src='./images/number6.jpg' width='20%' alt='number 6'>"); break;
                case 5: echo("<img src='./images/number5.jpg' width='20%' alt='number 5'>"); break;
                case 4: echo("<img src='./images/number4.jpg' width='20%' alt='number 4'>"); break;
                case 3: echo("<img src='./images/number3.jpg' width='20%' alt='number 3'>"); break;
                case 2: echo("<img src='./images/number2.jpg' width='20%' alt='number 2'>"); break;
                case 1: echo("<img src='./images/number1.jpg' width='20%' alt='number 1'>"); break;
                case 0: echo("<img src='./images/number0.jpg' width='20%' alt='number 0'>"); break;
                default : echo("Error: invalid second seconds counter");
        }
    } elseif($_SESSION['NumberOfSolvedPuzzles']==$_SESSION['NumberOfPuzzles']){	// All puzzles are solved        
        header('location:./succesframes.html');    				// Show the success page
    } else{
        header('location:./exploded.html');                                     // The player has not solved al puzzels in time, show the explode page
        exit();
    }
?>
</td></tr></table>
</body>
</html>

/*
Tapped menu
 */

function openMenu(event, menuName){
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";    
    }


    tablinks = document.getElementsByClassName('tablink');
    for(i = 0; i < tablinks.length; i++){ /*this should be tablinks.length */
        tablinks[i].classList.remove("active-tab"); /*using classlist for better readability*/
    }

    document.getElementById(menuName).style.display = "block";
    event.currenttarget.classList.add("active-tab"); /*using classlist for better readability */

}

document.getElementById("mainLink").click(); /*auto clicks starter starter tab when the page loads */
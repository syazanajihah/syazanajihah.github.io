function openTab(tabName) {
    // var i;
    // var x = document.getElementsByClassName("tabBtn");
    // for (i = 0; i < x.length; i++) {
    //    x[i].style.display = "none";
    // }
    // document.getElementById(tabName).style.display = "block";

    var e = document.getElementById(tabName);
    if(e.style.display == 'block'){
      e.style.display = 'none';
    }
    else {
      e.style.display = 'block';
    }
}
Versions stay together.
If you upload a file that matches the name of an existing file, Drive will add it as a new version, instead of creating a duplicate.
GOT IT

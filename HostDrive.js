    // We want to start by adjusting the color settings to match the saved color settings

     // Make a variable for our xmlHttpRequest which we send out to get our data
     var xmlhttp = new XMLHttpRequest();

     //When it is ready
     xmlhttp.onreadystatechange = function() 
     {
       if (this.readyState == 4 && this.status == 200) 
       {
         //Activate our function
         getXML(this);
       }
     };
     // Open it and get the data from the URL
     xmlhttp.open("GET", "https://d4q2.github.io/xml/", false);

     // Send it on
     xmlhttp.send();

   function getXML(xml) 
   {
     // Create som variables
     var x, i, xmlDoc, txt;
     xmlDoc = xml.responseXML;
     txt = "";
     x = xmlDoc.getElementsByTagName("backgroundColorBody");
     txt += x[0].childNodes[0].nodeValue;
     document.body.style.background = txt;
   }



   // A function to take us to the donate page
   function donatePage()
   {
     // Code to take us to the donate page
     window.open('https://d4q2.github.io/donate');
   }

   // And for the settings page
   function settingsPage()
   {
     window.open('https://d4q2.github.io/settings');
   }

   // And for the settings page
   function homePage()
   {
     window.open('https://d4q2.github.io/home');
   }


   let menuBool = false;

   function openMenu()
   {
     menuBool = menuBool ? false : true;


     if (menuBool == true)
     {
       var menu = document.getElementById("menu");

       // Create a button (in this case it will be the donate button)
       var donateButton = document.createElement("BUTTON");

        // Change the innerHTML to a sensible set of text (in this case donate)
        donateButton.innerHTML = "Donate";

        // Change the class to the class for menu buttons and the id to donateButton so we can access it 
        // easier and it can assume previously defined css values
        donateButton.setAttribute("class", "menuButton");
        donateButton.setAttribute("id", "donateButton");

        // Change the onclick value to what we want (in this case a function to take us  to the donate page)
        donateButton.onclick = donatePage;

        // Append donateButton to the menu <div>
        menu.appendChild(donateButton);

        // Move it into the perfect position
        donateButton.style.transform = "translateX(-10px)";


        // And the same process for the settings button
        var settingsButton = document.createElement("BUTTON");
        settingsButton.innerHTML = "Settings";
        settingsButton.setAttribute("class", "menuButton");
        settingsButton.setAttribute("id", "settingsButton");
        menu.appendChild(settingsButton);
        settingsButton.style.transform = "translateX(-20px)";
        settingsButton.onclick = settingsPage;
        
        // And also the same process for the home button
        var homeButton = document.createElement("BUTTON");
        homeButton.innerHTML = "Home";
        homeButton.setAttribute("class", "menuButton");
        homeButton.setAttribute("id", "homeButton");
        menu.appendChild(homeButton);
        homeButton.style.transform = "translateX(-30px)";
        homeButton.onclick = homePage;
     }

     else
     {
       // Clear our menu div
       document.getElementById("menu").innerHTML = "";

       // Get variable for menu div and make variable for our new openMenu button
       var menu = document.getElementById("menu");
       var menuOpener = document.createElement("BUTTON");
 
       // Specify qualities for our openMenu button
       menuOpener.innerHTML = "Menu";
       menuOpener.setAttribute("class", "openMenu");
       menuOpener.setAttribute("id", "menuOpener");
       menuOpener.onclick = openMenu;

       // Append it to the menu div
       menu.appendChild(menuOpener);
     }
   }

# Chemistry_Explorer_Sheet_Web
An interactive, JSON-powered periodic table and chemistry documentation system featuring all 120 elements with 36 detailed properties each. Built with HTML, CSS, JS, and Python for students, developers, and science enthusiasts alike.

It contains a dynamic periodic table in the top and a small searchbox at the bottom to find details on the elements. It has three options for performing a search. You can search with Atomic Number, Symbol or Name.
You can get either a detail or brief result.

The folder v1.0 contains the first version of the project.
It contains a folder names "elementsJSONserver" that consists a small localhost Python file server to serve the JSON file "elements.json", in which the data for elements is stored.

This project is in three forms:
     Chemistry_Explorer_Sheet_full-self.html: It has HTML, JS, CSS and the element data embedded in it. That is why it is fully self-dependent and ready to use on Phones and PCs.

     Chemistry_Explorer_Sheet.html: It has HTML, JS and CSS together but needs the element data file to be served on localhost port 8080.

     index.html + script.js + style.css: It is same as the second one(needs the JSON file to be served locally) but has HTML, JS and CSS also in separate files.


The server is prebuilt, just copy the whole directory to a folder and start the server. 
You will need to do nothing but open the html file.
If you don't want the server, Just use the file mentioned first.


 Also, there is an extra elements.json file for your preview and a backup.

⚠️ Disclaimer: Data for some elements is AI-generated and may contain inaccuracies. This project is for educational and experimental purposes only — use it at your own discretion.

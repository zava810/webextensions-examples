(function() {
  if (window.hasRun) { return; }
  window.hasRun = true;
  function insertBeast(beastURL) {
    removeExistingBeasts();
    let beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.style.height = "100vh";
    beastImage.className = "beastify-image";
    document.body.appendChild(beastImage);
  }
  function removeExistingBeasts() {
    let existingBeasts = document.querySelectorAll(".beastify-image");
    for (let beast of existingBeasts) { beast.remove(); }
  }
  /** * Listen for messages from the background script. * Call "beastify()" or "reset()". */
  browser.runtime.onMessage.addListener((msgzo) => {
	if (msgzo.command === "beastify") { 	insertBeast(msgzo.beastURL); }
    else if (msgzo.command === "reset") { removeExistingBeasts(); }
  });
})();
/*
0. anonymous function define n call
1. window.hasRun
2. dom_elem = document.createElement("img");
3. dom_elem.setAttribute("src", beastURL);
4. dom_elem.style.height = "100vh";
5. dom_elem.className = "beastify-image";
6. document.body.appendChild(dom_elem);
7. nonlive_nodelist_of_elem =  document.querySelectorAll(selector); 
  1. const matches = document.querySelectorAll("div.note, div.alert");
  2. const container = document.querySelector("#test");
  2. const matches = container.querySelectorAll("div.highlighted > p");
8. for of loop 
7. browser.tabs.sendMessage(tabs[0].id, msgzo);
9. browser.runtime.onMessage.addListener((msgzo) => {})
7. const hidePage_css_codebqs = `body > :not(.beastify-image) { display: none; }`;
7. document.addEventListener("click", (e) => {}) 
7. browser.runtime.getURL("beasts/frog.jpg");
7. browser.tabs.insertCSS({code: hidePage_css_codebqs}).then() => {})
7. browser.tabs.removeCSS({code: hidePage}).then(() => {})
7. browser.tabs.query({active: true, currentWindow: true}).then(reset).catch(reportError)
7. browser.tabs.executeScript({file: "/content_scripts/beastify.js"}).then(listenForClicks).catch(reportExecuteScriptError);
7. console.error(`Could not beastify: ${error}`)

 
*/
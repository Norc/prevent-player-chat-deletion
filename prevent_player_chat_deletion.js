Hooks.on("ready", async () => {
    console.debug("Prevent Player Chat Deletion | Loaded");    
    if (!game.user.isGM) {
        console.debug("Prevent Player Chat Deletion | Non-GM user detected, disabling chat message deletion.");
    
        let css = 
            'div.message-content + nav#context-menu ol.context-items:first-child li.context-item + 				li.context-item {display: none;}';
        let style = document.createElement('style');
        document.head.appendChild(style);
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
    }
});   
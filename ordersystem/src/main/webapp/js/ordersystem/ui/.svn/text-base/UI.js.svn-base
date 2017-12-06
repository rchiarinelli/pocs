var baseCont = null;
var cp1 = null;
var cp2 = null;


function loadHome() {
	loadWidgets();
	buildTree();
}


function loadWidgets() {
    dojo.require("dijit.layout.ContentPane");
    dojo.require("dijit.layout.BorderContainer");
    //root container
    if (baseCont==null) {
        baseCont = new dijit.layout.BorderContainer({
    		design: "sidebar" 
    		,gutters: "true"
    		,liveSplitters: "false" 
    		,style: "width: 1024px; height: 768px;" 
    		,sppliter: "false"
        },
        "content");
    }
    if (cp1==null) {
        //Container for available items
        var cp1 = new dijit.layout.ContentPane({
        	 splitter: "true"
        	,region:"leading"
    	    ,style:"width: 250px;"
        });
        
        
        baseCont.addChild(cp1);

    }
    if (cp2==null) {
        //Container for selected items
        var cp2 = new dijit.layout.ContentPane({
        	splitter:"true"
        	,region:"center"
        });
        baseCont.addChild(cp2);
    }
    baseCont.startup();
}
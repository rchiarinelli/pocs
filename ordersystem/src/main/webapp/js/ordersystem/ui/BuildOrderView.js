dojo.provide("ordersystem.ui.BuildOrderView");
dojo.declare(
    "ordersystem.ui.BuildOrderView",
    null,
    {
    	targetNode : ""
        ,constructor : function(target){
        	this.targetNode = target;
        }
    	,open : function() {  
    	    dojo.require("dijit.layout.ContentPane");
    	    dojo.require("dijit.layout.BorderContainer");
    	    dojo.require("ordersystem.ui.AvailableItemsView");
    	    dojo.require("ordersystem.ui.Item");
    	    dojo.require("ordersystem.ui.SelectedItemsView");
    	    //root container
	        var baseCont = new dijit.layout.BorderContainer({
	    		design: "sidebar" 
	    		,gutters: "true"
	    		,liveSplitters: "false" 
	    		,style: "width: 100%; height: 100%;" 
	    		,sppliter: "false"
	    		,id : "buildOrderViewContainer"
	        },
	        this.targetNode);
	        //Container for available items
	        var cp1 = new dijit.layout.ContentPane({
	        	 splitter: "true"
	        	,region:"leading"
	    	    ,id:"availableItemsPane"
	    	    ,class:"span-8 colborder"
	    	    ,loadingMessage:"Carregando......"
	        });
	        var availableItemsView = new ordersystem.ui.AvailableItemsView();
	        availableItemsView.addItems([new ordersystem.ui.Item("Pizza Frango e Catupiry","")
	        						, new ordersystem.ui.Item("Pizza Calabrezza","")
	        						, new ordersystem.ui.Item("Pizza Portuguesa","")]);

	        var itemsPanel = availableItemsView.createUI();

	        cp1.set("content",itemsPanel);
	        
	        baseCont.addChild(cp1);
    	    
	        //Container for selected items
	        var cp2 = new dijit.layout.ContentPane({
	        	splitter:"true"
	        	,region:"trailing"
	        	,id:"selectedItemsContentPane"
	        	,class:"span-8 last"
	        	,loadingMessage:"Carregando......"
	        });
	        
	        var selectedItems = new ordersystem.ui.SelectedItemsView();
	        selectedItems.addItems([new ordersystem.ui.Item("Pizza Muzzarela","")
								, new ordersystem.ui.Item("Pizza Baiana","")
								, new ordersystem.ui.Item("Pizza Atum","")]);

	        cp2.set("content",selectedItems.createUI());
	        
	        baseCont.addChild(cp2);
    	    return baseCont;
    	}
    }
);
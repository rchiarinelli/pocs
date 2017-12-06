dojo.provide("ordersystem.ui.DnDAvailableItemsView");
dojo.declare(
    "ordersystem.ui.DnDAvailableItemsView",
    null,
    {
    	items : null
        ,constructor : function(srcItems){
        	items = new Array();
        	this.items = srcItems;
        }
    	,createUI : function() {
    		dojo.require("dojo.dnd.Source");
    		
    		var wishlist = new dojo.dnd.Source("availableItemsList");
    		wishlist.insertNodes(false, [
    		    "Wrist watch",
    		    "Life jacket",
    		    "Toy bulldozer",
    		    "Vintage microphone",
    		    "TIE fighter"
    		]);
    	}
    	,addItems : function(newItems) {
    		this.items = newItems;
    	}
    }
);
dojo.provide("ordersystem.ui.DnDSelectedItemsView");
dojo.declare(
    "ordersystem.ui.DnDSelectedItemsView",
    null,
    {
    	items : null
        ,constructor : function(srcItems){
        	items = new Array();
        	this.items = srcItems;
        }
    	,createUI : function() {
    		return this.refresh();
    	}
    	,refresh: function() {
    		dojo.require("dojo.dnd.Source");
    		var selectedList = new dojo.dnd.Target("selectedItemsList", {accept: ["inStock"]});
    	}
    	,addItems : function(newItems) {
    		this.items = newItems;
    	}
    	
    }
);
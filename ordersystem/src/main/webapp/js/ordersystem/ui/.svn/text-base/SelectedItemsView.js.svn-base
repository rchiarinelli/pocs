dojo.provide("ordersystem.ui.SelectedItemsView");
dojo.declare(
    "ordersystem.ui.SelectedItemsView",
    null,
    {
    	items : null
    	,instance : null
        ,constructor : function(){
        	items = new Array();
        }
    	,createUI : function() {
    		return this.refresh();
    	}
    	,refresh: function() {
    		var itemsPanelDiv = dojo.create("div"); 
    		var itemTitle = dojo.create("div", {innerHTML: "Pedido"}, itemsPanelDiv);
    		dojo.addClass(itemTitle,"itemsTitle");
    		
    		var ul = dojo.create("ul",null,itemsPanelDiv);

    		dojo.attr(ul,"id","selectedItemsList")
    		dojo.addClass(ul,"selectedItems");
    		var li = null;
    		var img = null;
    		var title = null;
    		dojo.forEach(this.items, function(data){
    		  title = "";
    		  li = dojo.create("li", { innerHTML: data.name }, ul);
    		  dojo.addClass(li,"item");  
    		});
    		this.instance = itemsPanelDiv;    		
    		return itemsPanelDiv;
    	}
    	,addItems : function(newItems) {
    		this.items = newItems;
    	}
    	
    }
);
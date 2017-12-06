dojo.provide("ordersystem.ui.AvailableItemsView");
dojo.declare(
    "ordersystem.ui.AvailableItemsView",
    null,
    {
    	items : null
    	, instance : null
        ,constructor : function(){
        	items = new Array();
        }
    	,createUI : function() {
    		return this.refresh();
    	}
    	,refresh: function() {
    		var itemsPanelDiv = dojo.create("div"); 
    		var itemTitle = dojo.create("div", {innerHTML: "Pratos"}, itemsPanelDiv);
    		dojo.addClass(itemTitle,"itemsTitle");
    		
    		var ul = dojo.create("ul",null,itemsPanelDiv);
    		
    		dojo.attr(ul,"id","availableItemsList")
    		dojo.addClass(ul,"availableItems");
    		var li = null;
    		var img = null;
    		var title = null;
    		
    		dojo.forEach(this.items, function(data){
    		  title = "";
    		  li = dojo.create("li", { innerHTML: data.name }, ul);
    		  img = dojo.create("img", null , li);
    		  dojo.attr(img,"src","images/add-icon.png")
    		  
    		  title += "Adicionar ";
    		  title += data.name;
    		  title += " ao pedido";
    		  
    		  dojo.attr(img,"title",title)
    		  dojo.attr(img,"alt","Adicionar" )
    		  dojo.addClass(img,"img_add");
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
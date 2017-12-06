dojo.provide("ordersystem.ui.BuildDnDOrderView");
dojo.declare(
    "ordersystem.ui.BuildDnDOrderView",
    null,
    {
        constructor : function(){}
    	,open : function() {  
    	    dojo.require("ordersystem.ui.Item");
    		dojo.require("dojo.dnd.Source");
    		
    		var srcItems = [new ordersystem.ui.Item("Pizza Frango e Catupiry","","inStock")
							, new ordersystem.ui.Item("Pizza Calabrezza","","inStock")
							, new ordersystem.ui.Item("Pizza Portuguesa","","inStock")];

    		var availableItemsNode = new dojo.dnd.Source("availableItemsList"
    								,{accept:["inStock","outOfStock"],creator: nodeCreator});

    		availableItemsNode.insertNodes(false,srcItems);
    		
    		var cart = new dojo.dnd.Source("selectedItemsList"
    								,{accept:["inStock"],creator: cartNodeCreator});

    		
    	}
    }
);

//create the DOM representation for available items
function nodeCreator(item, hint) {
    // create a table/tr/td-based node structure; each item here needs an
    // image, a name, a brief description, and a quantity available
    var tr = document.createElement("tr");
    var imgTd = document.createElement("td");
    var nameTd = document.createElement("td");
    var qtyTd = document.createElement("td");

    var img = document.createElement("img");
    img.src = "images/Pizza_25_25.png";
    dojo.addClass(imgTd, "itemImg");
    imgTd.appendChild(img);

    nameTd.appendChild(document.createTextNode(item.data || "Product"));
    if (item.description && hint != "avatar"){
        // avatars don’t get the description
        var descSpan = document.createElement("span");
        descSpan.innerHTML = item.description;
        nameTd.appendChild(document.createElement("br"));
        nameTd.appendChild(descSpan);
    }
    dojo.addClass(nameTd, "itemText");

    tr.appendChild(imgTd);
    tr.appendChild(nameTd);

    // use the quantity when determining the DnD item type
    var type = item.type ? ["inStock"] : ["outOfStock"];

    return {node: tr, data: item, type: type};
}    


// create the DOM representation for selected items
function cartNodeCreator(item, hint) {
    // create a table/tr/td-based node structure; each item here needs an
    // image, a name, a brief description, and a quantity available
    var tr = document.createElement("tr");
    var imgTd = document.createElement("td");
    var nameTd = document.createElement("td");
    var qtyTd = document.createElement("td");

    var img = document.createElement("img");
    img.src = "images/Pizza_25_25.png";
    dojo.addClass(imgTd, "itemImg");
    imgTd.appendChild(img);

    nameTd.appendChild(document.createTextNode(item.data || "Product"));
    if (item.description && hint != "avatar"){
        // avatars don’t get the description
        var descSpan = document.createElement("span");
        descSpan.innerHTML = item.description;
        nameTd.appendChild(document.createElement("br"));
        nameTd.appendChild(descSpan);
    }
    dojo.addClass(nameTd, "itemText");

    var qtdTxt = dojo.create("input");
    dojo.attr(qtdTxt,"value","1");
    dojo.attr(qtdTxt,"name","qtdTxt");
    dojo.attr(qtdTxt,"type","text");
    dojo.attr(qtdTxt,"size","1");
    dojo.attr(qtdTxt,"maxlength","2");

    qtyTd.appendChild(qtdTxt);
    
    tr.appendChild(imgTd);
    tr.appendChild(nameTd);
    tr.appendChild(qtyTd);

    // use the quantity when determining the DnD item type
    var type = item.type ? ["inStock"] : ["outOfStock"];

    return {node: tr, data: item, type: type};
}    

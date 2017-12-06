var orderView = null;

var mainContentWindow = null;

function loadOrderPage() {
	dojo.require("dojox.layout.ContentPane");
	if (mainContentWindow==null) {
		mainContentWindow = new dojox.layout.ContentPane({
            isContainer : true
            ,loadingMessage : "Carregando....."
            ,preventCache:true
            ,parseOnLoad:true
            ,executeScripts:true
        },
        "dojoContent");		
		console.debug("Janela principal construida");
	}
	this.mainContentWindow.href = "order.html";
	this.mainContentWindow.startup();
	this.mainContentWindow.refresh();
}

function loadOrderItems() {
    dojo.require("ordersystem.ui.BuildDnDOrderView");
	var buildOrderView = new ordersystem.ui.BuildDnDOrderView("dojoContent");
	buildOrderView.open();	
}

function loadEstablishmentPage() {
	dojo.require("dojox.layout.ContentPane");
	if (mainContentWindow==null) {
		mainContentWindow = new dojox.layout.ContentPane({
            isContainer : true
            ,loadingMessage : "Carregando....."
            ,preventCache:true
            ,parseOnLoad:true
            ,executeScripts:true
        },
        "dojoContent");		
		console.debug("Janela principal construida");
	}
	this.mainContentWindow.href = "establishments.html";
	this.mainContentWindow.refresh();
	this.mainContentWindow.startup();
}


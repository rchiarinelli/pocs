dojo.provide("ordersystem.ui.Item");
dojo.declare(
    "ordersystem.ui.Item",
    null,
    {
        children : null
        , data: ""
        , description : ""
        , type : null
        , constructor : function(arg1,arg2,arg3) {
        	this.data = arg1;
        	this.description = arg2;
        	this.type = [arg3];
        	this.children = new Array();
        }
    }
);

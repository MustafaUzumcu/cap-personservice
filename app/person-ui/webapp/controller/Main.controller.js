sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("personui.controller.Main", {
            onInit: function () {
                debugger;
                let oView = this.getView();
                oView.byId("tblPerson").bindItems({
                    path: "/Person",
                    templateShareable: false,
                    filters: [],
                    parameters: {
                        "$select": "*"
                    },
                    events: {
                        dataReceived: (oEvent) => {
                            let aContext = oEvent.getSource().getCurrentContexts();
                            aContext.forEach((expense) => {
                            });
                        }
                    }
                });
            },

            onKaydet: function () {

            }
        });
    });

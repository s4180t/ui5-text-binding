sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/Dialog",
        "sap/m/Text",
        "sap/ui/model/json/JSONModel"
    ],
    function (Controller, Dialog, Text, JSONModel) {
        return Controller.extend("sap.m.sample.Text.controller.V", {
            onInit: function () {
                this.getView().setModel(
                    new JSONModel({
                        part1: "part1",
                        part2: "part2"
                    }),
                    "mParts"
                );
            },
            handleOpenDialogPress: function () {
                const oDialog = new Dialog({
                    content: [
                        new Text({
                            text: {
                                parts: [
                                    { path: "mParts>/part1" },
                                    { path: "mParts>/part2" }
                                ],
                                formatter: function (part1, part2) {
                                    return part1 + part2 + "works";
                                }
                            }
                        })
                    ]
                });
                this.getView().addDependent(oDialog);
                oDialog.open();
            }
        });
    }
);

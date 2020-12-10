module.exports = createPageObjects({
  ManageBooks: {
    // replace <iDoAction> under actions with the method defined in teched.spec.js
    actions: {
      iClickOnCreateNewBook: function () {
        element(by.control({
            id: "admin::BooksList--fe::table::Books::LineItem::StandardAction::Create",
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click();
      }
    },

    assertions: {
      theBookListContains: function (sBook) {
        var book = element(by.control({
            controlType: "sap.m.Label",
            viewName: "sap.fe.templates.ListReport.ListReport",
            properties: {
              text: sBook
            }
        }));
        expect(book.isPresent()).toBeTruthy();
      }      
    },
  },
});

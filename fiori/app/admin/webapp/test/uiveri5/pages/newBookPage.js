module.exports = createPageObjects({
  NewBook: {
    // replace <iDoAction> under actions with the method defined in teched.spec.js
    actions: {
      iEnterTitle: function (sTitle) {
        element(by.control({
            id: "admin::BooksDetailsList--fe::EditableHeaderForm::EditableHeaderTitle::Field-inner",
            interaction: {
                idSuffix: "inner"
            }
        })).sendKeys(sTitle);
      },

      iSelectGenre: function () {
        element(by.control({
            id: "admin::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::genre_ID::Field-inner-vhi"
        })).click();

        element(by.control({
          controlType: "sap.m.RadioButton",
          viewName: "sap.fe.templates.ObjectPage.ObjectPage",
          properties: {
              editable: true
          },
          ancestor: {
              controlType: "sap.m.ColumnListItem",
              viewName: "sap.fe.templates.ObjectPage.ObjectPage",
              bindingPath: {
                  path: "/Genres(10)"
              },
              ancestor: {
                  id: "admin::BooksDetailsList--fe::FormContainer::FieldGroup::General::FieldValueHelp::genre_ID::Table"
              }
          }
        })).click();     
        element(by.control({
          id: "admin::BooksDetailsList--fe::FormContainer::FieldGroup::General::FieldValueHelp::genre_ID-ok",
          interaction: {
              idSuffix: "BDI-content"
          }
        })).click();        
        
      },

      iSelectAuthor: function () {
          element(by.control({
              id: "admin::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::author_ID::Field-inner-vhi"
          })).click();

          element(by.control({
            controlType: "sap.m.RadioButton",
            viewName: "sap.fe.templates.ObjectPage.ObjectPage",
            properties: {
                editable: true
            },
            ancestor: {
                controlType: "sap.m.ColumnListItem",
                viewName: "sap.fe.templates.ObjectPage.ObjectPage",
                bindingPath: {
                    path: "/Authors(101)"
                },
                ancestor: {
                    id: "admin::BooksDetailsList--fe::FormContainer::FieldGroup::General::FieldValueHelp::author_ID::Table"
                }
            }
          })).click();    

          element(by.control({
            id: "admin::BooksDetailsList--fe::FormContainer::FieldGroup::General::FieldValueHelp::author_ID-ok",
            interaction: {
                idSuffix: "BDI-content"
            }
          })).click();
      },

      iClickOnSaveButton: function () {
        element(by.control({
            id: "admin::BooksDetailsList--fe::FooterBar::StandardAction::Save",
            interaction: {
                idSuffix: "BDI-content"
            }
        })).click();
      },

      iNavigateBack: function () {
        element(by.control({
            id: "backBtn"
        })).click();
      }            
    },

    assertions: {      
      iSeeEditButton: function () {
        var editButton = element(by.control({
            id: "admin::BooksDetailsList--fe::StandardAction::Edit",
            interaction: {
                idSuffix: "BDI-content"
            }
        }));
        expect(editButton.isPresent()).toBeTruthy();
      },      
    },
  },
});

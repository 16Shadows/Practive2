﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//var indexVM = {
//    testValue : ko.observable("Test")
//}
//ko.applyBindings(indexVM);

// Class for book row in table
function Book(id, name, parent) {
    var self = this;
    self.bookId = ko.observable(id);
    self.bookName = ko.observable(name);
    self.bookParent = ko.observable(parent);
}

function VM() {
    var self = this;
    self.testValue = ko.observable("Test");
    self.BookItems = ko.observableArray();


    fetch("api/Books")
        .then(response => response.json())
        .then(data => self.tableData(data))
        .catch(error => console.error('Unable to get items.', error));

    self.tableData = function(data) {
        data.forEach(item => {
            var b = new Book(item.id, item.name, item.parentCategory.name);
            console.log(b);
            self.BookItems.push(b);
        })
    }
    self.addBook = function () { };
    self.removeBook = function () { };
}


ko.applyBindings(new VM());
/**
 * Data Studio by Eviratec
 * Copyright (c) 2017 Callan Peter Milne
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */'use strict';

angular
  .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('blue')
  })
  .service('entityService', function ($scope) {

  })
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
  })
  .controller('EntityTableController', function ($scope, $mdDialog) {
    let $this = this;

    this.editing = null;

    this.$type = getTypeList()[2];

    this.$cell = {};

    this.$entities = getEntityList();

    this.$entities.forEach((entity) => {
      entity.Attributes.forEach((attribute) => {
        let cellRef = `#/U/1/T/${$this.$type.ClassName}/E/${entity.ID}/A/${attribute.AttributeKey}`;
        $this.$cell[cellRef] = attribute.AttributeValue;
      });
    });

    this.showCreateDialog = function ($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         template:
           '<md-dialog layout-padding="">' +
           '<h2>Create New <span ng-bind="$type.Label" style="font-weight:700"></span></h2>' +
           '</md-dialog>',
         locals: {
           $type: $this.$type,
         },
         clickOutsideToClose: true,
         escapeToClose: true,
         controller: DialogController
      });
      function DialogController($scope, $mdDialog, $type) {
        $scope.$type = $type;
        $scope.closeDialog = function() {
          $mdDialog.hide();
        }
      }
    };

  })
  .controller('TypeListController', function ($scope) {
    this.$types = [];
    let types = getTypeList();
    types.forEach((type) => {
      this.$types.push(type);
    });
  });

function getEntityList () {
  return [
    {
      "ID": 1118889,
      "TypeID": 1878802,
      "UserID": 1,
      "Created": "2017-05-12T22:30:37.000Z",
      "Deleted": null,
      "Attributes": [
        {
          "EntityID": 1118889,
          "AttributeKey": "TLD",
          "AttributeValue": "co",
          "Created": "2017-05-12T22:32:02.000Z",
          "Modified": "2017-05-12T22:32:02.000Z",
          "Deleted": null
        },
        {
          "EntityID": 1118889,
          "AttributeKey": "FQDN",
          "AttributeValue": "3xqt.co",
          "Created": "2017-05-12T22:32:02.000Z",
          "Modified": "2017-05-12T22:32:02.000Z",
          "Deleted": null
        },
        {
          "EntityID": 1118889,
          "AttributeKey": "Registrar",
          "AttributeValue": "MARCARIA",
          "Created": "2017-05-12T22:32:02.000Z",
          "Modified": "2017-05-12T22:32:02.000Z",
          "Deleted": null
        }
      ]
    },
    {
      "ID": 1118890,
      "TypeID": 1878802,
      "UserID": 1,
      "Created": "2017-05-12T22:30:37.000Z",
      "Deleted": null,
      "Attributes": [
        {
          "EntityID": 1118890,
          "AttributeKey": "TLD",
          "AttributeValue": "sexy",
          "Created": "2017-05-12T22:32:02.000Z",
          "Modified": "2017-05-12T22:32:02.000Z",
          "Deleted": null
        },
        {
          "EntityID": 1118890,
          "AttributeKey": "FQDN",
          "AttributeValue": "awesomely.sexy",
          "Created": "2017-05-12T22:32:02.000Z",
          "Modified": "2017-05-12T22:32:02.000Z",
          "Deleted": null
        },
        {
          "EntityID": 1118890,
          "AttributeKey": "Registrar",
          "AttributeValue": "MARCARIA",
          "Created": "2017-05-12T22:32:02.000Z",
          "Modified": "2017-05-12T22:32:02.000Z",
          "Deleted": null
        }
      ]
    },
    {
      "ID": 1118891,
      "TypeID": 1878802,
      "UserID": 1,
      "Created": "2017-05-15T03:52:08.000Z",
      "Deleted": null,
      "Attributes": [
        {
          "EntityID": 1118891,
          "AttributeKey": "TLD",
          "AttributeValue": "co",
          "Created": "2017-05-15T03:53:37.000Z",
          "Modified": "2017-05-15T03:53:37.000Z",
          "Deleted": null
        },
        {
          "EntityID": 1118891,
          "AttributeKey": "FQDN",
          "AttributeValue": "eviratec.co",
          "Created": "2017-05-15T03:53:37.000Z",
          "Modified": "2017-05-15T03:53:37.000Z",
          "Deleted": null
        },
        {
          "EntityID": 1118891,
          "AttributeKey": "Registrar",
          "AttributeValue": "GODADDY",
          "Created": "2017-05-15T03:53:37.000Z",
          "Modified": "2017-05-15T03:53:37.000Z",
          "Deleted": null
        }
      ]
    }
  ];
}

function getTypeList () {
  return [
    {
      "ID": 1878799,
      "UserID": 1,
      "ParentID": null,
      "ClassName": "TaxInvoice",
      "Slug": "tax-invoice",
      "Label": "Tax Invoice (expense)",
      "Created": "2017-05-12T21:38:09.000Z",
      "Modified": "2017-05-12T21:38:09.000Z",
      "Deleted": null,
      "Attributes": [
        {
          "TypeID": 1878799,
          "AttributeKey": "TotalDue",
          "Label": "Total Due",
          "Required": 1,
          "DefaultValue": "0.00",
          "Created": "2017-05-12T21:40:07.000Z",
          "Modified": "2017-05-12T22:23:36.000Z",
          "Deleted": null
        },
        {
          "TypeID": 1878799,
          "AttributeKey": "DateDue",
          "Label": "Date Due",
          "Required": 1,
          "DefaultValue": "",
          "Created": "2017-05-12T22:01:18.000Z",
          "Modified": "2017-05-12T22:23:36.000Z",
          "Deleted": null
        },
        {
          "TypeID": 1878799,
          "AttributeKey": "DatePaid",
          "Label": "Date Paid",
          "Required": 0,
          "DefaultValue": "",
          "Created": "2017-05-12T22:01:18.000Z",
          "Modified": "2017-05-12T22:23:36.000Z",
          "Deleted": null
        },
        {
          "TypeID": 1878799,
          "AttributeKey": "IssuedBy",
          "Label": "Issued By",
          "Required": 1,
          "DefaultValue": "",
          "Created": "2017-05-12T22:01:18.000Z",
          "Modified": "2017-05-12T22:23:36.000Z",
          "Deleted": null
        }
      ]
    },
    {
      "ID": 1878801,
      "UserID": 1,
      "ParentID": null,
      "ClassName": "BankAccount",
      "Slug": "bank-account",
      "Label": "Bank Account",
      "Created": "2017-05-12T21:38:09.000Z",
      "Modified": "2017-05-12T21:38:09.000Z",
      "Deleted": null,
      "Attributes": []
    },
    {
      "ID": 1878802,
      "UserID": 1,
      "ParentID": null,
      "ClassName": "DomainName",
      "Slug": "domain-name",
      "Label": "Domain Name",
      "Created": "2017-05-12T21:38:09.000Z",
      "Modified": "2017-05-12T21:38:09.000Z",
      "Deleted": null,
      "Attributes": [
        {
          "TypeID": 1878802,
          "AttributeKey": "FQDN",
          "Label": "FQDN",
          "Required": 1,
          "DefaultValue": "example.com",
          "Created": "2017-05-12T22:30:01.000Z",
          "Modified": "2017-05-12T22:30:01.000Z",
          "Deleted": null
        },
        {
          "TypeID": 1878802,
          "AttributeKey": "TLD",
          "Label": "TLD",
          "Required": 1,
          "DefaultValue": "com",
          "Created": "2017-05-12T22:30:01.000Z",
          "Modified": "2017-05-12T22:30:01.000Z",
          "Deleted": null
        },
        {
          "TypeID": 1878802,
          "AttributeKey": "Registrar",
          "Label": "Registrar",
          "Required": 1,
          "DefaultValue": null,
          "Created": "2017-05-12T22:30:01.000Z",
          "Modified": "2017-05-12T22:30:01.000Z",
          "Deleted": null
        }
      ]
    }
  ];
}

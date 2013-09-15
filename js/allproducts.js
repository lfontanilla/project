$(function() {
  var item = function(data) {
    var self = this;
    self.id = ko.observable(data.id);
    self.name = ko.observable(data.name);
    self.description = ko.observable(data.description);
    self.pict = ko.observable(data.pict);
    self.catchphrase = ko.observable(data.catchphrase);
  };

  function ViewModel() {
    var self = this;
    self.Products = ko.observableArray([]);
    var productsmapped = [];
    $.each(data, function(key, value) {
      var product = new item({"id": value.id, "name": value.name, "description": value.description, "pict": value.pict, "catchphrase": value.catchphrase});
      productsmapped.push(product);
    });
    self.Products(productsmapped);

  }

  var vm = new ViewModel();
  ko.applyBindings(vm);

  $('.thumbnail').hover(function() {
    $(this).find('.hover-widget').fadeIn();
  }, function() {
    $(this).find('.hover-widget').fadeOut();
  });


});
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

    //filter and search vars
    self.filterOptions = ko.observableArray([
      {value: "name", Name: "Name"},
      {value: "description", Name: "description"}]);

    self.selectedOption = ko.observable("");
    self.filterValue = ko.observable("");

    self.SizeOfAll = ko.observable(0);
    self.PageSize = ko.observable(6);
    self.PageIndex = ko.observable(0);

    self.filterValue.subscribe(function(oldValue) {
      self.PageIndex(0);
    }, null, "beforeChange");

    self.PreviousPage = function() {
      $('.pagination li').removeClass('active');
      self.PageIndex(self.PageIndex() - 1);
      var page = self.PageIndex() + 1;
      $('#page'+page).addClass('active');
    };

    self.NextPage = function() {
      $('.pagination li').removeClass('active');
      self.PageIndex(self.PageIndex() + 1);
      var page = self.PageIndex() + 1;
      $('#page'+page).addClass('active');
    };

    self.PagedRows = ko.dependentObservable(function() {
      var size = self.PageSize();
      var start = self.PageIndex() * size;
      if (self.filterValue()) {
        start = self.PageIndex() * size;
        var stuff = filter();
        self.SizeOfAll(stuff.length);
        return stuff.slice(start, size + start);
      }
      else {
        self.SizeOfAll(self.Products().length);
        return self.Products.slice(start, size + start);
      }
    });

    function filter() {
      return ko.utils.arrayFilter(self.Products(), function(item) {
        if (self.selectedOption().value == "name")
          return item.name().toLowerCase().indexOf(self.filterValue().toLowerCase()) != -1;
        if (self.selectedOption().value == "description")
          return item.description().toString().toLowerCase().indexOf(self.filterValue().toLowerCase()) != -1;
      });
    }

    self.MaxPageIndex = ko.dependentObservable(function() {
      return Math.ceil(self.SizeOfAll() / self.PageSize()) - 1;
    });

    self.MaxPagesArray = ko.observableArray([]);

    self.MaxPageIndex = ko.dependentObservable(function() {
      var maxpageindex = Math.ceil(self.SizeOfAll() / self.PageSize()) - 1;
      self.MaxPagesArray([]);
      var arr = [];
      for (var i = 0; i <= maxpageindex; i++)
        arr.push({"name": i + 1, "pageToGo": i});
      self.MaxPagesArray(arr);
      return maxpageindex;
    });

    self.goto = function(item) {
      var pagetogo = item.pageToGo - self.PageIndex();
      if (!pagetogo)
        return;
      var nextpage = item.pageToGo + 1;
      if (pagetogo > 0)
        for (var i = 0; i < pagetogo; i++)
          self.NextPage();
      else
        for (var i = pagetogo; i >= pagetogo; i--)
          self.PreviousPage();      
    }
  }

  var vm = new ViewModel();
  ko.applyBindings(vm);

  $('.thumbnail').hover(function() {
    $(this).find('.hover-widget').fadeIn();
  }, function() {
    $(this).find('.hover-widget').fadeOut();
  });
  $('#page1').addClass("active");

});
// Backbone Model
var Blog = Backbone.Model.extend({
    defaults: {
        author: "",
        title: "",
        url : ""
    }
});

// Backbone Collection
var Blogs = Backbone.Collection.extend({});

// // instantiate 2 blogs
// var blog1 = new Blog({
//     author : "Michale",
//     title: "Michael's Blog",
//     url : "http:Michael.com"
// });
//
// var blog2 = new Blog({
//     author: "Davee",
//     title: "Davee Blog",
//     url : "http:Dav.com"
// });

// instantiate a collection
var blogs = new Blogs();

// backbone view one blog
var BlogView = Backbone.View.extend({
    model: new Blog(),
    tagName: "tr",

    initialize: function () {
        this.template = _.template($('.blogs-list-template').html());
    },


    events: {
        'click .edit-blog': 'edit',
        'click .update-blog' : 'update',
        'click .cancel-blog': 'cancel',
        'click .delete-blog' : 'delete'
    },

    edit: function () {
        this.$('.delete-blog').hide();
        this.$('.edit-blog').hide();
        this.$('.update-blog').show();
        this.$('.cancel-blog').show();

        var author = this.$('.author').html();
        var title = this.$('.title').html();
        var url = this.$('.url').html();

        this.$('.author').html('<input type="text" class="form-control author-update" value="'+ author + '"></input>');
        this.$('.title').html('<input type="text" class="form-control title-update" value="'+ title + '"></input>');
        this.$('.url').html('<input type="text" class="form-control url-update" value="'+ url + '"></input>');
    },

    update: function () {
        this.model.set('author', $('.author-update').val());
        this.model.set('title', $('.title-update').val());
        this.model.set('url', $('.url-update').val());
    },

    cancel: function () {
        blogsView.render();
    },

    delete: function () {
        this.model.destroy();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});


// backbone view for collection of blogs
var BlogsView = Backbone.View.extend({
    model: blogs,
    el: $('.blogs-list'),
    
    initialize: function () {
        var self = this;

        this.model.on('add', this.render, this);
        this.model.on('change', function () {
            setTimeout(function () {
                self.render();
            }, 30);
        }, this);

        this.model.on('remove', this.render, this);
    },
    
    render: function () {
        var self = this;

        this.$el.html(' ');
        _.each(this.model.toArray(), function (blog) {
           self.$el.append((new BlogView({model: blog})).render().$el);
        });

        return this;
    }
});

var blogsView = new BlogsView();

$(document).ready(function () {
   $('.add-blog').on('click', function () {

       var authorInput = $('.author-input');
       var titleInput = $('.title-input');
       var urlInput = $('.url-input');

       var blog = new Blog({
           author: authorInput.val(),
           title : titleInput.val(),
           url: urlInput.val()
       });

       authorInput.val("");
       titleInput.val("");
       urlInput.val("");

       blogs.add(blog);
   });
});


















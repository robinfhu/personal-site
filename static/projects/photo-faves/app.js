(function() {
    //Flicker API: https://www.flickr.com/services/api/
    //User ID got via: https://api.flickr.com/services/rest/?method=flickr.people.findByUsername&api_key=e10268a044bb52df0e4da75eab13a1bd&username=robinfhu

    //API to fetch photo info: https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=e10268a044bb52df0e4da75eab13a1bd&format=json&nojsoncallback=1&photo_id=36802124526&secret=dd095566c8


    function PhotoManager(galleryEl) {
        this.$el = galleryEl;

        //URL to fetch photostream
        this.apiURL = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=e10268a044bb52df0e4da75eab13a1bd&format=json&per_page=500&page=1&user_id=58092940@N03&nojsoncallback=1";

    }

    PhotoManager.prototype.refresh = function() {
        var _this = this;
        $.ajax(this.apiURL, {
            success: function(result) {
                _this.renderGallery(result.photos.photo);
            },
            error: function() {
                console.warn("Error fetching images.");
            }
        });
    };

    PhotoManager.prototype.renderGallery = function(photos) {
        var _this = this;
        this.$el.empty();

        photos = photos.filter(function(photo) {
            return photo.title.match(/\[fave\]/i);
        });

        var getFlickrImage = function(photo, size) {
            size = size || 'n';
            var imageURL = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + size + ".jpg"
            return imageURL;
        };

        photos.forEach(function(photo) {
            var imageURL = getFlickrImage(photo);
            var imageLargeURL = getFlickrImage(photo, 'b')
            var imgCell = $(
                "<a class='image-cell' rel='gallery1' href='"
                + imageLargeURL + "' title='" + photo.title + "' data-id='" + photo.id + "' >" +
                "<img src='" + imageURL + "' />" +
                "</a>");
            _this.$el.append(imgCell);
        });

        this.$el.find('a.image-cell').fancybox({
            afterLoad: function() {
                var imageId = this.element.data('id');
                var flickrURL = "https://www.flickr.com/photos/robinfhu/" + imageId;
                this.title = "<a target='_blank' href='" + flickrURL + "'>" + this.title + "</a>";
            },
            helpers: {
                title: {
                    type: "inside"
                }
            }
        });
    };

    var manager = new PhotoManager($('#photo-gallery'));
    manager.refresh();


})();
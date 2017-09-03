(function() {
    //Flicker API: https://www.flickr.com/services/api/
    //User ID got via: https://api.flickr.com/services/rest/?method=flickr.people.findByUsername&api_key=e10268a044bb52df0e4da75eab13a1bd&username=robinfhu

    //API to fetch photo info: https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=e10268a044bb52df0e4da75eab13a1bd&format=json&nojsoncallback=1&photo_id=36802124526&secret=dd095566c8


    function PhotoManager(galleryEl) {
        this.$el = galleryEl;

        //Hash to keep a list of image descriptions, keyed off the image ID.
        this.descriptions = {};

        //URL to fetch photostream
        this.apiURL = function(page) {
            page = page || 1;
            return "https://api.flickr.com/services/rest/?" +
            "method=flickr.people.getPublicPhotos&" +
            "api_key=e10268a044bb52df0e4da75eab13a1bd&format=json&" +
            "per_page=500&page=" + page +
            "&user_id=58092940@N03&nojsoncallback=1" +
            "&extras=date_taken,description,tags";
        };
    }

    PhotoManager.prototype.refresh = function() {
        var _this = this;
        //When more photos are added, add a new page here
        var totalPages = [1,2,3,4];

        this.$el.empty();
        var requests = totalPages.map(function(_, page) {
            page = page + 1;
            return $.ajax(_this.apiURL(page), {
                success: function(result) {
                },
                error: function() {
                    console.warn("Error fetching images for page: " + page);
                }
            });

        });

        $.when.apply(null, requests).then(function() {
            var responses = Array.prototype.slice.call(arguments);
            responses = responses.map(function(item) {
                return item[0].photos.photo;
            });

            var numberOfPhotos = 0;
            responses.forEach(function(photos) {
                var result = _this.renderGallery(photos);
                numberOfPhotos += result.photoCount;
            });

            $('#total-images').text(numberOfPhotos);
        });
    };

    PhotoManager.prototype.renderGallery = function(photos) {
        var _this = this;

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
            var imageLargeURL = getFlickrImage(photo, 'b');
            var imgCell = $(
                "<a class='image-cell' rel='gallery1' href='"
                + imageLargeURL + "' title='" + photo.title +
                "' data-id='" + photo.id + "' data-taken='" + photo.datetaken + "'>" +
                "<img src='" + imageURL + "' />" +
                "</a>");
            _this.$el.append(imgCell);

            //Cache the descriptions.
            _this.descriptions[photo.id] = photo.description._content;
        });

        this.$el.find('a.image-cell').fancybox({
            afterLoad: function() {
                var imageId = this.element.data('id');
                var flickrURL = "https://www.flickr.com/photos/robinfhu/" + imageId;

                var dateTaken = new Date(this.element.data('taken'));
                dateTaken = dateTaken.toDateString();
                if (dateTaken === "Invalid Date") {
                    dateTaken = this.element.data('taken');
                }
                this.title =
                    "<a target='_blank' class='title' href='" + flickrURL + "'>"
                    + this.title + "</a> <em class='date' style='margin-left:20px;'>" + dateTaken + "</em>" +
                    "<div class='description'>" + _this.descriptions[imageId] + "</div>";
            },
            helpers: {
                title: {
                    type: "inside"
                }
            }
        });

        return {
            photoCount: photos.length
        };
    };

    var manager = new PhotoManager($('#photo-gallery'));
    manager.refresh();


})();
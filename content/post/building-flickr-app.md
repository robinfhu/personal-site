---
title: "Building a Simple Flickr App"
date: 2017-09-03T13:06:40-04:00
categories:
- programming
- projects
- photography
tags:
- photography
- flickr
- javascript
slug: building-flickr-app
thumbnailImage: /images/flickr-app.png
---

I learned how to use the Flickr API and built a simple photo gallery app.

<!--more-->

## Flickr API

With the popularity of Facebook and Instagram these days, its easy to forget about Flickr. The classic photo sharing site is still robust.  I continue to store many photographs on the service.  Flickr gives you 1 terabyte of free storage, which is a ridiculous amount of space.

I wanted to build an app that could pull images from my Flickr account and post them on my blog.  Luckily it was easy with the [Flickr API](https://www.flickr.com/services/api/).

The first thing I had to do was create a **Flickr API Key**.  This can be done on the [app garden](https://www.flickr.com/services/) page.  The api key is really easy to get.

Next, I had to figure out how to get a list of my public photos.  The endpoint for that is [flickr.people.getPublicPhotos](https://www.flickr.com/services/api/flickr.people.getPublicPhotos.html).  This endpoint requires you to pass in the `user_id`, which is a little inconvenient.  You should be able to just pass in the public username, which in my case is `robinfhu`.  So the first thing I had to do was get my `user_id`, which can be found by hitting this endpoint:

```
    https://api.flickr.com/services/rest/?method=flickr.people.findByUsername&api_key=<apikey...>&username=robinfhu

```

The response is raw XML, and in it is the user_id:

```
<rsp stat="ok">
    <user id="58092940@N03" nsid="58092940@N03">
        <username>robinfhu</username>
    </user>
</rsp>
```

Once you have the `user_id`, you can call the `getPublicPhotos` API, like this:

```
https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=<apikey...>&format=json&per_page=500&page=1&user_id=58092940@N03&nojsoncallback=1
```

This will return the first 500 photos from your public photostream. If you have more photos, you need to change the `page=` parameter to the next page.

You can pass in the `extras=` parameter to get more information, like date, description and tags.

Once you have the image ID and secret, you can construct a URL by reading the [image Url documentation](https://www.flickr.com/services/api/misc.urls.html).

## Building the App

The photo gallery can be built using jQuery.  Flickr's API is not cross domain restricted, so you can use AJAX to retrieve the list of photos. It's quite convenient!

For example, this code will basically work:

```
var url = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&format=json&nojsoncallback=1&api_key=...";
$.ajax(url, {
    success: function(response) {
        //Process the list of photos...
    }
});
```

From here on out, it's just a matter of programming a front end to display the images.  I put the images in a grid and used [Fancybox](http://fancyapps.com/fancybox/) to create the slideshow.

I also learned about the [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) CSS property.

## Choosing Favorite Photos

Given that I have over 700 photos in my Flickr stream, I did not want to load all of them into my blog gallery.  So how do I decide which photos to show?

I could have used tags, or put them into a special Flickr album.  But the fastest way for me actually, was to change the image title to have the phrase `[fave]` in it.  I then filter on all image titles that contain `[fave]` and only show those.

Hacky, but solved the issue for me!

## Conclusion

This was a fun weekend project to learn more about the Flickr API.  The API is very rich, and I'm sure with more time I could build something really cool!

<h5>See the completed app <a href="/photo-faves">here</a></h5>

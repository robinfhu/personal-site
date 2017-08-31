(function (Worker) {
    if (!Worker) {
        return;
    }

    var _canvasEl = document.getElementById('mandelbrot');
    var _canvasContext = _canvasEl.getContext('2d');

    var canvas = {
        el: _canvasEl,
        width: function() {
            return this.el.width;
        },
        height: function() {
            return this.el.height;
        },
        context: _canvasContext,
        data: _canvasContext.getImageData(0,0,_canvasEl.width,_canvasEl.height),
        drawPixel: function(x, y, r,g,b,a) {
            var index = (x + y * this.width()) * 4;
            this.data.data[index + 0] = r;
            this.data.data[index + 1] = g;
            this.data.data[index + 2] = b;
            this.data.data[index + 3] = 255;
        },
        update: function() {
            this.context.putImageData(this.data, 0, 0);
        }
    };

    var isDragging = false;
    var zoomRectEl = document.getElementById('zoom-rect');
    var topPos = 0;
    _canvasEl.addEventListener('mousedown', function(evt) {
        isDragging = true;
        topPos = evt.offsetY;
        zoomRectEl.style.display = 'block';
        zoomRectEl.style.top = evt.offsetY + 'px';

        zoomRectEl.style.left = evt.offsetX + 'px';
        zoomRectEl.style.height = zoomRectEl.style.width = '0px';
    });

    _canvasEl.addEventListener('mousemove', function(evt) {
        if (!isDragging) { return; }

        var height = Math.abs(evt.offsetY - topPos);
        zoomRectEl.style.height = zoomRectEl.style.width = height + 'px';
    });

    _canvasEl.addEventListener('mouseup', function(evt) {
        isDragging = false;

        MandelCoordinates.zoom(
            parseInt(zoomRectEl.style.top),
            parseInt(zoomRectEl.style.left),
            parseInt(zoomRectEl.style.width),
            parseInt(zoomRectEl.style.height)
        );
        updateMandel();
        zoomRectEl.style.display = 'none';
    });

    var MandelCoordinates = {
        xMin: -2.5,
        xMax: 1.0,
        yMin: -1.75,
        yMax: 1.75,

        serialize: function() {
            return [
                parseFloat(this.xMin),
                parseFloat(this.yMin),
                parseFloat(this.xMax),
                parseFloat(this.yMax)
            ];
        },
        zoom: function(top, left, width, height) {
            var xLen = this.xMax - this.xMin;
            var yLen = this.yMax - this.yMin;
            var xMin = this.xMin, yMax = this.yMax;
            this.xMin = (xLen) * (left / canvas.width()) + xMin;
            this.xMax = (xLen) * ((left+width) / canvas.width()) + xMin;
            this.yMax = -(yLen) * (top / canvas.height()) + yMax;
            this.yMin = -(yLen) * ((top+height) / canvas.height()) + yMax;
        }
    };

    function setProgress(progress) {
        document.getElementById('progress').value = progress;
    }

    function processResult(data) {
        var points = data.points;
        var w = canvas.width(), h = canvas.height();

        var scale = function(d) {
            return (d / data.maxIterations) * 255;
        };
        for(var i = 0; i < points.length; i++) {
            var x = i % w, y = Math.floor(i / h);

            if (points[i] == -1) {
                canvas.drawPixel(x,y, 0,0,0);
            }
            else {
                var color = scale(points[i]);
                canvas.drawPixel(x,y, color,color,0);
            }
        }

        canvas.update();
    }

    var thread = new Worker('/projects/mandelbrot/worker.js');
    thread.onmessage = function(e) {
        if (e.data.type === 'result') {
            processResult(e.data);
        }
        else if (e.data.type === 'progress') {
            setProgress(e.data.progress);
        }
    };

    function updateMandel() {
        var iterations = document.getElementById('mandel-iterations').value;
        setProgress(0);

        thread.postMessage({
            coordinates: MandelCoordinates.serialize(),
            width: canvas.width(),
            height: canvas.height(),
            iterations: iterations,
            part: -1
        });
    }

    updateMandel();

    document.getElementById('mandel-apply').addEventListener('click', function() {
        updateMandel();
    });

})(window.Worker);

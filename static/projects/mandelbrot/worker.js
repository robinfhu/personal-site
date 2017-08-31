importScripts('/projects/mandelbrot/big.min.js');

onmessage = function(e) {
    var coordinates = e.data.coordinates;
    var width = e.data.width;
    var height = e.data.height;
    var part = e.data.part;
    var MAX_ITERS = e.data.iterations;


    //Begin processing Mandelbrot Set

    var xMin = coordinates[0],
        yMin = coordinates[1],
        xMax = coordinates[2],
        yMax = coordinates[3];

    var xFactor = (xMax - xMin) / width;
    var yFactor = -(yMax - yMin) / height;

    var numPoints = width * height;

    var result = new Array(numPoints);

    for(var i = 0; i < numPoints; i++) {
        var x = i % width, y = Math.floor(i / width);

        var cReal = xFactor * x + xMin,
            cImg = yFactor * y + yMax;

        var zReal = cReal, zImg = cImg;

        var iterations = 0;
        while(iterations < MAX_ITERS) {

            var zRealSq = zReal*zReal, zImgSq = zImg*zImg;

            if (zRealSq + zImgSq > 4.0) {
                break;
            }

            var twoAB = zReal * zImg * 2;
            zReal = zRealSq - zImgSq + cReal;
            zImg = twoAB + cImg;

            iterations++;
        }

        if (iterations >= MAX_ITERS) {
            result[i] = -1;
        }
        else {
            result[i] = iterations;
        }


    }

    postMessage({
        points: result,
        maxIterations: MAX_ITERS
    });
}
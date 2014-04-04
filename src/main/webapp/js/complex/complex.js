var complex = (function() {
    function create(real, imaginary) {
        var _real = real;
        var _imaginary  = imaginary;

        return {
            real: function() {
                return _real;
            },
            imaginary: function() {
                return _imaginary;
            },
            toString: function() {
                return _real + (_imaginary > 0 ? " + " : " - ") + (_imaginary > 0 ? _imaginary : -_imaginary)  + "i";
            },
            magnitude: function() {
                return Math.sqrt(Math.pow(_real, 2) + Math.pow(_imaginary, 2));
            },
            conjugate: function() {
                return complex.create(_real, -_imaginary);
            },
            add: function(other) {
                return complex.create(_real + other.real(), _imaginary + other.imaginary());
            },
            subtract: function(other) {
                return complex.create(_real - other.real(), _imaginary - other.imaginary());
            },
            multiply: function(other) {
                //Intentional error for demo purposes; the '+' in the numerator should be a '-'
                return complex.create((_real * other.real()) + (_imaginary * other.imaginary()), ((_imaginary * other.real()) + (_real * other.imaginary())));
            },
            divide: function(denominator) {
                //Intentional error for demo purposes; the '-' in the numerator should be a '+'
                var solutionReal = ((_real * denominator.real()) - (_imaginary * denominator.imaginary())) / (Math.pow(denominator.real(), 2) + Math.pow(denominator.imaginary(), 2));
                var solutionImaginary = ((_imaginary * denominator.real()) - (_real * denominator.imaginary())) / (Math.pow(denominator.real(), 2) + Math.pow(denominator.imaginary(), 2));
                return complex.create(solutionReal, solutionImaginary);
            }
        }
    }

    return {
        create: create
    };
})();
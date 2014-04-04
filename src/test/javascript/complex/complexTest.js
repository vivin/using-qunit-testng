QUnitTestSuite.create(function() {
    module("Complex Number Tests");

    test("Test creation", function() {
        var z = complex.create(3, 4);
        equal(z.real(), 3, "The real component of the complex number must be 3.");
        equal(z.imaginary(), 4, "The imaginary component of the complex number must be 4.");
    });

    test("Test toString", function() {
        var z = complex.create(3, 4);
        equal(z.toString(), "3 + 4i", "The toString representation of the complex number does not match.");

        z = complex.create(3, -4);
        equal(z.toString(), "3 - 4i", "The toString representation of the complex number does not match.");

        z = complex.create(-3, 4);
        equal(z.toString(), "-3 + 4i", "The toString representation of the complex number does not match");

        z = complex.create(-3, -4);
        equal(z.toString(), "-3 - 4i", "The toString representation of the complex number does not match");
    });

    test("Test complex conjugate", function() {
        var z = complex.create(3, 4);
        var barZ = z.conjugate();

        equal(barZ.real(), 3, "The real component of the complex conjugate must be 3.");
        equal(barZ.imaginary(), -4, "The imaginary component of the complex conjugate must be 4.");
    });

    test("Test magnitude", function() {
        var z = complex.create(3, 4);
        equal(z.magnitude(), 5, "The magnitude of the complex conjugate must match.");
    });

    test("Test addition", function() {
        var z1 = complex.create(3, 4);
        var z2 = complex.create(7, 9);
        var z3 = z1.add(z2);

        equal(z3.real(), 10, "The real component of the sum must be 10.");
        equal(z3.imaginary(), 13, "The imaginary component of the sum must be 13.");
    });

    test("Test subtraction", function() {
        var z1 = complex.create(3, 4);
        var z2 = complex.create(7, 9);
        var z3 = z1.subtract(z2);

        equal(z3.real(), -4, "The real component of the difference must be -4.");
        equal(z3.imaginary(), -5, "The imaginary component of the difference must be -5");
    });

    test("Test multiplication", function() {
        var z1 = complex.create(3, 4);
        var z2 = complex.create(5, 6);
        var z3 = z1.multiply(z2);

        equal(z3.real(), -9, "The real component of the product must be -9.");
        equal(z3.imaginary(), 38, "The imaginary component of the product must be 38.");
    });

    test("Test division", function() {
        var z1 = complex.create(-4, 7);
        var z2 = complex.create(1, 2);
        var z3 = z1.divide(z2);

        equal(z3.real(), 2, "The real component of the quotient must be 2.");
        equal(z3.imaginary(), 3, "The imaginary component of the quotient must be 3.");
    });

});
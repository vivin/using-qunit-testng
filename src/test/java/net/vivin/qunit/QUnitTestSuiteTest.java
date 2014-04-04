package net.vivin.qunit;

import org.testng.annotations.Factory;

/**
 * This test is a proxy for the actual QUnit Javascript test-suite. This class has a factory that returns TestNG test instances that report test failures and passes from
 * QUnit tests.
 */

@QUnitTestSuite
public class QUnitTestSuiteTest {

    @Factory
    public Object[] runQUnitTestSuite() {
        return QUnitTestSuiteRunner.run();
    }
}

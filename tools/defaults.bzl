# Default settings

# Package
PACKAGE_NAME = "angular-library-starter"
PACKAGE_NAME_SCOPE = "angular-library-starter"

# Add here additional Rollup globals (e.g. 'moment': 'moment')
ROLLUP_GLOBALS = {

}

# Add here external library dependencies
LIBRARY_DEPS = [
    "@angular//packages/core",
    "@angular//packages/common",
    "@rxjs",
    "@rxjs//operators"
]

# Add here external test dependencies
TEST_DEPS = [
    "@angular//packages/core",
    "@angular//packages/core/testing",
    "@angular//packages/common",
    "@rxjs",
    "@rxjs//operators"
]

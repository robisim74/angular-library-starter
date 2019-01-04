# The WORKSPACE file tells Bazel that this directory the project root
# The content of this file specifies all the external dependencies Bazel needs to perform a build

# The name of the workspace
workspace(name = "angular_library_starter")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Angular
http_archive(
  name = "angular",
  url = "https://github.com/angular/angular/archive/7.1.4.zip",
  strip_prefix = "angular-7.1.4"
)

# RXJS 
http_archive(
  name = "rxjs",
  url = "https://registry.yarnpkg.com/rxjs/-/rxjs-6.3.3.tgz",
  strip_prefix = "package/src"
)

# GO
# https://github.com/bazelbuild/rules_go
http_archive(
    name = "io_bazel_rules_go",
    url = "https://github.com/bazelbuild/rules_go/releases/download/0.16.5/rules_go-0.16.5.tar.gz",
    sha256 = "7be7dc01f1e0afdba6c8eb2b43d2fa01c743be1b9273ab1eaf6c233df078d705"
)

# Fetch transitive Bazel dependencies of Angular
load("@angular//packages/bazel:package.bzl", "rules_angular_dependencies")
rules_angular_dependencies()

# Fetch transitive Bazel dependencies of build_bazel_rules_typescript
load("@build_bazel_rules_typescript//:package.bzl", "rules_typescript_dependencies")
rules_typescript_dependencies()

# Fetch transitive Bazel dependencies of build_bazel_rules_nodejs
load("@build_bazel_rules_nodejs//:package.bzl", "rules_nodejs_dependencies")
rules_nodejs_dependencies()

# Load and install dependencies
load("@build_bazel_rules_nodejs//:defs.bzl", "check_bazel_version", "node_repositories", "yarn_install")

check_bazel_version("0.20.0")

node_repositories(
    node_version = "10.9.0",
    package_json = ["//:package.json"],
    preserve_symlinks = True,
    yarn_version = "1.12.1"
)

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock"
)

# Typescript workspace
load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")
ts_setup_workspace()

# Angular workspace
load("@angular//:index.bzl", "ng_setup_workspace")
ng_setup_workspace()

# Go toolchain for Bazel web testing rules
load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")
go_rules_dependencies()
go_register_toolchains()

# Web testing 
load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories", "browser_repositories")
web_test_repositories()
browser_repositories(
    chromium = True
)

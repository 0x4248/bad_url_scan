/* Bad_URL_Scan
 * A simple bad URL scanner for JavaScript
 * Github: https://github.com/lewisevans2007/bad_url_scan
 * Licence: GNU General Public License v3.0
 * By: Lewis Evans
 */

const urls = [
    "admin",
    "admin.aspx",
    "admin.html",
    "admin.php",
    "admin/home.aspx",
    "admin/home.php",
    "admin/login.aspx",
    "admin/login.html",
    "admin/login.php",
    "admin-panel",
    "admin-panel.html",
    "admin_panel",
    "admin_panel.html",
    "admin-panel.php",
    "administrator",
    "bin",
    "bin/phpunit",
    "boot",
    "cgi-bin",
    "cgi-bin/php-cgi",
    "cgi-bin/php-cgi5",
    "cgi-bin/php.cgi",
    "cgi-bin/php.cgi5",
    "cgi-bin/php4",
    "cgi-bin/php5",
    "cmd.php",
    "config.inc.php",
    "config.php",
    "config/config.inc.php",
    "configuration.php",
    "database",
    "database.html",
    "database.php",
    "db",
    "dev",
    "error_log",
    "etc",
    "home",
    "inc/config.php",
    "info.php",
    "install.php",
    "lib",
    "lib/config.php",
    "lib64",
    "log.txt",
    "mysql",
    "php.ini",
    "phpinfo.php",
    "phpmyadmin",
    "phpunit",
    "proc",
    "root",
    "sbin",
    "setup.php",
    "shell.php",
    "sql",
    "stacktrace.log",
    "system",
    "system32",
    "test.php",
    "tmp/",
    "uploads",
    "usr/bin",
    "usr/lib",
    "usr/lib64",
    "usr/local/bin",
    "usr/local/sbin",
    "usr/sbin",
    "usr/share",
    "var",
    "var/backups",
    "var/lib/mysql",
    "var/log",
    "var/www",
    "vendor/phpunit",
    "wp-admin",
    "wp-admin/admin-ajax.php",
    "wp-admin/admin-post.php",
    "wp-admin/admin.php",
    "wp-admin/edit-tags.php",
    "wp-admin/edit.php",
    "wp-admin/index.php",
    "wp-admin/link-manager.php",
    "wp-admin/media-new.php",
    "wp-config.php",
    "wp-content/plugins",
    "wp-content/themes",
    "wp-content/uploads",
    "wp-includes",
    "wp-login.php",
    "xmlrpc.php"
];

/**
 * Returns true or false depending on if the URL 
 * is bad or not from a list of bad URLs
 * @param {string} url 
 * @param {string array} ignore 
 * @returns true or false depending on if the URL is bad or not
 */
function scan(url, ignore = []) {
    for (let i = 0; i < ignore.length; i++) {
        if (url.includes(ignore[i])) {
            return false;
        }
    }
    for (let i = 0; i < urls.length; i++) {
        if (url.includes(urls[i])) {
            return true;
        }
    }
    return false;
}

module.exports = scan;
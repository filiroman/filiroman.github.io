(function() {
    function addAssets(fileList, tag) {
        for (var i = 0, l = fileList.length; i < l; i++ ) {
            document.write(tag.replace('%s', fileList[i]));
        }
    }
    addAssets(["\/ab\/assets\/Bpa\/a5a0ef0\/css\/payments.css"], '<link rel="stylesheet" href="%s">')
    addAssets(["\/ab\/assets\/Bpa\/a5a0ef0\/js\/vendor.js","\/ab\/assets\/Bpa\/a5a0ef0\/js\/bpa-ui-combined.js","\/ab\/assets\/Bpa\/a5a0ef0\/js\/bpa-common-helpers.js"], '<script defer src="%s"></script>');
})();

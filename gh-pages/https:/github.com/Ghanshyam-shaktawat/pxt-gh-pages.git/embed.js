(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/",
    "verprefix": "",
    "workerjs": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/worker.js",
    "monacoworkerjs": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/monacoworker.js",
    "gifworkerjs": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/gifjs/gif.worker.js",
    "serviceworkerjs": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/serviceworker.js",
    "typeScriptWorkerJs": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/tsworker.js",
    "pxtVersion": "9.3.7",
    "pxtRelId": "localDirRelId",
    "pxtCdnUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/",
    "commitCdnUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/",
    "blobCdnUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/",
    "cdnUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "microbit",
    "simUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/simulator.html",
    "simserviceworkerUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/simulatorserviceworker.js",
    "simworkerconfigUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/workerConfig.js",
    "partsUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/siminstructions.html",
    "runUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/run.html",
    "docsUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/docs.html",
    "multiUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/multi.html",
    "asseteditorUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/asseteditor.html",
    "skillmapUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/skillmap.html",
    "authcodeUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/authcode.html",
    "multiplayerUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/multiplayer.html",
    "kioskUrl": "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/kiosk.html",
    "isStatic": true
};

    var scripts = [
        "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/highlight.js/highlight.pack.js",
        "/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/target.js");
    scripts.push("/https://github.com/Ghanshyam-shaktawat/pxt-gh-pages.git/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())

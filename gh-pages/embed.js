(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/pxt-gh-pages/",
    "verprefix": "",
    "workerjs": "/pxt-gh-pages/worker.js",
    "monacoworkerjs": "/pxt-gh-pages/monacoworker.js",
    "gifworkerjs": "/pxt-gh-pages/gifjs/gif.worker.js",
    "serviceworkerjs": "/pxt-gh-pages/serviceworker.js",
    "typeScriptWorkerJs": "/pxt-gh-pages/tsworker.js",
    "pxtVersion": "9.3.7",
    "pxtRelId": "localDirRelId",
    "pxtCdnUrl": "/pxt-gh-pages/",
    "commitCdnUrl": "/pxt-gh-pages/",
    "blobCdnUrl": "/pxt-gh-pages/",
    "cdnUrl": "/pxt-gh-pages/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "microbit",
    "simUrl": "/pxt-gh-pages/simulator.html",
    "simserviceworkerUrl": "/pxt-gh-pages/simulatorserviceworker.js",
    "simworkerconfigUrl": "/pxt-gh-pages/workerConfig.js",
    "partsUrl": "/pxt-gh-pages/siminstructions.html",
    "runUrl": "/pxt-gh-pages/run.html",
    "docsUrl": "/pxt-gh-pages/docs.html",
    "multiUrl": "/pxt-gh-pages/multi.html",
    "asseteditorUrl": "/pxt-gh-pages/asseteditor.html",
    "skillmapUrl": "/pxt-gh-pages/skillmap.html",
    "authcodeUrl": "/pxt-gh-pages/authcode.html",
    "multiplayerUrl": "/pxt-gh-pages/multiplayer.html",
    "kioskUrl": "/pxt-gh-pages/kiosk.html",
    "isStatic": true
};

    var scripts = [
        "/pxt-gh-pages/highlight.js/highlight.pack.js",
        "/pxt-gh-pages/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/pxt-gh-pages/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/pxt-gh-pages/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/pxt-gh-pages/target.js");
    scripts.push("/pxt-gh-pages/pxtembed.js");

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

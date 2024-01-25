(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/microbit-static/",
    "verprefix": "",
    "workerjs": "/microbit-static/worker.js",
    "monacoworkerjs": "/microbit-static/monacoworker.js",
    "gifworkerjs": "/microbit-static/gifjs/gif.worker.js",
    "serviceworkerjs": "/microbit-static/serviceworker.js",
    "typeScriptWorkerJs": "/microbit-static/tsworker.js",
    "pxtVersion": "9.3.7",
    "pxtRelId": "localDirRelId",
    "pxtCdnUrl": "/microbit-static/",
    "commitCdnUrl": "/microbit-static/",
    "blobCdnUrl": "/microbit-static/",
    "cdnUrl": "/microbit-static/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "microbit",
    "simUrl": "/microbit-static/simulator.html",
    "simserviceworkerUrl": "/microbit-static/simulatorserviceworker.js",
    "simworkerconfigUrl": "/microbit-static/workerConfig.js",
    "partsUrl": "/microbit-static/siminstructions.html",
    "runUrl": "/microbit-static/run.html",
    "docsUrl": "/microbit-static/docs.html",
    "multiUrl": "/microbit-static/multi.html",
    "asseteditorUrl": "/microbit-static/asseteditor.html",
    "skillmapUrl": "/microbit-static/skillmap.html",
    "authcodeUrl": "/microbit-static/authcode.html",
    "multiplayerUrl": "/microbit-static/multiplayer.html",
    "kioskUrl": "/microbit-static/kiosk.html",
    "isStatic": true
};

    var scripts = [
        "/microbit-static/highlight.js/highlight.pack.js",
        "/microbit-static/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/microbit-static/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/microbit-static/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/microbit-static/target.js");
    scripts.push("/microbit-static/pxtembed.js");

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
